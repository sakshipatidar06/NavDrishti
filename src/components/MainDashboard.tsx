import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  User, 
  Building2, 
  Calendar, 
  Users, 
  ArrowRight,
  BookOpen,
  Award,
  Target,
  TrendingUp
} from "lucide-react";
import { motion } from "motion/react";

export function MainDashboard({ user, onViewChange }) {
  const dashboardItems = [
    {
      id: "student",
      title: "Student",
      description: "Explore career paths, take assessments, and discover your potential with personalized roadmaps",
      icon: User,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      features: ["Career Assessment", "Personalized Roadmaps", "Stream Selection", "Progress Tracking"]
    },
    {
      id: "institute",
      title: "Institute",
      description: "Find colleges, explore courses, and discover educational opportunities in your region",
      icon: Building2,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      features: ["College Finder", "Course Details", "Admission Info", "Rankings & Reviews"]
    },
    {
      id: "timeline",
      title: "Timeline",
      description: "Track important scholarships, exams, and deadlines to stay ahead in your career journey",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      features: ["Scholarship Tracker", "Exam Calendar", "Important Deadlines", "Application Reminders"]
    },
    {
      id: "parents",
      title: "Parents",
      description: "Access AI-powered guidance and mentorship to support your child's career decisions",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      features: ["AI Chatbot", "Career Insights", "Expert Guidance", "Parent Resources"]
    }
  ];

  const quickStats = [
    { label: "Career Paths", value: "100+", icon: Target },
    { label: "Colleges Listed", value: "12+", icon: Building2 },
    { label: "Scholarships", value: "50+", icon: Award },
    { label: "Success Rate", value: "95%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
            Welcome to NavDrishti, {user?.name || "Student"}!
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your personalized career guidance platform. Choose from the options below to start your journey towards a successful future. Discover your potential and make informed decisions about your educational path.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className="text-center p-6 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-2">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Main Dashboard Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dashboardItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => onViewChange(item.id)}
              >
                <Card className={`h-full bg-gradient-to-br ${item.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2`}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:transform group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className={`w-full mt-6 bg-gradient-to-r ${item.color} hover:opacity-90 text-white rounded-xl py-3 transition-all duration-300 group-hover:shadow-lg`}
                    >
                      Explore {item.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-xl">
            <CardContent className="p-8 text-white">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Our AI-powered career guidance system is here to help you every step of the way. 
                Start with the Student section to take your personalized assessment.
              </p>
              <Button
                onClick={() => onViewChange("student")}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}