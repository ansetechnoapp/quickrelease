export function Testimonials() {
      const testimonials = [
        {
          name: "John Doe",
          feedback: "The unlocking process was super smooth and quick. Highly recommend their service!",
          image: "/user1.jpg",
        },
        {
          name: "Jane Smith",
          feedback: "Exceptional service! My iPhone was unlocked within minutes.",
          image: "/user2.jpg",
        },
        {
          name: "Michael Lee",
          feedback: "Affordable and reliable. Will definitely use their service again!",
          image: "/user3.jpg",
        },
      ];
    
      return (
        <section id="testimonials" className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-gray-50 p-6 shadow-md rounded-lg"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 mt-2">"{testimonial.feedback}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }