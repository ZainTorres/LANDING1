export default function ComparisonTable() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider mb-6">
            <span className="gradient-text">DETAILED COMPARISON</span><br />
            GRANITE VS QUARTZ TABLE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Side-by-side comparison of key factors to help you choose the perfect countertop for your Kansas City kitchen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="comparison-table w-full">
            <thead>
              <tr>
                <th className="text-left">Feature</th>
                <th className="text-center">Granite</th>
                <th className="text-center">Quartz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Durability</td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Excellent (7/10 hardness)
                </td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Excellent (7/10 hardness)
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Maintenance</td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                  Requires sealing
                </td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Minimal maintenance
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Cost (Kansas City)</td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  $40-70/sq ft installed
                </td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                  $50-90/sq ft installed
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Heat Resistance</td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Excellent (1200°F+)
                </td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                  Good (up to 300°F)
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Stain Resistance</td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                  Good (with sealing)
                </td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Excellent (non-porous)
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Design Variation</td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Unique natural patterns
                </td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                  Consistent engineered patterns
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Resale Value</td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  High ROI
                </td>
                <td className="text-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  High ROI
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need help deciding? Our Kansas City countertop experts are here to guide you.
          </p>
          <a href="#contact" className="btn-gradient btn-floating">
            Get Expert Consultation
          </a>
        </div>
      </div>
    </section>
  )
}