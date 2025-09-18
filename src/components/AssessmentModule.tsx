// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Progress } from "./ui/progress";
// import { Badge } from "./ui/badge";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { Label } from "./ui/label";
// import { 
//   Brain, 
//   Clock, 
//   CheckCircle, 
//   Code, 
//   Users, 
//   Target,
//   ArrowRight,
//   RotateCcw
// } from "lucide-react";

// export function AssessmentModule({ onViewChange }) {
//   const [currentAssessment, setCurrentAssessment] = useState(null);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   const assessmentTypes = [
//     {
//       id: "aptitude",
//       title: "Aptitude Test",
//       description: "Evaluate your logical reasoning, numerical ability, and verbal skills",
//       duration: "45 minutes",
//       questions: 30,
//       icon: Brain,
//       difficulty: "Medium",
//       completed: false
//     },
//     {
//       id: "personality",
//       title: "Personality Assessment",
//       description: "Understand your personality traits and work style preferences",
//       duration: "30 minutes",
//       questions: 25,
//       icon: Users,
//       difficulty: "Easy",
//       completed: true
//     },
//     {
//       id: "technical",
//       title: "Technical Skills",
//       description: "Test your programming and technical knowledge",
//       duration: "60 minutes",
//       questions: 40,
//       icon: Code,
//       difficulty: "Hard",
//       completed: false
//     },
//     {
//       id: "interests",
//       title: "Career Interests",
//       description: "Discover what type of work environments and tasks you prefer",
//       duration: "20 minutes",
//       questions: 20,
//       icon: Target,
//       difficulty: "Easy",
//       completed: false
//     }
//   ];

//   const sampleQuestions = {
//     aptitude: [
//       {
//         question: "If a car travels 180 km in 3 hours, what is its average speed?",
//         options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
//         correct: "60 km/h"
//       },
//       {
//         question: "Complete the sequence: 2, 6, 12, 20, 30, ?",
//         options: ["40", "42", "44", "46"],
//         correct: "42"
//       },
//       {
//         question: "Choose the word that best completes the analogy: Book : Library :: Car : ?",
//         options: ["Road", "Garage", "Engine", "Driver"],
//         correct: "Garage"
//       }
//     ],
//     personality: [
//       {
//         question: "In group projects, you prefer to:",
//         options: ["Lead the team", "Contribute ideas", "Handle specific tasks", "Support others"],
//         correct: "Lead the team"
//       },
//       {
//         question: "When facing a problem, you typically:",
//         options: ["Analyze all options", "Trust your instincts", "Seek advice", "Try different approaches"],
//         correct: "Analyze all options"
//       }
//     ],
//     technical: [
//       {
//         question: "Which of the following is NOT a JavaScript data type?",
//         options: ["string", "boolean", "integer", "undefined"],
//         correct: "integer"
//       },
//       {
//         question: "What does HTML stand for?",
//         options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
//         correct: "Hyper Text Markup Language"
//       }
//     ]
//   };

//   const startAssessment = (assessmentId: string) => {
//     setCurrentAssessment(assessmentId);
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResults(false);
//   };

//   const handleAnswer = (value: string) => {
//     setAnswers(prev => ({
//       ...prev,
//       [currentQuestion]: value
//     }));
//   };

//   const nextQuestion = () => {
//     const questions = sampleQuestions[currentAssessment as keyof typeof sampleQuestions] || [];
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(prev => prev + 1);
//     } else {
//       setShowResults(true);
//     }
//   };

//   const calculateScore = () => {
//     const questions = sampleQuestions[currentAssessment as keyof typeof sampleQuestions] || [];
//     let correct = 0;
//     questions.forEach((q, index) => {
//       if (answers[index] === q.correct) {
//         correct++;
//       }
//     });
//     return Math.round((correct / questions.length) * 100);
//   };

//   const resetAssessment = () => {
//     setCurrentAssessment(null);
//     setCurrentQuestion(0);
//     setAnswers({});
//     setShowResults(false);
//   };

//   if (showResults) {
//     const score = calculateScore();
//     const assessment = assessmentTypes.find(a => a.id === currentAssessment);
    
//     return (
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <Card className="text-center">
//           <CardHeader>
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <CheckCircle className="w-8 h-8 text-green-600" />
//             </div>
//             <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
//             <CardDescription>
//               You've successfully completed the {assessment?.title}
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="bg-gray-50 rounded-lg p-6">
//               <div className="text-4xl font-bold text-blue-600 mb-2">{score}%</div>
//               <p className="text-gray-600">Your Score</p>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-4 text-left">
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-blue-900 mb-2">Strengths</h4>
//                 <ul className="text-sm text-blue-800 space-y-1">
//                   <li>• Logical reasoning</li>
//                   <li>• Problem solving</li>
//                   <li>• Analytical thinking</li>
//                 </ul>
//               </div>
//               <div className="bg-yellow-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-yellow-900 mb-2">Areas to Improve</h4>
//                 <ul className="text-sm text-yellow-800 space-y-1">
//                   <li>• Time management</li>
//                   <li>• Technical knowledge</li>
//                   <li>• Communication skills</li>
//                 </ul>
//               </div>
//               <div className="bg-green-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-green-900 mb-2">Recommendations</h4>
//                 <ul className="text-sm text-green-800 space-y-1">
//                   <li>• Software Engineer</li>
//                   <li>• Data Analyst</li>
//                   <li>• Product Manager</li>
//                 </ul>
//               </div>
//             </div>

//             <div className="flex gap-4 justify-center">
//               <Button onClick={resetAssessment}>
//                 <RotateCcw className="w-4 h-4 mr-2" />
//                 Take Another Test
//               </Button>
//               <Button variant="outline" onClick={() => onViewChange('dashboard')}>
//                 Back to Dashboard
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   if (currentAssessment) {
//     const questions = sampleQuestions[currentAssessment] || [];
//     const currentQ = questions[currentQuestion];
//     const progress = ((currentQuestion + 1) / questions.length) * 100;

//     return (
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-2xl font-bold">
//               {assessmentTypes.find(a => a.id === currentAssessment)?.title}
//             </h2>
//             <Badge variant="outline">
//               {currentQuestion + 1} / {questions.length}
//             </Badge>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle className="text-xl">
//               Question {currentQuestion + 1}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <p className="text-lg">{currentQ?.question}</p>
            
//             <RadioGroup 
//               value={answers[currentQuestion] || ""} 
//               onValueChange={handleAnswer}
//               className="space-y-3"
//             >
//               {currentQ?.options.map((option, index) => (
//                 <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
//                   <RadioGroupItem value={option} id={`option-${index}`} />
//                   <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
//                     {option}
//                   </Label>
//                 </div>
//               ))}
//             </RadioGroup>

//             <div className="flex justify-between">
//               <Button 
//                 variant="outline" 
//                 onClick={resetAssessment}
//               >
//                 Exit Assessment
//               </Button>
//               <Button 
//                 onClick={nextQuestion} 
//                 disabled={!answers[currentQuestion]}
//               >
//                 {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Career Assessment Center
//         </h1>
//         <p className="text-gray-600">
//           Take comprehensive assessments to discover your strengths and ideal career paths
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         {assessmentTypes.map((assessment) => (
//           <Card key={assessment.id} className="relative overflow-hidden">
//             <CardHeader>
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <assessment.icon className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <CardTitle className="flex items-center gap-2">
//                       {assessment.title}
//                       {assessment.completed && (
//                         <Badge variant="secondary" className="bg-green-100 text-green-800">
//                           Completed
//                         </Badge>
//                       )}
//                     </CardTitle>
//                     <CardDescription>
//                       {assessment.description}
//                     </CardDescription>
//                   </div>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="flex gap-4 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">
//                     <Clock className="w-4 h-4" />
//                     {assessment.duration}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Brain className="w-4 h-4" />
//                     {assessment.questions} questions
//                   </div>
//                   <Badge 
//                     variant="outline" 
//                     className={
//                       assessment.difficulty === 'Easy' ? 'border-green-300 text-green-700' :
//                       assessment.difficulty === 'Medium' ? 'border-yellow-300 text-yellow-700' :
//                       'border-red-300 text-red-700'
//                     }
//                   >
//                     {assessment.difficulty}
//                   </Badge>
//                 </div>
                
//                 <Button 
//                   className="w-full" 
//                   onClick={() => startAssessment(assessment.id)}
//                   variant={assessment.completed ? "outline" : "default"}
//                 >
//                   {assessment.completed ? 'Retake Assessment' : 'Start Assessment'}
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Assessment Tips */}
//       <Card className="mt-8">
//         <CardHeader>
//           <CardTitle>Assessment Tips</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
//                 <Clock className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold mb-2">Take Your Time</h3>
//               <p className="text-sm text-gray-600">
//                 Read each question carefully and think through your answers
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
//                 <Target className="w-6 h-6 text-green-600" />
//               </div>
//               <h3 className="font-semibold mb-2">Be Honest</h3>
//               <p className="text-sm text-gray-600">
//                 Answer truthfully to get the most accurate recommendations
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
//                 <Brain className="w-6 h-6 text-purple-600" />
//               </div>
//               <h3 className="font-semibold mb-2">Stay Focused</h3>
//               <p className="text-sm text-gray-600">
//                 Find a quiet environment and minimize distractions
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }