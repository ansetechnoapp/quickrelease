export function FAQ() {
      const faqs = [
        {
          question: "How long does the unlocking process take?",
          answer: "Unlocking typically takes a few minutes to a few hours, depending on your device model.",
        },
        {
          question: "Is the unlocking process secure?",
          answer: "Yes, we use secure methods to ensure your data remains protected.",
        },
        {
          question: "What devices do you support?",
          answer: "We support a wide range of devices, including iPhones, Androids, and tablets.",
        },
      ];
    
      return (
        <section id="faq" className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }