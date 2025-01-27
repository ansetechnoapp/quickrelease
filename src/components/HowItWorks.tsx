export function HowItWorks() {
      const steps = [
        {
          title: "Enter Device Details",
          description: "Provide your device's model and unique identifier for accurate unlocking.",
        },
        {
          title: "Choose Your Service",
          description: "Select the unlocking service that suits your needs best.",
        },
        {
          title: "Unlock Your Device",
          description: "Receive confirmation and unlock your device hassle-free!",
        },
      ];
    
      return (
        <section id="how-it-works" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-lg"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-4">{index + 1}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }