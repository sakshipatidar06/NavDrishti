import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  Brain, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  BookOpen,
  Award,
  Lightbulb
} from "lucide-react";
import { motion } from "motion/react";

export function LandingPage({ onViewChange }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Career Guidance",
      description: "Get personalized career recommendations based on your interests, skills, and aptitude through advanced AI algorithms."
    },
    {
      icon: Target,
      title: "Smart Assessment Tests",
      description: "Take comprehensive skill assessments that analyze your strengths and suggest the best career paths for your future."
    },
    {
      icon: BookOpen,
      title: "Interactive Roadmaps",
      description: "Visualize your educational journey with step-by-step roadmaps from 10th grade to your dream career."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry experts and career counselors for personalized guidance and support."
    }
  ];

  // const stats = [
  //   { number: "500+", label: "Students Guided" },
  //   { number: "100+", label: "Career Paths" },
  //   { number: "50+", label: "Colleges Listed" },
  //   { number: "90%", label: "Success Rate" }
  // ];

  // const testimonials = [
  //   {
  //     name: "Priya Sharma",
  //     role: "Engineering Student",
  //     content: "NavDrishti helped me choose the right engineering stream. The AI recommendations were spot-on!",
  //     rating: 5
  //   },
  //   {
  //     name: "Rahul Kumar",
  //     role: "Medical Aspirant",
  //     content: "The assessment test revealed my potential in medicine. Now I'm pursuing MBBS with confidence.",
  //     rating: 5
  //   },
  //   {
  //     name: "Ananya Patel",
  //     role: "Commerce Student",
  //     content: "The career roadmap feature is amazing. It showed me exactly what to do after 12th.",
  //     rating: 5
  //   }
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shape Your Future with
                <br />
                <span className="text-5xl md:text-7xl">NavDrishti</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Discover your potential, explore career paths, and make informed decisions about your educational journey with AI-powered guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={() => onViewChange("register")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onViewChange("about")}
                variant="outline"
                className="px-8 py-4 text-lg rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NavDrishti?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive career guidance platform designed specifically for Indian students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Discover Your Future?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of students who have found their ideal career path with NavDrishti
            </p>
            <Button
              onClick={() => onViewChange("register")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}