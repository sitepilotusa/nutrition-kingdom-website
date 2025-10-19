import Image from "next/image";
import Link from "next/link";
import LazyGoogleMap from "@/components/LazyGoogleMap";

export const metadata = {
  title: "Smoothies & Protein Shakes in Lakewood, CO",
  description:
    "Searching for a protein shake near me in Lakewood, CO? Nutrition Kingdom crafts smoothies, mega teas, waffles, and healthy fuel to keep your day moving.",
};

export default function Home() {
  return (
    <main id="main-content" className="font-sans">
      <section className="hero-section">
        <div className="container-max mx-auto px-6 pt-7 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-4 my-8">
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="word-highlight happy">
                    <span className="font-lemon gradient-happy text-4xl md:text-5xl font-bold">
                      Happy
                    </span>
                  </div>
                  
                  <div className="word-highlight healthy">
                    <span className="font-lemon gradient-healthy text-4xl md:text-5xl font-bold">
                      Healthy
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start">
                  <div className="word-highlight community">
                    <span className="font-lemon gradient-community text-4xl md:text-5xl font-bold">
                      Community
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                Lakewood&apos;s Home for Protein Shakes, Energy Teas, Waffles & Açaí Bowls
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/menu"
                className="btn-green inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
              >
                Explore Our Menu
              </Link>
              <a
                href="tel:+13038629470"
                className="btn-green-outline inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
              >
                Call (303) 862-9470
              </a>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/4.2] w-full">
            <Image
              src="/images/protein-shakes-lakewood.webp"
              alt="Delicious protein shakes and healthy smoothies at Nutrition Kingdom Lakewood, Colorado"
              fill
              className="object-cover object-top rounded-2xl shadow-2xl"
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 560px, (min-width: 768px) 50vw, 90vw"
              priority
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
          </div>
        </div>
      </section>

      {/* Come See Us Section */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-6 text-center">
          <h2 className="font-lemon gradient-brand text-4xl md:text-5xl font-bold mb-16">
            Come see us!
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <LazyGoogleMap
              src="https://maps.google.com/maps?q=Nutrition%20Kingdom,1535%20S%20Kipling%20Pkwy%20Unit%20G,%20Lakewood,%20CO%2080232&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Nutrition Kingdom Location"
              className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-green-500"
            />
            
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700 font-semibold">
                1535 S Kipling Pkwy Unit G, Lakewood, CO 80232
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
