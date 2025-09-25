import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ComparisonTable from '../components/ComparisonTable'
import FAQ from '../components/FAQ'
import LocalSEO from '../components/LocalSEO'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function GraniteVsQuartzLanding() {
  const [activeTab, setActiveTab] = useState('granite')
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Granite vs Quartz Countertops | Granite Impressions - Kansas City, Olathe</title>
        <meta name="description" content="Compare granite vs quartz countertops for your Kansas City kitchen. Expert installation in Olathe, Overland Park, and metro area. Get your free quote today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Granite vs Quartz Countertops | Granite Impressions - Kansas City" />
        <meta property="og:description" content="Compare granite vs quartz countertops for your Kansas City kitchen. Expert installation in Olathe, Overland Park, and metro area." />
        <meta property="og:image" content="https://graniteimpressions.com/images/hero-luxury-kitchen.jpg" />
        <meta property="og:url" content="https://graniteimpressions.com/granite-vs-quartz-kansas-city/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Granite vs Quartz Countertops | Granite Impressions" />
        <meta name="twitter:description" content="Compare granite vs quartz countertops for your Kansas City kitchen. Expert installation in Olathe, Overland Park, and metro area." />
        <meta name="twitter:image" content="https://graniteimpressions.com/images/hero-luxury-kitchen.jpg" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        {/* Header */}
        <header className="sticky top-0 z-50 glassmorphism border-b border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bebas text-2xl tracking-wider">
              <span className="gradient-text">GRANITE IMPRESSIONS</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#comparison" className="hover:text-gradient transition-colors">Compare</a>
              <a href="#services" className="hover:text-gradient transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-gradient transition-colors">Reviews</a>
              <a href="#contact" className="btn-gradient">Get Quote</a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main>
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVufGVufDB8fHx8MTc1ODc2MjM5Mnww&ixlib=rb-4.1.0&q=85"
                alt="Luxury kitchen with premium countertops in Kansas City home"
                fill
                className="object-cover opacity-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="font-bebas text-5xl md:text-7xl leading-tight tracking-wider">
                    <span className="gradient-text-animated">GRANITE VS QUARTZ</span><br />
                    COUNTERTOPS:<br />
                    Which is Best for Your<br />
                    <span className="text-gradient">Kansas City Kitchen?</span>
                  </h1>
                  
                  <p className="text-xl leading-relaxed max-w-xl">
                    Discover the perfect countertop solution for your home. Compare durability, cost, 
                    and aesthetics with expert guidance from Olathe's premier countertop specialists 
                    serving the entire Kansas City metropolitan area.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#comparison" className="btn-gradient btn-floating">
                      Compare Now
                    </a>
                    <a href="tel:+1-913-555-0123" className="btn-secondary">
                      📞 (913) 555-0123
                    </a>
                  </div>
                </div>

                {/* Interactive Toggle */}
                <div className="glassmorphism-card p-8">
                  <div className="flex bg-gray-100 rounded-full p-2 mb-6">
                    <button 
                      onClick={() => setActiveTab('granite')}
                      className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                        activeTab === 'granite' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Granite
                    </button>
                    <button 
                      onClick={() => setActiveTab('quartz')}
                      className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                        activeTab === 'quartz' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Quartz
                    </button>
                  </div>

                  {activeTab === 'granite' && (
                    <div className="space-y-4">
                      <Image
                        src="https://images.unsplash.com/photo-1677015030639-ffb7bbe68acb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxncmFuaXRlJTIwY291bnRlcnRvcHN8ZW58MHx8fHwxNzU4NzYyMzgxfDA&ixlib=rb-4.1.0&q=85"
                        alt="Granite countertops Kansas City installation"
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h3 className="font-bebas text-2xl tracking-wider">GRANITE ADVANTAGES</h3>
                      <ul className="space-y-2">
                        <li>✓ Natural stone beauty</li>
                        <li>✓ Heat resistant up to 1200°F</li>
                        <li>✓ Unique patterns & colors</li>
                        <li>✓ Increases home value</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'quartz' && (
                    <div className="space-y-4">
                      <Image
                        src="https://images.unsplash.com/photo-1616596612351-5a7ae04e2840?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxxdWFydHolMjBjb3VudGVydG9wc3xlbnwwfHx8fDE3NTg3NjIzODZ8MA&ixlib=rb-4.1.0&q=85"
                        alt="Quartz countertops Olathe professional installation"
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h3 className="font-bebas text-2xl tracking-wider">QUARTZ ADVANTAGES</h3>
                      <ul className="space-y-2">
                        <li>✓ Non-porous surface</li>
                        <li>✓ Stain & scratch resistant</li>
                        <li>✓ Consistent patterns</li>
                        <li>✓ Low maintenance</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Pros & Cons Interactive Cards */}
          <section id="comparison" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
                  <span className="gradient-text">GRANITE VS QUARTZ</span><br />
                  DETAILED COMPARISON
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Make an informed decision with our comprehensive side-by-side comparison of 
                  granite and quartz countertops for Kansas City homes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Granite Card */}
                <div className="glassmorphism-card p-8 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1637271325753-123cd629f148?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxncmFuaXRlJTIwY291bnRlcnRvcHN8ZW58MHx8fHwxNzU4NzYyMzgxfDA&ixlib=rb-4.1.0&q=85"
                      alt="Granite countertops Kansas City kitchen renovation"
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <h3 className="font-bebas text-3xl tracking-wider gradient-text">GRANITE</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">✓ PROS</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Natural stone with unique patterns</li>
                        <li>• Heat resistant to high temperatures</li>
                        <li>• Adds significant home value</li>
                        <li>• Durable and long-lasting</li>
                        <li>• Wide variety of colors available</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">✗ CONS</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Requires periodic sealing</li>
                        <li>• Can chip or crack under impact</li>
                        <li>• Porous surface can stain</li>
                        <li>• Installation requires expertise</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Quartz Card */}
                <div className="glassmorphism-card p-8 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1560562125-ab512e4d9d29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxxdWFydHolMjBjb3VudGVydG9wc3xlbnwwfHx8fDE3NTg3NjIzODZ8MA&ixlib=rb-4.1.0&q=85"
                      alt="Quartz countertops Olathe modern kitchen"
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <h3 className="font-bebas text-3xl tracking-wider gradient-text">QUARTZ</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">✓ PROS</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Non-porous, no sealing required</li>
                        <li>• Consistent patterns and colors</li>
                        <li>• Stain and scratch resistant</li>
                        <li>• Low maintenance cleaning</li>
                        <li>• Antibacterial properties</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">✗ CONS</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Can be damaged by extreme heat</li>
                        <li>• Higher upfront cost</li>
                        <li>• Limited repair options</li>
                        <li>• Artificial appearance to some</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
                  <span className="gradient-text">BEST USE CASES</span><br />
                  FOR YOUR LIFESTYLE
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="glassmorphism-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                    👨‍👩‍👧‍👦
                  </div>
                  <h3 className="font-bebas text-2xl mb-4 gradient-text">FAMILY KITCHENS</h3>
                  <p className="text-gray-600 mb-4">
                    High-traffic family kitchens need durability and easy maintenance.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <strong>Recommendation: Quartz</strong>
                    <p className="text-sm mt-2">Non-porous surface resists stains from spills, easy to clean, and handles daily family life.</p>
                  </div>
                </div>

                <div className="glassmorphism-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                    ✨
                  </div>
                  <h3 className="font-bebas text-2xl mb-4 gradient-text">LUXURY REMODELS</h3>
                  <p className="text-gray-600 mb-4">
                    High-end renovations seeking unique, natural beauty and prestige.
                  </p>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <strong>Recommendation: Granite</strong>
                    <p className="text-sm mt-2">Natural patterns create stunning focal points, adds significant home value, timeless appeal.</p>
                  </div>
                </div>

                <div className="glassmorphism-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                    🏠
                  </div>
                  <h3 className="font-bebas text-2xl mb-4 gradient-text">RENTAL PROPERTIES</h3>
                  <p className="text-gray-600 mb-4">
                    Investment properties needing low maintenance and tenant-friendly surfaces.
                  </p>
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <strong>Recommendation: Quartz</strong>
                    <p className="text-sm mt-2">Minimal upkeep requirements, consistent appearance, reduces maintenance calls.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <ComparisonTable />

          {/* FAQ Section */}
          <FAQ />

          {/* Local SEO & Service Areas */}
          <LocalSEO />

          {/* Testimonials */}
          <Testimonials />

          {/* Contact Form */}
          <ContactForm />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}