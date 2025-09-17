import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Microscope, 
  Calculator, 
  TrendingUp, 
  Palette, 
  ArrowRight,
  Target,
  Calendar,
  Award,
  BookOpen,
  Users,
  ChevronDown,
  ChevronUp,
  Star
} from "lucide-react";
import { motion } from "motion/react";

export function StudentPage({ onViewChange }) {
  const [selectedStream, setSelectedStream] = useState(null);
  const [expandedPath, setExpandedPath] = useState(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [assessmentResults, setAssessmentResults] = useState(null);

  const careerStreams = [
    {
      id: "pcb",
      title: "Science - Biology (PCB)",
      subtitle: "Medical & Life Sciences",
      icon: Microscope,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      description: "Suitable for students interested in medical & life sciences",
      careerPaths: [
        {
          title: "Medical (NEET)",
          paths: [
            "MBBS → MD/MS → Super Specialization → Doctor",
            "BDS → MDS → Dentist",
            "BAMS → Ayurveda Doctor",
            "BHMS → Homeopathy Doctor",
            "BUMS → Unani Medicine"
          ]
        },
        {
          title: "Allied Health Sciences",
          paths: [
            "B.Sc Nursing → M.Sc Nursing",
            "BPT (Physiotherapy)",
            "BOT (Occupational Therapy)",
            "B.Pharm → M.Pharm → Research/Pharma Industry",
            "Paramedical courses (Lab Technician, Radiology)"
          ]
        },
        {
          title: "Research & Higher Studies",
          paths: [
            "B.Sc (Biotech, Microbiology, Genetics, Zoology, Botany)",
            "Integrated M.Sc + PhD → Scientist / Professor"
          ]
        }
      ],
      exams: ["NEET-UG", "AIIMS Nursing, JIPMER", "CUET (UG)"],
      futureScope: [
        "Healthcare sector",
        "Pharmaceuticals & Biotech industry",
        "Research labs & Higher education abroad"
      ]
    },
    {
      id: "pcm",
      title: "Science - Mathematics (PCM)",
      subtitle: "Engineering & Technology",
      icon: Calculator,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      description: "Suitable for students interested in engineering, tech, research",
      careerPaths: [
        {
          title: "Engineering",
          paths: [
            "JEE Mains + JEE Advanced → IITs/NITs → B.Tech (CSE, Mechanical, Civil, etc.) → M.Tech/PhD"
          ]
        },
        {
          title: "Architecture",
          paths: [
            "NATA/JEE Paper 2 → B.Arch"
          ]
        },
        {
          title: "Defense",
          paths: [
            "NDA after 12th → Army/Navy/Airforce officer"
          ]
        },
        {
          title: "Core Science",
          paths: [
            "B.Sc (Physics, Chemistry, Maths, Statistics) → M.Sc → Research/Professor"
          ]
        },
        {
          title: "Other",
          paths: [
            "BCA → MCA → Software Industry",
            "Actuarial Science"
          ]
        }
      ],
      exams: ["JEE Mains/Advanced", "BITSAT, VITEEE, SRMJEE", "NDA", "CUET (UG)"],
      futureScope: [
        "Engineering & IT industry",
        "Government PSUs (through GATE later)",
        "Defense & Civil Services"
      ]
    },
    {
      id: "commerce",
      title: "Commerce",
      subtitle: "Business & Finance",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      description: "Suitable for business, finance, and management careers",
      careerPaths: [
        {
          title: "Professional Courses",
          paths: [
            "CA (Chartered Accountant)",
            "CS (Company Secretary)",
            "CMA (Cost & Management Accountant)"
          ]
        },
        {
          title: "Management & Business",
          paths: [
            "BBA → MBA → Corporate/Startups",
            "B.Com → M.Com → Banking, Finance"
          ]
        },
        {
          title: "Law",
          paths: [
            "CLAT → BA LLB / BBA LLB → Corporate Lawyer/Judge"
          ]
        },
        {
          title: "Finance & Analytics",
          paths: [
            "B.Com (Hons) → CFA / FRM / Actuarial Science"
          ]
        }
      ],
      exams: ["CA Foundation", "CS Foundation", "CMA Foundation", "CLAT", "CUET (UG)"],
      futureScope: [
        "Finance & Banking",
        "Stock Markets & Investment Firms",
        "Business Consulting",
        "Law Firms & Corporate houses"
      ]
    },
    {
      id: "arts",
      title: "Arts / Humanities",
      subtitle: "Liberal Arts & Social Sciences",
      icon: Palette,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      description: "Suitable for students interested in civil services, social sciences, literature, design",
      careerPaths: [
        {
          title: "Civil Services",
          paths: [
            "BA (Pol. Sci., History, Economics, Sociology) → UPSC/State PSC"
          ]
        },
        {
          title: "Design & Media",
          paths: [
            "NID/NIFT Entrance → Fashion/Textile Design",
            "Mass Communication & Journalism"
          ]
        },
        {
          title: "Social Sciences",
          paths: [
            "BA + MA → Research, Professor, NGO, Social Work"
          ]
        },
        {
          title: "Law",
          paths: [
            "CLAT → 5-year Integrated LLB"
          ]
        },
        {
          title: "Foreign Languages",
          paths: [
            "BA (Languages) → Translator, Diplomat"
          ]
        }
      ],
      exams: ["CUET (UG)", "NIFT, NID, UCEED", "CLAT", "UPSC, SSC, Banking"],
      futureScope: [
        "Civil Services (IAS/IPS/IFS)",
        "Journalism & Mass Media",
        "Social Development Sector",
        "Design & Creative Industry"
      ]
    }
  ];

  const assessmentQuestions = [
    {
      id: 1,
      question: "What type of activities do you enjoy most?",
      options: [
        { value: "pcb", text: "Studying about living organisms, human body, and natural processes" },
        { value: "pcm", text: "Solving mathematical problems and understanding how things work" },
        { value: "commerce", text: "Understanding business concepts and managing finances" },
        { value: "arts", text: "Creative activities, writing, and understanding society" }
      ]
    },
    {
      id: 2,
      question: "Which subjects do you find most interesting in school?",
      options: [
        { value: "pcb", text: "Biology, Chemistry, and life sciences" },
        { value: "pcm", text: "Mathematics, Physics, and logical reasoning" },
        { value: "commerce", text: "Economics, Business Studies, and Accountancy" },
        { value: "arts", text: "History, Political Science, Literature, and Geography" }
      ]
    },
    {
      id: 3,
      question: "What kind of career do you dream about?",
      options: [
        { value: "pcb", text: "Doctor, Researcher, or Healthcare professional" },
        { value: "pcm", text: "Engineer, Scientist, or Technology expert" },
        { value: "commerce", text: "Business leader, Banker, or Entrepreneur" },
        { value: "arts", text: "Civil servant, Journalist, or Creative professional" }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to spend your free time?",
      options: [
        { value: "pcb", text: "Reading about health, nature documentaries, or helping others" },
        { value: "pcm", text: "Building things, coding, or solving puzzles" },
        { value: "commerce", text: "Reading business news, planning events, or managing projects" },
        { value: "arts", text: "Reading books, painting, or engaging in social activities" }
      ]
    },
    {
      id: 5,
      question: "What motivates you the most?",
      options: [
        { value: "pcb", text: "Helping people and contributing to healthcare" },
        { value: "pcm", text: "Innovation and technological advancement" },
        { value: "commerce", text: "Financial success and business growth" },
        { value: "arts", text: "Social impact and cultural development" }
      ]
    }
  ];

  const handleStreamSelect = (streamId) => {
    setSelectedStream(streamId);
    setExpandedPath(null);
  };

  const handleTakeAssessment = () => {
    setShowAssessment(true);
    setCurrentQuestion(0);
    setAnswers({});
    setAssessmentResults(null);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const scores = { pcb: 0, pcm: 0, commerce: 0, arts: 0 };
    
    Object.values(answers).forEach(answer => {
      scores[answer]++;
    });

    const recommendedStream = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    setAssessmentResults({
      recommendedStream,
      scores,
      streamName: careerStreams.find(s => s.id === recommendedStream)?.title || "Science"
    });
  };

  const resetAssessment = () => {
    setShowAssessment(false);
    setCurrentQuestion(0);
    setAnswers({});
    setAssessmentResults(null);
  };

  if (showAssessment) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!assessmentResults ? (
            <>
              {/* Assessment Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Career Interest Assessment
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Question {currentQuestion + 1} of {assessmentQuestions.length}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </motion.div>

              {/* Question */}
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white shadow-xl border-0 mb-8">
                  <CardContent className="p-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">
                      {assessmentQuestions[currentQuestion].question}
                    </h2>
                    
                    <div className="space-y-4">
                      {assessmentQuestions[currentQuestion].options.map((option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Button
                            variant={answers[assessmentQuestions[currentQuestion].id] === option.value ? "default" : "outline"}
                            className={`w-full p-6 text-left justify-start h-auto ${
                              answers[assessmentQuestions[currentQuestion].id] === option.value 
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                                : 'hover:bg-blue-50'
                            }`}
                            onClick={() => handleAnswerSelect(assessmentQuestions[currentQuestion].id, option.value)}
                          >
                            <div className="flex items-center space-x-4">
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                answers[assessmentQuestions[currentQuestion].id] === option.value 
                                  ? 'bg-white border-white' 
                                  : 'border-gray-300'
                              }`}></div>
                              <span className="text-base leading-relaxed">{option.text}</span>
                            </div>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={resetAssessment}
                    className="px-6 py-3"
                  >
                    Cancel Assessment
                  </Button>
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!answers[assessmentQuestions[currentQuestion].id]}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3"
                  >
                    {currentQuestion === assessmentQuestions.length - 1 ? 'Get Results' : 'Next Question'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </>
          ) : (
            /* Assessment Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl mb-8">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete!</h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Based on your responses, we recommend:
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                    {assessmentResults.streamName}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {Object.entries(assessmentResults.scores).map(([stream, score]) => (
                      <div key={stream} className="bg-white p-4 rounded-lg shadow">
                        <div className="text-sm text-gray-600 mb-1">
                          {careerStreams.find(s => s.id === stream)?.title.split(' - ')[0] || stream.toUpperCase()}
                        </div>
                        <div className="text-2xl font-bold text-blue-600">{score}/5</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => {
                        handleStreamSelect(assessmentResults.recommendedStream);
                        setShowAssessment(false);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                    >
                      Explore Recommended Stream
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetAssessment}
                      className="px-8 py-3"
                    >
                      Retake Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

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
            Career Roadmaps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore comprehensive career paths after 10th grade. Choose your stream and discover detailed roadmaps to your dream career.
          </p>
          
          <Button
            onClick={handleTakeAssessment}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Target className="w-5 h-5 mr-2" />
            Take Career Assessment
          </Button>
        </motion.div>

        {/* Stream Selection */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Choose Your Stream (After 10th)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerStreams.map((stream, index) => (
              <motion.div
                key={stream.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => handleStreamSelect(stream.id)}
              >
                <Card className={`h-full bg-gradient-to-br ${stream.bgColor} border-2 ${selectedStream === stream.id ? 'border-blue-500 shadow-xl' : 'border-transparent hover:border-gray-200'} transition-all duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stream.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <stream.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{stream.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{stream.subtitle}</p>
                    <Badge variant="secondary" className="text-xs">
                      {stream.careerPaths.length} Career Paths
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Detailed Stream Information */}
        {selectedStream && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {careerStreams
              .filter(stream => stream.id === selectedStream)
              .map(stream => (
                <div key={stream.id} className="space-y-8">
                  {/* Stream Overview */}
                  <Card className={`bg-gradient-to-br ${stream.bgColor} border-0 shadow-xl`}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${stream.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <stream.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-900">{stream.title}</CardTitle>
                          <p className="text-gray-600 mt-2">{stream.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Tabs defaultValue="paths" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                      <TabsTrigger value="paths" className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4" />
                        <span>Career Paths</span>
                      </TabsTrigger>
                      <TabsTrigger value="exams" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Important Exams</span>
                      </TabsTrigger>
                      <TabsTrigger value="scope" className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Future Scope</span>
                      </TabsTrigger>
                    </TabsList>

                    {/* Career Paths Tab */}
                    <TabsContent value="paths" className="space-y-6">
                      {stream.careerPaths.map((category, categoryIndex) => (
                        <Card key={categoryIndex} className="bg-white shadow-lg border-0">
                          <CardHeader
                            className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setExpandedPath(expandedPath === categoryIndex ? null : categoryIndex)}
                          >
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
                              {expandedPath === categoryIndex ? 
                                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                                <ChevronDown className="w-5 h-5 text-gray-500" />
                              }
                            </div>
                          </CardHeader>
                          {expandedPath === categoryIndex && (
                            <CardContent className="space-y-3">
                              {category.paths.map((path, pathIndex) => (
                                <motion.div
                                  key={pathIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: pathIndex * 0.1 }}
                                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                                >
                                  <div className={`w-2 h-2 bg-gradient-to-r ${stream.color} rounded-full mt-2 flex-shrink-0`}></div>
                                  <span className="text-gray-700">{path}</span>
                                </motion.div>
                              ))}
                            </CardContent>
                          )}
                        </Card>
                      ))}
                    </TabsContent>

                    {/* Exams Tab */}
                    <TabsContent value="exams" className="space-y-6">
                      <Card className="bg-white shadow-lg border-0">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <BookOpen className="w-5 h-5" />
                            <span>Key Entrance Exams</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stream.exams.map((exam, examIndex) => (
                              <motion.div
                                key={examIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: examIndex * 0.1 }}
                                className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
                              >
                                <div className="flex items-center space-x-3">
                                  <Award className="w-5 h-5 text-blue-600" />
                                  <span className="font-medium text-gray-900">{exam}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Future Scope Tab */}
                    <TabsContent value="scope" className="space-y-6">
                      <Card className="bg-white shadow-lg border-0">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Users className="w-5 h-5" />
                            <span>Career Opportunities</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {stream.futureScope.map((scope, scopeIndex) => (
                              <motion.div
                                key={scopeIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: scopeIndex * 0.1 }}
                                className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                                  <span className="font-medium text-gray-900">{scope}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              ))}
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-xl">
            <CardContent className="p-8 text-white">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Future?</h3>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Take our comprehensive career assessment to get personalized recommendations based on your interests and aptitude.
              </p>
              <Button
                onClick={handleTakeAssessment}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Assessment Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}