import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'granite',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - for now just log to console
    console.log('Contact form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
            <span className="gradient-text">UPGRADE YOUR KITCHEN</span><br />
            WITH GRANITE OR QUARTZ TODAY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your Kansas City kitchen? Get your free consultation and detailed quote from the region's premier countertop specialists.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism-card p-8">
            <h3 className="font-bebas text-3xl mb-6 gradient-text">GET FREE QUOTE</h3>
            <form onSubmit={handleSubmit} className="space-y-6" method="post" action="/contact">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(913) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-semibold mb-2">Project Type *</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="granite">Granite Countertops</option>
                    <option value="quartz">Quartz Countertops</option>
                    <option value="consultation">Need Consultation</option>
                    <option value="replacement">Countertop Replacement</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  rows="4"
                  placeholder="Tell us about your kitchen project, preferred materials, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn-gradient w-full">
                Get My Free Quote
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Required fields. We respect your privacy and never share your information.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glassmorphism-card p-8">
              <h3 className="font-bebas text-3xl mb-6 gradient-text">CONTACT INFO</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mr-4">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us Today</h4>
                    <a href="tel:+1-913-555-0123" className="text-gradient hover:underline">
                      (913) 555-0123
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mr-4">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Our Showroom</h4>
                    <address className="not-italic text-gray-600">
                      12345 W 135th Street<br />
                      Olathe, KS 66062
                    </address>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mr-4">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <div className="text-gray-600 text-sm">
                      Mon-Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 4:00 PM<br />
                      Sun: By Appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism-card p-8">
              <h3 className="font-bebas text-3xl mb-6 gradient-text">WHY CHOOSE US?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Free in-home consultation & quote</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>15+ years serving Kansas City</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Licensed & fully insured</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Lifetime installation warranty</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Premium material selection</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Professional installation team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-12">
          <div className="glassmorphism-card p-6 inline-block">
            <p className="text-lg font-semibold mb-2">📱 Need Immediate Assistance?</p>
            <p className="text-gray-600">Call us directly for urgent countertop needs</p>
            <a href="tel:+1-913-555-0123" className="btn-gradient mt-4 inline-block">
              Emergency Service: (913) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}