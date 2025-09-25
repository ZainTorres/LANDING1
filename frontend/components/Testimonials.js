export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Overland Park, KS",
      rating: 5,
      text: "Outstanding work! The quartz countertops transformed our kitchen completely. The Granite Impressions team was professional, punctual, and the installation was flawless. We've been cooking and entertaining so much more since the renovation. Highly recommend for anyone in the Kansas City area looking for premium countertops.",
      countertop: "Calacatta Quartz"
    },
    {
      name: "Mike Rodriguez",
      location: "Lenexa, KS", 
      rating: 5,
      text: "We chose granite for our kitchen remodel and couldn't be happier. The natural patterns are absolutely stunning and have become the centerpiece of our home. The heat resistance has been perfect for our cooking style. Granite Impressions delivered exactly what they promised on time and within budget.",
      countertop: "Black Galaxy Granite"
    },
    {
      name: "Jennifer Chen",
      location: "Olathe, KS",
      rating: 5,
      text: "After researching granite vs quartz extensively, we went with quartz for our busy family kitchen. Best decision ever! The stain resistance has been a lifesaver with our three kids. Spills wipe up easily and it still looks brand new after two years. Professional service from start to finish.",
      countertop: "Caesarstone Quartz"
    }
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
            <span className="gradient-text">WHAT OUR CUSTOMERS</span><br />
            ARE SAYING
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from Kansas City homeowners who chose Granite Impressions for their countertop installations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glassmorphism-card p-8 text-center hover:scale-105 transition-transform duration-300">
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="border-t pt-6">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
                <p className="text-gradient text-sm font-medium mt-1">
                  {testimonial.countertop}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="glassmorphism-card p-6">
            <div className="text-3xl mb-2">500+</div>
            <div className="text-sm text-gray-600">Installations Completed</div>
          </div>
          <div className="glassmorphism-card p-6">
            <div className="text-3xl mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="glassmorphism-card p-6">
            <div className="text-3xl mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="glassmorphism-card p-6">
            <div className="text-3xl mb-2">100%</div>
            <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Join hundreds of satisfied Kansas City homeowners who trust Granite Impressions.
          </p>
          <a href="#contact" className="btn-gradient btn-floating">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}