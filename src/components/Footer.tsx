import { Mail, Phone } from "lucide-react"
import Link from "next/link"


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 ">
        {/* <div>
            <h2 className="text-white text-lg font-semibold mb-4">About me</h2>
            <p className="mb-4">
              
            </p>
          </div> */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="AboutMe"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="courses"
                className="hover:text-white transition-colors duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow On</h2>
          <div className="flex space-x-4">
            <ul>
              <li>
            <a
              href="https://www.linkedin.com/in/aayush-singh-b551b1279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            </li>
               <li>
            <a
              href="https://x.com/ishu__21?t=vtlVHniRTPzMfxN8PZ0zXQ&s=08"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            </li>
             <li>
            <a
              href="https://www.instagram.com/ishu21._?igsh=NDVsMmdhdDEwZjVw"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            </li>
            </ul>
          </div>
        </div>


<div>
  <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
  {/* <p>Mumbai, India</p>
  <p>Mumbai 400072</p> */}

  {/* Email Link with Icon */}
  <p className="flex items-center gap-2">
    <Mail className="w-4 h-4 text-gray-400" />
    <a
      href="mailto:aayushraghuvanshi3@gmail.com"
      className="hover:text-white transition-colors duration-300"
    >
      aayushraghuvanshi3@gmail.com
    </a>
  </p>

  {/* Mobile Link with Icon */}
  <p className="flex items-center gap-2 mt-2">
    <Phone className="w-4 h-4 text-gray-400" />
    <a
      href="tel:+917400301417"
      className="hover:text-white transition-colors duration-300"
    >
      +91 7400301417
    </a>
  </p>
</div>



      </div>
      <p className="text-center text-xs pt-8">© 2024 Personal Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer