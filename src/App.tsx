import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
// import { AboutUs } from "./components/AboutUs";
// import { AuthPages } from "./components/AuthPages";
// import { MainDashboard } from "./components/MainDashboard";
// import { StudentPage } from "./components/StudentPage";
// import { InstitutePage } from "./components/InstitutePage";
// import { TimelinePage } from "./components/TimelinePage";
// import { ParentsPage } from "./components/ParentsPage";
// import { ScholarshipPage } from "./components/ScholarshipPage";
// import { ExamPage } from "./components/ExamPage";

export default function App() {
  const [currentView, setCurrentView] = useState("landing");
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView("dashboard");
    // Scroll to top when changing views
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView("landing");
    // Scroll to top when changing views
    window.scrollTo(0, 0);
  };

  const handleViewChange = (newView) => {
    setCurrentView(newView);
    // Scroll to top when changing views
    window.scrollTo(0, 0);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "landing":
        return <LandingPage onViewChange={handleViewChange} />;
      case "about":
        return <AboutUs onViewChange={handleViewChange} />;
      case "login":
      case "register":
        return (
          <AuthPages 
            currentView={currentView} 
            onViewChange={handleViewChange}
            onLogin={handleLogin}
          />
        );
      case "dashboard":
        return <MainDashboard user={user} onViewChange={handleViewChange} />;
      case "student":
        return <StudentPage onViewChange={handleViewChange} />;
      case "institute":
        return <InstitutePage onViewChange={handleViewChange} />;
      case "timeline":
        return <TimelinePage onViewChange={handleViewChange} />;
      case "parents":
        return <ParentsPage onViewChange={handleViewChange} />;
      case "scholarship":
        return <ScholarshipPage onViewChange={handleViewChange} />;
      case "exam":
        return <ExamPage onViewChange={handleViewChange} />;
      default:
        return <LandingPage onViewChange={handleViewChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header 
        currentView={currentView}
        onViewChange={handleViewChange}
        user={user}
        onLogout={handleLogout}
      />
      <main className="min-h-screen">
        {renderCurrentView()}
      </main>
      <Footer />
    </div>
  );
}