import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, User, LogOut, ArrowLeft } from "lucide-react";

export function Header({ currentView, onViewChange, user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLandingPage = currentView === "landing";
  const isAboutPage = currentView === "about";
  const isAuthPage = currentView === "login" || currentView === "register";
  const isDashboardPage = currentView === "dashboard";
  const isSubPage = ["student", "institute", "timeline", "parents", "scholarship", "exam"].includes(currentView);

  const handleBack = () => {
    if (isSubPage) {
      onViewChange("dashboard");
    } else if (isAuthPage || isAboutPage) {
      onViewChange("landing");
    }
  };

  const renderNavigation = () => {
    if (isLandingPage) {
      return (
        <>
          <Button
            variant="ghost"
            onClick={() => onViewChange("about")}
            className="hover:bg-blue-100 transition-all duration-300"
          >
            About Us
          </Button>
          <Button
            variant="ghost"
            onClick={() => onViewChange("login")}
            className="hover:bg-blue-100 transition-all duration-300"
          >
            Login
          </Button>
          <Button
            onClick={() => onViewChange("register")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
          >
            Register
          </Button>
        </>
      );
    }

    if (isDashboardPage && user) {
      return (
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <User className="w-5 h-5" />
            <span>Welcome, {user.name || user.email}</span>
          </div>
          <Button
            variant="outline"
            onClick={onLogout}
            className="flex items-center space-x-2 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      );
    }

    return null;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-4">
            {(isAuthPage || isAboutPage || isSubPage) && (
              <Button
                variant="ghost"
                onClick={handleBack}
                className="flex items-center space-x-2 hover:bg-gray-100 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
            )}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                NavDrishti
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {renderNavigation()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="flex flex-col space-y-2">
              {renderNavigation()}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}