import Image from 'next/image'

export default function LocalSEO() {
  const serviceAreas = [
    'Olathe, KS',
    'Overland Park, KS', 
    'Shawnee, KS',
    'Lenexa, KS',
    "Lee's Summit, MO",
    'Kansas City, MO',
    'Leawood, KS',
    'Prairie Village, KS'
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
            <span className="gradient-text">SERVING KANSAS CITY</span><br />
            METRO AREA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional countertop installation throughout the Kansas City metropolitan area. 
            Local expertise, premium materials, guaranteed satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Service Area Map */}
          <div className="glassmorphism-card p-8">
            <h3 className="font-bebas text-3xl mb-6 gradient-text text-center">SERVICE RADIUS MAP</h3>
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl">
                  📍
                </div>
                <p className="text-gray-600 font-semibold">Kansas City Metro Coverage Area</p>
                <p className="text-sm text-gray-500 mt-2">30+ mile radius from our Olathe headquarters</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 italic">
                Interactive map showing service radius around Granite Impressions Olathe location
              </p>
            </div>
          </div>

          {/* Business Info & Service Areas */}
          <div className="space-y-8">
            <div className="glassmorphism-card p-8">
              <h3 className="font-bebas text-3xl mb-6 gradient-text">BUSINESS INFORMATION</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <strong>Address:</strong><br />
                    <address className="not-italic text-gray-600">
                      12345 W 135th Street<br />
                      Olathe, KS 66062
                    </address>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <div>
                    <strong>Phone:</strong><br />
                    <a href="tel:+1-913-555-0123" className="text-gradient hover:underline">
                      (913) 555-0123
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🕒</span>
                  <div>
                    <strong>Business Hours:</strong><br />
                    <div className="text-gray-600 text-sm">
                      Mon-Fri: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism-card p-8">
              <h3 className="font-bebas text-3xl mb-6 gradient-text">SERVICE AREAS</h3>
              <p className="text-gray-600 mb-4">
                We proudly serve homeowners and businesses throughout the Kansas City metropolitan area:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Not in our service area?</strong> Contact us anyway! We may be able to accommodate special requests.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="font-bebas text-3xl mb-4 gradient-text">SCHEDULE YOUR FREE CONSULTATION</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to transform your Kansas City kitchen? Contact us today for a free in-home consultation and detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-gradient">
              Get Free Quote
            </a>
            <a href="tel:+1-913-555-0123" className="btn-secondary">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}