export function Pricing() {
      const plans = [
        {
          title: "Basic",
          price: "$19.99",
          features: ["Device Unlocking", "Standard Support", "No Expiry"],
          recommended: false,
        },
        {
          title: "Pro",
          price: "$49.99",
          features: ["All Basic Features", "Priority Support", "Faster Unlocking"],
          recommended: true,
        },
        {
          title: "Enterprise",
          price: "$99.99",
          features: ["All Pro Features", "Dedicated Support", "Bulk Unlocking"],
          recommended: false,
        },
      ];
    
      return (
        <section id="pricing" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-6 border rounded-lg shadow-md ${
                    plan.recommended ? "border-blue-600 bg-blue-50" : "border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 ${
                      plan.recommended ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p className="text-4xl font-bold text-gray-800 mb-4">
                    {plan.price}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-gray-600">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`px-6 py-3 rounded-lg text-white font-medium ${
                      plan.recommended
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    {plan.recommended ? "Get Started" : "Choose Plan"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    
    export default Pricing;
    