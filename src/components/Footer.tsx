

function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About me</h2>
            <p className="mb-4">
              
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow On</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/aayush-singh-b551b1279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/ishu__21?t=vtlVHniRTPzMfxN8PZ0zXQ&s=08"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/ishu21._?igsh=NDVsMmdhdDEwZjVw"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
            <p>Mumbai, India</p>
            <p>Mumbai 400072</p>
            <p> aayusingh440@gmail.com</p>
           
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Personal Portfolio. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer