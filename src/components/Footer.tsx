export function Footer() {
      return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold">UnlockMyDevice</h3>
                <p className="text-gray-400 mt-2">Your trusted solution for unlocking devices worldwide.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-2 space-y-2">
                  <li><a href="#home" className="hover:underline">Home</a></li>
                  <li><a href="#about" className="hover:underline">About Us</a></li>
                  <li><a href="#how-it-works" className="hover:underline">How It Works?</a></li>
                  <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <p className="text-gray-400 mt-2">Email: support@unlockmydevice.com</p>
                <p className="text-gray-400">Phone: +123 456 7890</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-8">&copy; 2025 UnlockMyDevice. All rights reserved.</p>
          </div>
        </footer>
      );
    }
    