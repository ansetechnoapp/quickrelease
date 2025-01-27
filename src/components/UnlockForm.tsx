export function UnlockForm() {
      return (
        <section id="unlock" className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Unlock Your Device</h2>
            <form className="max-w-xl mx-auto bg-gray-50 p-6 shadow-md rounded-lg">
              <div className="mb-4">
                <label htmlFor="deviceModel" className="block text-gray-700 font-medium mb-2">
                  Device Model
                </label>
                <input
                  type="text"
                  id="deviceModel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="e.g., iPhone 12 Pro"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="imei" className="block text-gray-700 font-medium mb-2">
                  IMEI Number
                </label>
                <input
                  type="text"
                  id="imei"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your device's IMEI"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      );
    }