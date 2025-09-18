import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Award, 
  Calendar, 
  Clock, 
  ExternalLink,
  IndianRupee,
  Users,
  BookOpen,
  Target,
  Bell,
  CheckCircle
} from "lucide-react";
import { motion } from "motion/react";

export function TimelinePage({ onViewChange }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const scholarshipData = [
    {
      name: "MP Scholarship Portal 2.0",
      eligibility: "Students from MP (General, SC, ST, OBC). Post-matric (after class 10), plus several other categories",
      benefits: "Helps with tuition, course fees, possibly hostel or other allowances",
      category: "State Scholarship",
      deadline: "Ongoing",
      status: "Active",
      applicationMode: "Online",
      website: "scholarshipportal.mp.nic.in"
    },
    {
      name: "Mukhyamantri Medhavi Student Scheme (MMVY)",
      eligibility: "MP domiciled students; good marks in 12th / entrance exams; family income limit as per guidelines",
      benefits: "Financial assistance, fee support for professional/UG courses",
      category: "Merit-based",
      deadline: "March 2025",
      status: "Active",
      applicationMode: "Online",
      website: "mp.gov.in"
    },
    {
      name: "SC / ST / OBC Post-Matric Scholarship",
      eligibility: "Students from reserved categories (SC, ST, OBC) after Class 10. Income limits apply",
      benefits: "Helps with course fees, sometimes study materials",
      category: "Category-based",
      deadline: "December 2024",
      status: "Renewal Period",
      applicationMode: "Online",
      website: "scholarshipportal.mp.nic.in"
    },
    {
      name: "Gaon Ki Beti Yojana",
      eligibility: "Girls from rural areas of MP with good academic performance",
      benefits: "Financial support for higher education",
      category: "Girls Education",
      deadline: "February 2025",
      status: "Active",
      applicationMode: "Online",
      website: "mp.gov.in"
    },
    {
      name: "Pratibha Kiran Yojana",
      eligibility: "Meritorious girls in MP",
      benefits: "Extra support for girls' education—financial help",
      category: "Girls Education",
      deadline: "February 2025",
      status: "Active",
      applicationMode: "Online",
      website: "mp.gov.in"
    },
    {
      name: "Awas Sahayata Scheme",
      eligibility: "Students needing hostel / accommodation / housing support while studying",
      benefits: "Helps reduce cost burdens beyond just course fees",
      category: "Accommodation",
      deadline: "January 2025",
      status: "Active",
      applicationMode: "Online/Offline",
      website: "mp.gov.in"
    },
    {
      name: "Backward Classes & Minorities Welfare Scholarships",
      eligibility: "SC/ST/OBC/minority students, possibly for higher studies including post-graduate / research",
      benefits: "Support for foreign/postgraduate/research programs",
      category: "Minority Welfare",
      deadline: "March 2025",
      status: "Active",
      applicationMode: "Online",
      website: "mp.gov.in"
    }
  ];

  const examData = [
    {
      category: "Government & Civil Services",
      exams: [
        {
          name: "UPSC Civil Services (IAS, IPS, IFS)",
          eligibility: "Graduation",
          level: "National",
          nextDate: "June 2025",
          registrationStart: "February 2025",
          registrationEnd: "March 2025"
        },
        {
          name: "MPSC (Madhya Pradesh PSC)",
          eligibility: "Graduation",
          level: "State",
          nextDate: "August 2025",
          registrationStart: "May 2025",
          registrationEnd: "June 2025"
        },
        {
          name: "SSC CGL / CHSL / MTS",
          eligibility: "12th/Graduation",
          level: "National",
          nextDate: "April 2025",
          registrationStart: "January 2025",
          registrationEnd: "February 2025"
        },
        {
          name: "Railway Exams (RRB NTPC, Group D)",
          eligibility: "10th/12th/Graduation",
          level: "National",
          nextDate: "May 2025",
          registrationStart: "February 2025",
          registrationEnd: "March 2025"
        }
      ]
    },
    {
      category: "Banking & Finance",
      exams: [
        {
          name: "IBPS PO / Clerk / SO",
          eligibility: "Graduation",
          level: "National",
          nextDate: "July 2025",
          registrationStart: "April 2025",
          registrationEnd: "May 2025"
        },
        {
          name: "SBI PO / Clerk / SO",
          eligibility: "Graduation",
          level: "National",
          nextDate: "September 2025",
          registrationStart: "June 2025",
          registrationEnd: "July 2025"
        },
        {
          name: "RBI Grade B / Assistant",
          eligibility: "Graduation/Postgraduate",
          level: "National",
          nextDate: "October 2025",
          registrationStart: "July 2025",
          registrationEnd: "August 2025"
        }
      ]
    },
    {
      category: "Engineering Entrance",
      exams: [
        {
          name: "JEE Main",
          eligibility: "12th (PCM)",
          level: "National",
          nextDate: "April 2025",
          registrationStart: "January 2025",
          registrationEnd: "February 2025"
        },
        {
          name: "JEE Advanced",
          eligibility: "Top JEE Main rankers",
          level: "National",
          nextDate: "May 2025",
          registrationStart: "April 2025",
          registrationEnd: "April 2025"
        },
        {
          name: "BITSAT, VITEEE, SRMJEEE",
          eligibility: "12th (PCM)",
          level: "University",
          nextDate: "May-June 2025",
          registrationStart: "February 2025",
          registrationEnd: "April 2025"
        }
      ]
    },
    {
      category: "Medical Entrance",
      exams: [
        {
          name: "NEET-UG",
          eligibility: "12th (PCB)",
          level: "National",
          nextDate: "May 2025",
          registrationStart: "February 2025",
          registrationEnd: "March 2025"
        },
        {
          name: "NEET-PG",
          eligibility: "MBBS graduates",
          level: "National",
          nextDate: "June 2025",
          registrationStart: "March 2025",
          registrationEnd: "April 2025"
        }
      ]
    },
    {
      category: "Management Entrance",
      exams: [
        {
          name: "CAT (IIMs)",
          eligibility: "Graduation",
          level: "National",
          nextDate: "November 2025",
          registrationStart: "August 2025",
          registrationEnd: "September 2025"
        },
        {
          name: "XAT, MAT, CMAT",
          eligibility: "Graduation",
          level: "National",
          nextDate: "January 2026",
          registrationStart: "October 2025",
          registrationEnd: "November 2025"
        }
      ]
    },
    {
      category: "Law Entrance",
      exams: [
        {
          name: "CLAT (UG/PG)",
          eligibility: "12th/LLB graduates",
          level: "National",
          nextDate: "May 2025",
          registrationStart: "January 2025",
          registrationEnd: "March 2025"
        }
      ]
    },
    {
      category: "Defence Exams",
      exams: [
        {
          name: "NDA (12th pass)",
          eligibility: "12th pass",
          level: "National",
          nextDate: "April 2025",
          registrationStart: "January 2025",
          registrationEnd: "February 2025"
        },
        {
          name: "CDS (Combined Defence Services)",
          eligibility: "Graduation",
          level: "National",
          nextDate: "July 2025",
          registrationStart: "April 2025",
          registrationEnd: "May 2025"
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Renewal Period": return "bg-yellow-100 text-yellow-800";
      case "Upcoming": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredScholarships = selectedCategory === "all" 
    ? scholarshipData 
    : scholarshipData.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Timeline & Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with important scholarships, entrance exams, and deadlines to never miss an opportunity for your career growth.
          </p>
        </motion.div>

        <Tabs defaultValue="scholarship" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="scholarship" className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Scholarships</span>
            </TabsTrigger>
            <TabsTrigger value="exam" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Exams</span>
            </TabsTrigger>
          </TabsList>

          {/* Scholarships Tab */}
          <TabsContent value="scholarship">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Scholarship Categories Filter */}
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("all")}
                      className="rounded-full"
                    >
                      All Scholarships
                    </Button>
                    {/* <Button
                      variant={selectedCategory === "state" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("state")}
                      className="rounded-full"
                    >
                      State Scholarships
                    </Button>
                    <Button
                      variant={selectedCategory === "merit" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("merit")}
                      className="rounded-full"
                    >
                      Merit-based
                    </Button>
                    <Button
                      variant={selectedCategory === "girls" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("girls")}
                      className="rounded-full"
                    >
                      Girls Education
                    </Button>
                    <Button
                      variant={selectedCategory === "category" ? "default" : "outline"}
                      onClick={() => setSelectedCategory("category")}
                      className="rounded-full"
                    >
                      Category-based
                    </Button> */}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Available Scholarships in Madhya Pradesh
                </h2>
                <p className="text-gray-600">
                  {filteredScholarships.length} scholarships available for students in Alirajpur & Barwani
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredScholarships.map((scholarship, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-900 mb-2">{scholarship.name}</CardTitle>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">{scholarship.category}</Badge>
                              <Badge className={getStatusColor(scholarship.status)}>{scholarship.status}</Badge>
                              <Badge variant="outline">{scholarship.applicationMode}</Badge>
                            </div>
                          </div>
                          <Award className="w-8 h-8 text-blue-600" />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Users className="w-4 h-4 mr-2" />
                              Eligibility
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{scholarship.eligibility}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <IndianRupee className="w-4 h-4 mr-2" />
                              Benefits
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{scholarship.benefits}</p>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-orange-500" />
                              <span className="text-gray-600">Deadline: {scholarship.deadline}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2 pt-4">
                          <Button
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            onClick={() => window.open(`https://${scholarship.website}`, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Apply Now
                          </Button>
                          {/* <Button variant="outline" className="flex-1">
                            <Bell className="w-4 h-4 mr-2" />
                            Set Reminder
                          </Button> */}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Application Tips */}
              {/* <Card className="bg-gradient-to-r from-green-600 to-blue-600 border-0 shadow-xl text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <CheckCircle className="w-8 h-8 mr-3" />
                    Scholarship Application Tips
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Required Documents:</h4>
                      <ul className="text-sm space-y-1 opacity-90">
                        <li>• Caste certificate (if applicable)</li>
                        <li>• Income certificate</li>
                        <li>• Mark sheets (10th, 12th, or latest)</li>
                        <li>• Domicile certificate</li>
                        <li>• Bank account details</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Important Steps:</h4>
                      <ul className="text-sm space-y-1 opacity-90">
                        <li>• Check MP Scholarship Portal 2.0 regularly</li>
                        <li>• Keep track of renewal dates</li>
                        <li>• Contact school/college for assistance</li>
                        <li>• Apply early to avoid last-minute rush</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </motion.div>
          </TabsContent>

          {/* Exams Tab */}
          <TabsContent value="exam">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Major Entrance Exams & Competitive Tests
                </h2>
                <p className="text-gray-600">
                  Stay updated with important exam dates and registration deadlines
                </p>
              </div>

              {examData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Card className="bg-white shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 flex items-center">
                        <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {category.exams.map((exam, examIndex) => (
                          <div
                            key={examIndex}
                            className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                          >
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <h4 className="font-semibold text-gray-900">{exam.name}</h4>
                                {/* <Badge variant="outline">{exam.level}</Badge> */}
                              </div>
                              
                              <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                  <Target className="w-4 h-4" />
                                  <span>Eligibility: {exam.eligibility}</span>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4" />
                                  <span>Exam Date: {exam.nextDate}</span>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4" />
                                  <span>Registration: {exam.registrationStart} - {exam.registrationEnd}</span>
                                </div>
                              </div>
                              
                              <div className="flex space-x-2 pt-2">
                                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Register
                                </Button>
                                {/* <Button size="sm" variant="outline" className="flex-1">
                                  <Bell className="w-3 h-3 mr-1" />
                                  Remind
                                </Button> */}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Exam Preparation Tips
              <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 shadow-xl text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Target className="w-8 h-8 mr-3" />
                    Exam Preparation Strategy
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Planning Phase:</h4>
                      <ul className="text-sm space-y-1 opacity-90">
                        <li>• Understand exam pattern</li>
                        <li>• Create study schedule</li>
                        <li>• Gather study materials</li>
                        <li>• Set realistic targets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Preparation Phase:</h4>
                      <ul className="text-sm space-y-1 opacity-90">
                        <li>• Follow daily routine</li>
                        <li>• Practice mock tests</li>
                        <li>• Analyze weak areas</li>
                        <li>• Stay consistent</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Final Phase:</h4>
                      <ul className="text-sm space-y-1 opacity-90">
                        <li>• Revision & practice</li>
                        <li>• Improve speed</li>
                        <li>• Stay calm & confident</li>
                        <li>• Maintain health</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}