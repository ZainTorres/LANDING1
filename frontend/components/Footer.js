export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-bebas text-3xl mb-4 gradient-text">
              GRANITE IMPRESSIONS
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Kansas City's premier countertop specialists. Transforming kitchens with 
              beautiful granite and quartz installations since 2009. Licensed, insured, 
              and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/graniteimpressions" 
                 className="text-gray-400 hover:text-white transition-colors"
                 aria-label="Facebook">
                📘
              </a>
              <a href="https://www.instagram.com/graniteimpressions"
                 className="text-gray-400 hover:text-white transition-colors"
                 aria-label="Instagram">
                📷
              </a>
              <a href="https://www.google.com/maps"
                 className="text-gray-400 hover:text-white transition-colors"
                 aria-label="Google Maps">
                📍
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bebas text-xl mb-4 tracking-wider">SERVICES</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services/granite" className="hover:text-white transition-colors">Granite Countertops</a></li>
              <li><a href="/services/quartz" className="hover:text-white transition-colors">Quartz Countertops</a></li>
              <li><a href="/services/installation" className="hover:text-white transition-colors">Professional Installation</a></li>
              <li><a href="/services/consultation" className="hover:text-white transition-colors">Design Consultation</a></li>
              <li><a href="/services/repair" className="hover:text-white transition-colors">Repair Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-xl mb-4 tracking-wider">CONTACT</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+1-913-555-0123" className="hover:text-white transition-colors">
                  (913) 555-0123
                </a>
              </div>
              <div>
                <strong>Address:</strong><br />
                <address className="not-italic">
                  12345 W 135th Street<br />
                  Olathe, KS 66062
                </address>
              </div>
              <div>
                <strong>Hours:</strong><br />
                <span className="text-sm">
                  Mon-Fri: 8AM-6PM<br />
                  Sat: 9AM-4PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h4 className="font-bebas text-xl mb-4 gradient-text text-center">
            SERVICE AREAS
          </h4>
          <div className="grid md:grid-cols-4 gap-4 text-center text-gray-300 text-sm">
            <div>Olathe, KS</div>
            <div>Overland Park, KS</div>
            <div>Shawnee, KS</div>
            <div>Lenexa, KS</div>
            <div>Lee's Summit, MO</div>
            <div>Kansas City, MO</div>
            <div>Leawood, KS</div>
            <div>Prairie Village, KS</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            © 2025 Granite Impressions. All rights reserved. Licensed & Insured in Kansas & Missouri.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}