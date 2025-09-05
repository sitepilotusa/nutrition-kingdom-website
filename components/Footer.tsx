export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-0 relative z-10">
      <div className="container-max mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Side */}
          <div className="flex-1">
            <h3 className="font-lemon gradient-brand text-2xl font-bold mb-3">
              Nutrition Kingdom
            </h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              1535 S Kipling Pkwy Unit G<br />
              Lakewood, CO 80232
            </p>
            <p className="text-gray-600">
              <a href="tel:+13038629470" className="hover:text-green-600 transition-colors duration-200">
                (303) 862-9470
              </a>
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 md:text-right">
            {/* Store Hours */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 text-lg mb-3">Store Hours</h4>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p>Saturday - Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://www.instagram.com/nutritionkingdomlakewood/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full hover:scale-110 transition-transform duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/NutritionKingdomLakewood"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-200"
                aria-label="Like us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8">
          {/* Divider */}
          <div className="w-full h-px bg-gray-300 mb-6"></div>
          
          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4 sm:gap-0">
            <p>
              Created by{' '}
              <a
                href="https://www.sitepilot.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                www.sitepilot.us
              </a>
            </p>
            <p>&copy; {currentYear} Nutrition Kingdom. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
