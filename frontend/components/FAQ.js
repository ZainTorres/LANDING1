import { useState } from 'react'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Does granite stain?",
      answer: "Granite can stain if not properly sealed, as it's a natural porous stone. However, when professionally sealed (which we do with every installation), granite becomes highly stain-resistant. We recommend resealing every 1-2 years in Kansas City's climate to maintain optimal protection against spills from wine, coffee, and cooking oils."
    },
    {
      question: "Does quartz scratch?",
      answer: "Quartz is highly scratch-resistant due to its engineered composition of 90% crushed quartz and 10% polymer resins. While extremely durable, it can still scratch under extreme force or when cutting directly on the surface. We always recommend using cutting boards to preserve the beautiful finish of your Kansas City quartz countertops."
    },
    {
      question: "Can I put hot pans on quartz?",
      answer: "While quartz has some heat resistance, we strongly recommend using trivets or hot pads for temperatures above 300°F. Direct contact with very hot cookware can cause thermal shock, leading to cracks or discoloration. Granite, on the other hand, can handle much higher temperatures due to its natural stone composition."
    },
    {
      question: "Which is more affordable in Kansas City?",
      answer: "Granite typically has a lower upfront cost ($40-70 per square foot installed) compared to quartz ($50-90 per square foot installed) in the Kansas City area. However, when considering long-term maintenance costs, quartz may be more economical due to its low-maintenance properties and no need for periodic sealing."
    },
    {
      question: "How long does installation take?",
      answer: "Most countertop installations in the Kansas City metro area take 1-2 days. The timeline includes: Day 1 - Template creation and measurements; 1-2 weeks - Fabrication; Day 2 - Professional installation. We coordinate with your schedule to minimize kitchen downtime during your renovation."
    },
    {
      question: "Do you service all of Kansas City?",
      answer: "Yes! Granite Impressions proudly serves the entire Kansas City metropolitan area, including Olathe, Overland Park, Shawnee, Lenexa, Lee's Summit, and surrounding communities. Our experienced team brings professional countertop installation directly to your home with full warranty coverage."
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
            <span className="gradient-text">FREQUENTLY ASKED</span><br />
            QUESTIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about granite and quartz countertops from Kansas City homeowners.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-button"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className={`faq-icon ${openFaq === index ? 'open' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {openFaq === index && (
                <div
                  id={`faq-content-${index}`}
                  className="faq-content"
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? Our Kansas City experts are ready to help.
          </p>
          <a href="tel:+1-913-555-0123" className="btn-gradient">
            Call (913) 555-0123
          </a>
        </div>
      </div>
    </section>
  )
}