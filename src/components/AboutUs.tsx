// import { Card, CardContent } from "./ui/card";
// import { ImageWithFallback } from "./image/ImageWithFallback";
// import { 
//   Brain, 
//   Target, 
//   Users, 
//   Award,
//   CheckCircle,
//   Lightbulb,
//   TrendingUp,
//   BookOpen
// } from "lucide-react";
// import { motion } from "motion/react";

// export function AboutUs({ onViewChange }) {
//   const features = [
//     {
//       icon: Brain,
//       title: "AI-Powered Assessment",
//       description: "Advanced machine learning algorithms analyze student profiles to provide personalized career recommendations."
//     },
//     {
//       icon: Target,
//       title: "Comprehensive Testing",
//       description: "Multi-dimensional assessments covering aptitude, interests, personality, and skills for accurate career matching."
//     },
//     {
//       icon: BookOpen,
//       title: "Educational Roadmaps",
//       description: "Detailed pathways from 10th grade onwards, including stream selection, entrance exams, and career progression."
//     },
//     {
//       icon: Users,
//       title: "Expert Guidance",
//       description: "Access to career counselors, industry mentors, and educational experts for personalized support."
//     }
//   ];

//   const howItWorks = [
//     {
//       step: "01",
//       title: "Register & Profile Setup",
//       description: "Create your account and build a comprehensive profile with your academic background, interests, and goals."
//     },
//     {
//       step: "02",
//       title: "Take Assessments",
//       description: "Complete our scientifically designed tests covering aptitude, personality, interests, and skills."
//     },
//     {
//       step: "03",
//       title: "Get Recommendations",
//       description: "Receive personalized career suggestions with detailed pathways, colleges, and exam information."
//     },
//     {
//       step: "04",
//       title: "Plan Your Journey",
//       description: "Use our interactive roadmaps to plan your educational journey and track your progress."
//     }
//   ];



//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//             About NavDrishti
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Empowering students across India with AI-driven career guidance, comprehensive assessments, and personalized educational pathways to unlock their true potential.
//           </p>
//         </motion.section>

//         {/* Mission Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                 Our Mission
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 NavDrishti is a comprehensive career guidance platform designed specifically for Indian students. 
//                 We leverage artificial intelligence and machine learning to provide personalized career recommendations, 
//                 helping students make informed decisions about their educational journey.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Our platform bridges the gap between academic potential and career success by offering scientific 
//                 assessments, detailed roadmaps, and expert guidance tailored to the Indian education system.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-gray-700">Scientific Assessment Tools</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-gray-700">AI-Powered Recommendations</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                   <span className="text-gray-700">Expert Counselor Support</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-6"></div>
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1756885375569-f04400d99cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2FyZWVyJTIwZ3VpZGFuY2V8ZW58MXx8fHwxNzU4MDU0NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                 alt="Students studying"
//                 className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
//               />
//             </div>
//           </div>
//         </motion.section>

//         {/* Features Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               What Makes Us Special
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our platform combines cutting-edge technology with educational expertise to deliver unparalleled career guidance
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
//                   <CardContent className="p-8">
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <feature.icon className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
//                         <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* How It Works Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               How NavDrishti Works
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A simple 4-step process to discover your ideal career path
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {howItWorks.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <Card className="h-full text-center p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
//                   <CardContent className="space-y-4">
//                     <div className="relative">
//                       <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <span className="text-2xl font-bold text-white">{step.step}</span>
//                       </div>
//                       {index < howItWorks.length - 1 && (
//                         <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
//                       )}
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>



//         {/* Vision Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="relative order-2 lg:order-1">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl transform -rotate-6"></div>
//               <ImageWithFallback
//                 src="https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc1ODAzMjkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                 alt="Teamwork and collaboration"
//                 className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
//               />
//             </div>
//             <div className="space-y-6 order-1 lg:order-2">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                 Our Vision for India's Future
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We envision an India where every student has access to world-class career guidance, 
//                 enabling them to make informed decisions about their future and contribute meaningfully 
//                 to society and the economy.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Democratizing Career Guidance</h4>
//                     <p className="text-gray-600">Making professional career counseling accessible to students from all backgrounds</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Innovation in Education</h4>
//                     <p className="text-gray-600">Leveraging technology to create personalized learning and career pathways</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Excellence & Impact</h4>
//                     <p className="text-gray-600">Committed to measurable outcomes and positive impact on student success</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// }