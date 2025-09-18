// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { 
//   Award, 
//   ExternalLink,
//   IndianRupee,
//   Users,
//   Clock,
//   Bell,
//   CheckCircle,
//   ArrowLeft
// } from "lucide-react";
// import { motion } from "motion/react";

// export function ScholarshipPage({ onViewChange }) {
//   return (
//     <div className="min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <Button
//             onClick={() => onViewChange("timeline")}
//             variant="ghost"
//             className="mb-4 hover:bg-blue-50"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Timeline
//           </Button>
//           <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Scholarship Details
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive information about scholarships available for students in Madhya Pradesh
//           </p>
//         </motion.div>

//         {/* Content continues with detailed scholarship information */}
//         <div className="text-center py-20">
//           <Award className="w-24 h-24 text-blue-600 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">
//             Detailed Scholarship Information
//           </h2>
//           <p className="text-gray-600 mb-8">
//             This page will contain comprehensive scholarship details, application processes, and guidelines.
//           </p>
//           <Button
//             onClick={() => onViewChange("timeline")}
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
//           >
//             View All Scholarships
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }