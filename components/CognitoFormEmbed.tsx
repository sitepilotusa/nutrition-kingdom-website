"use client";

import { useEffect, useRef } from "react";

type CognitoFormEmbedProps = {
  formKey: string;
  formId: string;
};

/**
 * Lazily loads the Cognito Forms embed script once the form enters the viewport.
 */
export default function CognitoFormEmbed({ formKey, formId }: CognitoFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const hasLoadedForm = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadForm = () => {
      if (hasLoadedForm.current || !container) return;
      hasLoadedForm.current = true;

      const script = document.createElement("script");
      script.src = "https://www.cognitoforms.com/f/seamless.js";
      script.dataset.key = formKey;
      script.dataset.form = formId;
      script.async = true;

      container.appendChild(script);
      scriptRef.current = script;
    };

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            loadForm();
            observer?.disconnect();
          }
        },
        { rootMargin: "300px 0px" }
      );

      observer.observe(container);
    } else {
      loadForm();
    }

    return () => {
      observer?.disconnect();
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
      const embedContainer = container.querySelector<HTMLElement>(".cognito");
      embedContainer?.replaceChildren();
      hasLoadedForm.current = false;
    };
  }, [formId, formKey]);

  return (
    <div ref={containerRef}>
      <div className="cognito" data-key={formKey} data-form={formId}></div>
    </div>
  );
}
