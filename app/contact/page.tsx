import LazyGoogleMap from "@/components/LazyGoogleMap";
import CognitoFormEmbed from "@/components/CognitoFormEmbed";

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page-bg min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-max mx-auto px-6 text-center">
          <h1 className="font-lemon gradient-brand text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Visit us in Lakewood, give us a call, or send us a message.
          </p>
        </div>
      </section>

      <div className="container-max mx-auto px-6 pb-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Store Info Card */}
          <div className="contact-card">
            <h2 className="font-lemon gradient-brand text-2xl font-bold mb-6 text-center">
              Visit Us
            </h2>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-lg font-semibold text-gray-800">Lakewood Square Shopping Center</p>
                <p className="text-gray-600">
                  1535 S Kipling Pkwy Unit G<br />
                  Lakewood, CO 80232
                </p>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="contact-card">
            <h2 className="font-lemon gradient-brand text-2xl font-bold mb-6 text-center">
              Store Hours
            </h2>
            <div className="space-y-3 text-center">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="font-semibold text-green-600">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Saturday - Sunday</span>
                  <span className="font-semibold text-green-600">9:00 AM - 2:00 PM</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-green-100 mt-4">
                <p className="text-lg font-semibold text-green-600">
                  <a href="tel:+13038629470" className="hover:text-green-700 transition-colors duration-200">
                    (303) 862-9470
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="contact-card md:col-span-2 lg:col-span-1">
            <h2 className="font-lemon gradient-brand text-2xl font-bold mb-6 text-center">
              Follow Us
            </h2>
            <div className="space-y-4 text-center">
              <p className="text-gray-600">Stay connected for updates, new flavors, and special offers!</p>
              
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.instagram.com/nutritionkingdomlakewood/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full hover:scale-110 transition-transform duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/NutritionKingdomLakewood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-200"
                  aria-label="Like us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Find Us
            </h2>
            <p className="text-gray-600">Located in Lakewood Square Shopping Center</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <LazyGoogleMap
              src="https://maps.google.com/maps?q=Nutrition%20Kingdom,1535%20S%20Kipling%20Pkwy%20Unit%20G,%20Lakewood,%20CO%2080232&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Nutrition Kingdom location map"
              className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-green-500"
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600">Have questions? Want to know more about our products? We&apos;d love to hear from you!</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <CognitoFormEmbed formKey="6bC91qZ8AUioh9fFRWGrCQ" formId="15" />
          </div>
        </section>
      </div>
    </main>
  );
}
