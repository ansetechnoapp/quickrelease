export function Hero() {
      return (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
            {/* Text Content */}
            <div className="flex flex-col items-start text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Unlock Your Device with Ease!
              </h1>
              <p className="text-lg text-gray-600">
                Fast, secure, and hassle-free unlocking services for all your devices. Start now and experience a seamless process.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
                  Learn More
                </button>
              </div>
            </div>
    
            {/* Image Content */}
            <div className="grid place-items-center md:place-items-end">
              <img
                src="/hero-image.png"
                alt="Device unlocking illustration"
                className="w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </section>
      );
    }
    
    export default Hero;
    