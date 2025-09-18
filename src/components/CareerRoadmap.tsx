// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { Progress } from "./ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import { InteractiveRoadmap } from "./InteractiveRoadmap";
// import { 
//   CheckCircle, 
//   Circle, 
//   Clock, 
//   BookOpen, 
//   Award, 
//   ExternalLink,
//   Target,
//   TrendingUp,
//   Users,
//   Code,
//   Calendar,
//   Star,
//   Map
// } from "lucide-react";

// export function CareerRoadmap({ onViewChange }) {
//   const [selectedCareer, setSelectedCareer] = useState("software-engineer");

//   const careerPaths = [
//     {
//       id: "software-engineer",
//       title: "Software Engineer",
//       description: "Full-stack development career path",
//       icon: Code,
//       duration: "2-4 years",
//       difficulty: "Medium",
//       averageSalary: "₹8-25 LPA"
//     },
//     {
//       id: "data-scientist",
//       title: "Data Scientist",
//       description: "Analytics and machine learning specialist",
//       icon: TrendingUp,
//       duration: "3-5 years",
//       difficulty: "Hard",
//       averageSalary: "₹10-30 LPA"
//     },
//     {
//       id: "product-manager",
//       title: "Product Manager",
//       description: "Lead product strategy and development",
//       icon: Target,
//       duration: "4-6 years",
//       difficulty: "Hard",
//       averageSalary: "₹15-40 LPA"
//     },
//     {
//       id: "ui-ux-designer",
//       title: "UI/UX Designer",
//       description: "Create beautiful and functional user experiences",
//       icon: Users,
//       duration: "2-3 years",
//       difficulty: "Medium",
//       averageSalary: "₹6-20 LPA"
//     }
//   ];

//   const roadmapData = {
//     "software-engineer": {
//       phases: [
//         {
//           title: "Foundation (0-6 months)",
//           description: "Build programming fundamentals",
//           progress: 100,
//           items: [
//             { title: "Learn Programming Basics", type: "course", duration: "4 weeks", completed: true, provider: "Codecademy" },
//             { title: "HTML/CSS Fundamentals", type: "course", duration: "3 weeks", completed: true, provider: "FreeCodeCamp" },
//             { title: "JavaScript Essentials", type: "course", duration: "6 weeks", completed: true, provider: "MDN" },
//             { title: "Git & Version Control", type: "course", duration: "2 weeks", completed: true, provider: "GitHub" },
//             { title: "Build First Website", type: "project", duration: "2 weeks", completed: true }
//           ]
//         },
//         {
//           title: "Intermediate (6-12 months)",
//           description: "Learn frameworks and backend development",
//           progress: 60,
//           items: [
//             { title: "React.js Fundamentals", type: "course", duration: "8 weeks", completed: true, provider: "React.dev" },
//             { title: "Node.js & Express", type: "course", duration: "6 weeks", completed: true, provider: "NodeJS.org" },
//             { title: "Database Design (SQL)", type: "course", duration: "4 weeks", completed: false, provider: "W3Schools" },
//             { title: "Build Full-Stack App", type: "project", duration: "4 weeks", completed: false },
//             { title: "API Development", type: "course", duration: "3 weeks", completed: false, provider: "Postman" }
//           ]
//         },
//         {
//           title: "Advanced (12-18 months)",
//           description: "Master advanced concepts and tools",
//           progress: 20,
//           items: [
//             { title: "Cloud Platforms (AWS/GCP)", type: "course", duration: "6 weeks", completed: false, provider: "AWS" },
//             { title: "DevOps Basics", type: "course", duration: "4 weeks", completed: false, provider: "Docker" },
//             { title: "System Design", type: "course", duration: "8 weeks", completed: false, provider: "Grokking" },
//             { title: "Open Source Contribution", type: "project", duration: "Ongoing", completed: false },
//             { title: "Technical Interview Prep", type: "course", duration: "6 weeks", completed: false, provider: "LeetCode" }
//           ]
//         },
//         {
//           title: "Professional (18+ months)",
//           description: "Land your first job and grow",
//           progress: 0,
//           items: [
//             { title: "Build Portfolio Website", type: "project", duration: "2 weeks", completed: false },
//             { title: "Apply to Internships", type: "application", duration: "4 weeks", completed: false },
//             { title: "Network with Professionals", type: "networking", duration: "Ongoing", completed: false },
//             { title: "Prepare for Interviews", type: "course", duration: "3 weeks", completed: false },
//             { title: "Join Tech Communities", type: "networking", duration: "Ongoing", completed: false }
//           ]
//         }
//       ]
//     }
//   };

//   const currentRoadmap = roadmapData[selectedCareer as keyof typeof roadmapData] || roadmapData["software-engineer"];
//   const overallProgress = Math.round(
//     currentRoadmap.phases.reduce((acc, phase) => acc + phase.progress, 0) / currentRoadmap.phases.length
//   );

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case 'course': return BookOpen;
//       case 'project': return Code;
//       case 'certification': return Award;
//       case 'application': return ExternalLink;
//       case 'networking': return Users;
//       default: return Circle;
//     }
//   };

//   const getTypeColor = (type: string) => {
//     switch (type) {
//       case 'course': return 'bg-blue-100 text-blue-800';
//       case 'project': return 'bg-green-100 text-green-800';
//       case 'certification': return 'bg-purple-100 text-purple-800';
//       case 'application': return 'bg-orange-100 text-orange-800';
//       case 'networking': return 'bg-pink-100 text-pink-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Career Roadmap Visualization
//         </h1>
//         <p className="text-gray-600">
//           Interactive step-by-step guides to achieve your career goals
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-4 gap-8">
//         {/* Career Selection */}
//         <div className="lg:col-span-1">
//           <Card>
//             <CardHeader>
//               <CardTitle>Choose Your Path</CardTitle>
//               <CardDescription>
//                 Select a career to view its roadmap
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               {careerPaths.map((career) => (
//                 <Button
//                   key={career.id}
//                   variant={selectedCareer === career.id ? "default" : "outline"}
//                   className="w-full justify-start h-auto p-4"
//                   onClick={() => setSelectedCareer(career.id)}
//                 >
//                   <div className="flex items-start gap-3">
//                     <career.icon className="w-5 h-5 mt-0.5" />
//                     <div className="text-left">
//                       <div className="font-medium">{career.title}</div>
//                       <div className="text-xs opacity-70">{career.description}</div>
//                     </div>
//                   </div>
//                 </Button>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Career Overview */}
//           <Card className="mt-6">
//             <CardHeader>
//               <CardTitle>Path Overview</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {(() => {
//                 const career = careerPaths.find(c => c.id === selectedCareer);
//                 return career ? (
//                   <>
//                     <div className="text-center">
//                       <div className="text-3xl font-bold text-blue-600 mb-1">{overallProgress}%</div>
//                       <p className="text-sm text-gray-600">Overall Progress</p>
//                       <Progress value={overallProgress} className="h-2 mt-2" />
//                     </div>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span>Duration:</span>
//                         <span className="font-medium">{career.duration}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Difficulty:</span>
//                         <Badge variant="outline" className={
//                           career.difficulty === 'Easy' ? 'border-green-300 text-green-700' :
//                           career.difficulty === 'Medium' ? 'border-yellow-300 text-yellow-700' :
//                           'border-red-300 text-red-700'
//                         }>
//                           {career.difficulty}
//                         </Badge>
//                       </div>
//                       <div className="flex justify-between">
//                         <span>Avg. Salary:</span>
//                         <span className="font-medium">{career.averageSalary}</span>
//                       </div>
//                     </div>
//                   </>
//                 ) : null;
//               })()}
//             </CardContent>
//           </Card>
//         </div>

//         {/* Roadmap Content */}
//         <div className="lg:col-span-3">
//           <Tabs defaultValue="interactive" className="w-full">
//             <TabsList className="grid w-full grid-cols-4">
//               <TabsTrigger value="interactive">
//                 <Map className="w-4 h-4 mr-2" />
//                 Interactive
//               </TabsTrigger>
//               <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
//               <TabsTrigger value="timeline">Timeline</TabsTrigger>
//               <TabsTrigger value="resources">Resources</TabsTrigger>
//             </TabsList>

//             <TabsContent value="interactive">
//               <InteractiveRoadmap selectedCareer={selectedCareer} />
//             </TabsContent>

//             <TabsContent value="roadmap" className="space-y-6">
//               {currentRoadmap.phases.map((phase, phaseIndex) => (
//                 <Card key={phaseIndex}>
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <CardTitle className="flex items-center gap-3">
//                           <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                             phase.progress === 100 ? 'bg-green-100' : 
//                             phase.progress > 0 ? 'bg-blue-100' : 'bg-gray-100'
//                           }`}>
//                             {phase.progress === 100 ? (
//                               <CheckCircle className="w-5 h-5 text-green-600" />
//                             ) : (
//                               <span className="text-sm font-bold">{phaseIndex + 1}</span>
//                             )}
//                           </div>
//                           {phase.title}
//                         </CardTitle>
//                         <CardDescription>{phase.description}</CardDescription>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold text-blue-600">{phase.progress}%</div>
//                         <Progress value={phase.progress} className="h-2 w-24" />
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-3">
//                       {phase.items.map((item, itemIndex) => {
//                         const TypeIcon = getTypeIcon(item.type);
//                         return (
//                           <div key={itemIndex} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                               item.completed ? 'bg-green-100' : 'bg-gray-100'
//                             }`}>
//                               {item.completed ? (
//                                 <CheckCircle className="w-5 h-5 text-green-600" />
//                               ) : (
//                                 <Circle className="w-5 h-5 text-gray-400" />
//                               )}
//                             </div>
//                             <div className="flex-1">
//                               <div className="flex items-center gap-2 mb-1">
//                                 <h4 className={`font-medium ${item.completed ? 'line-through text-gray-500' : ''}`}>
//                                   {item.title}
//                                 </h4>
//                                 <Badge variant="outline" className={getTypeColor(item.type)}>
//                                   {item.type}
//                                 </Badge>
//                               </div>
//                               <div className="flex items-center gap-4 text-sm text-gray-600">
//                                 <div className="flex items-center gap-1">
//                                   <Clock className="w-4 h-4" />
//                                   {item.duration}
//                                 </div>
//                                 {item.provider && (
//                                   <div className="flex items-center gap-1">
//                                     <Star className="w-4 h-4" />
//                                     {item.provider}
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                             <Button size="sm" variant="outline">
//                               {item.completed ? 'Review' : 'Start'}
//                             </Button>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </TabsContent>

//             <TabsContent value="timeline" className="space-y-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Timeline View</CardTitle>
//                   <CardDescription>See your progress over time</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {currentRoadmap.phases.map((phase, index) => (
//                       <div key={index} className="flex items-center gap-4">
//                         <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
//                         <div className="flex-1">
//                           <h4 className="font-medium">{phase.title}</h4>
//                           <p className="text-sm text-gray-600">
//                             {phase.items.length} items • {phase.progress}% complete
//                           </p>
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           Month {index * 6 + 1}-{(index + 1) * 6}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="resources" className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Recommended Courses</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-3">
//                     {[
//                       { title: "Complete Web Development Bootcamp", provider: "Udemy", rating: 4.8, price: "₹1,299" },
//                       { title: "React - The Complete Guide", provider: "Udemy", rating: 4.9, price: "₹999" },
//                       { title: "Node.js Developer Course", provider: "Coursera", rating: 4.7, price: "Free" }
//                     ].map((course, index) => (
//                       <div key={index} className="p-3 border rounded-lg">
//                         <h4 className="font-medium">{course.title}</h4>
//                         <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
//                           <span>{course.provider}</span>
//                           <div className="flex items-center gap-2">
//                             <span>⭐ {course.rating}</span>
//                             <span className="font-medium">{course.price}</span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Communities & Networking</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-3">
//                     {[
//                       { name: "Stack Overflow", type: "Q&A Community", members: "21M+" },
//                       { name: "GitHub", type: "Code Repository", members: "100M+" },
//                       { name: "LinkedIn Tech Groups", type: "Professional Network", members: "5M+" },
//                       { name: "Reddit r/programming", type: "Discussion Forum", members: "4M+" }
//                     ].map((community, index) => (
//                       <div key={index} className="p-3 border rounded-lg">
//                         <h4 className="font-medium">{community.name}</h4>
//                         <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
//                           <span>{community.type}</span>
//                           <span>{community.members}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// }