import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About NavDrishti */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <h3 className="text-xl font-bold">NavDrishti</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering students with AI-powered career guidance, personalized recommendations, and comprehensive educational pathways for a brighter future.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Career Assessment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">College Finder</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Scholarships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Exam Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Career Roadmaps</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">AI Career Counseling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Skill Assessment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">College Recommendations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Parent Guidance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Progress Tracking</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">support@navdrishti.gov.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 NavDrishti - Government of India Initiative. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
