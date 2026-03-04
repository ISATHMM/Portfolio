import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left side - name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">Mohamed Isath</h3>
            <p className="text-sm text-gray-400 mt-1">
              Frontend Developer & UI/UX Enthusiast
            </p>
          </div>

          {/* Right side - social icons */}
          <div className="flex space-x-5">
            <a
              href="https://github.com/ISATHMM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-isath-84633931a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110 hidden"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Mohamed Isath. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
