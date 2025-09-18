// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { Input } from "./ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
// import { 
//   Building2, 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Globe, 
//   GraduationCap,
//   Search,
//   Filter,
//   ExternalLink,
//   Users,
//   Award,
//   BookOpen
// } from "lucide-react";
// import { motion } from "motion/react";

// export function InstitutePage({ onViewChange }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("all");
//   const [selectedType, setSelectedType] = useState("all");

//   const collegeData = {
//     alirajpur: [
//       {
//         name: "Government PG College, Alirajpur",
//         type: "Government",
//         address: "Dahod Road, front of Collector Office, Alirajpur, MP 457887",
//         phone: "7394233852",
//         admissionQuery: "9425479287",
//         email: "ltrbhinde3@gmail.com",
//         website: "http://www.mpcolleges.nic.in/pgcalirajpur/home.html",
//         courses: {
//           ug: ["B.A.", "B.Sc.", "B.Com."],
//           pg: ["M.A.", "M.Com.", "M.Sc.", "MSW"],
//           specializations: "Multiple specializations available"
//         },
//         category: "General Education",
//         established: "1985",
//         affiliation: "Barkatullah University"
//       },
//       {
//         name: "Government Polytechnic College, Alirajpur",
//         type: "Government Technical",
//         address: "In front of RTO office, Dahod Road, Alirajpur, MP 457887",
//         phone: "9617240963",
//         email: "prinpoly.alp@mp.gov.in",
//         website: "mis.mptechedu.org",
//         courses: {
//           diploma: ["Civil Engineering", "Electronics & Telecommunication Engineering"],
//           duration: "3 years",
//           eligibility: "10th Pass"
//         },
//         category: "Technical Education",
//         established: "1995",
//         affiliation: "MP Technical Education Board"
//       },
//       {
//         name: "Government College, Bhabhra",
//         type: "Government",
//         address: "Bus Stand, Town Hall, Bhabra, Alirajpur, PIN 457882",
//         phone: "7393271250",
//         admissionQuery: "9755646946",
//         email: "egcbhaali-mp@mp.gov.in",
//         courses: {
//           ug: ["B.A.", "B.Sc.", "B.Com."],
//           note: "Standard undergraduate programs"
//         },
//         category: "General Education",
//         established: "1990",
//         affiliation: "Barkatullah University"
//       }
//     ],
//     barwani: [
//       {
//         name: "SBN Government PG College, Barwani",
//         type: "Government",
//         address: "Barwani, PIN 451551",
//         phone: "07290-222035",
//         email: "hegpgcbad@mp.gov.in",
//         website: "http://www.mphighereducation.nic.in/pgcollegebarwani",
//         courses: {
//           ug: ["B.A.", "B.Sc.", "B.Com."],
//           pg: ["M.A.", "M.Sc.", "M.Com."],
//           specializations: "Arts, Science, Commerce"
//         },
//         category: "General Education",
//         established: "1980",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt Girls College, Barwani",
//         type: "Government (Women)",
//         address: "Barwani, PIN 451551",
//         phone: "07290-222511",
//         email: "heggcbad@mp.gov.in",
//         website: "http://www.mphighereducation.nic.in/gdcbarwani",
//         courses: {
//           ug: ["B.A.", "B.Sc.", "B.Com."],
//           note: "Women-only institution"
//         },
//         category: "General Education",
//         established: "1975",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt College Anjad",
//         type: "Government",
//         address: "Anjad, PIN 451556",
//         phone: "07284-251102",
//         email: "hegcanjbad@mp.gov.in",
//         website: "http://www.mphighereducation.nic.in/gdcanjad",
//         courses: {
//           ug: ["B.A.", "B.Com.", "B.Sc."],
//           note: "Rural college serving local community"
//         },
//         category: "General Education",
//         established: "1988",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt College Pansemal",
//         type: "Government",
//         address: "Pansemal, PIN 451770",
//         phone: "07286-241208",
//         email: "hegcpanbad@mp.gov.in",
//         website: "http://www.mphighereducation.nic.in/2414",
//         courses: {
//           ug: ["B.A.", "B.Com.", "B.Sc."],
//           note: "Undergraduate programs available"
//         },
//         category: "General Education",
//         established: "1992",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt PG College Sendhwa",
//         type: "Government",
//         address: "Sendhwa, A. B. Road, PIN 451666",
//         phone: "07281-222109",
//         email: "hegcsenbad@mp.gov.in",
//         website: "http://www.mphighereducation.nic.in/pgcsendhwa",
//         courses: {
//           ug: ["B.A.", "B.Sc.", "B.Com."],
//           pg: ["M.A.", "M.Sc.", "M.Com."],
//           specializations: "Arts, Science, Commerce"
//         },
//         category: "General Education",
//         established: "1985",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt College Pati",
//         type: "Government",
//         address: "Model School Bhavan, Bokrata Road, Pati, Barwani PIN 451661",
//         phone: "07290-222035",
//         email: "drmunnamore@gmail.com",
//         website: "http://www.mphighereducation.nic.in/ins2796",
//         courses: {
//           ug: ["B.A.", "B.Com.", "B.Sc."],
//           note: "Local community college"
//         },
//         category: "General Education",
//         established: "1995",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt College Rajpur",
//         type: "Government",
//         address: "Rajpur, PIN 451447",
//         phone: "07284-256311",
//         email: "hegcrajbad@mp.gov.in",
//         website: "http://www.mphighereducation.nic.in/gdcrajpur",
//         courses: {
//           ug: ["B.A.", "B.Com.", "B.Sc."],
//           note: "Arts, Commerce, Science programs"
//         },
//         category: "General Education",
//         established: "1990",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt College Niwali",
//         type: "Government",
//         address: "Niwali, Barwani, PIN 451770",
//         phone: "07286-273220",
//         email: "hegcniwbad@mp.gov.in",
//         website: "http://www.mphighereducation.nic.in/gdcniwali",
//         courses: {
//           ug: ["B.A.", "B.Com.", "B.Sc."],
//           note: "Undergraduate programs"
//         },
//         category: "General Education",
//         established: "1998",
//         affiliation: "Devi Ahilya Vishwavidyalaya"
//       },
//       {
//         name: "Govt Polytechnic College Barwani",
//         type: "Government Technical",
//         address: "Near Village Kari, Barwani, PIN 451551",
//         phone: "9407133526",
//         email: "prinpoly.bdw@mp.gov.in",
//         courses: {
//           diploma: ["Engineering/Technology courses"],
//           note: "Technical diploma programs",
//           eligibility: "10th Pass"
//         },
//         category: "Technical Education",
//         established: "1992",
//         affiliation: "MP Technical Education Board"
//       }
//     ]
//   };

//   const recommendedColleges = [
//     {
//       name: "IIT Indore",
//       type: "Central Government",
//       location: "Indore, MP",
//       courses: ["B.Tech", "M.Tech", "PhD"],
//       category: "Engineering",
//       ranking: "Top 25 in India",
//       distance: "~180 km from Barwani"
//     },
//     {
//       name: "MANIT Bhopal",
//       type: "Government",
//       location: "Bhopal, MP",
//       courses: ["B.Tech", "M.Tech", "MBA"],
//       category: "Engineering & Management",
//       ranking: "Top 50 in India",
//       distance: "~250 km from Barwani"
//     },
//     {
//       name: "Devi Ahilya Vishwavidyalaya",
//       type: "State University",
//       location: "Indore, MP",
//       courses: ["All UG/PG programs"],
//       category: "General University",
//       ranking: "Grade A by NAAC",
//       distance: "~150 km from Barwani"
//     },
//     {
//       name: "AIIMS Bhopal",
//       type: "Central Government",
//       location: "Bhopal, MP",
//       courses: ["MBBS", "MD", "MS"],
//       category: "Medical",
//       ranking: "Top Medical College",
//       distance: "~280 km from Barwani"
//     }
//   ];

//   const allColleges = [...collegeData.alirajpur, ...collegeData.barwani];

//   const filteredColleges = allColleges.filter(college => {
//     const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          college.address.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesDistrict = selectedDistrict === "all" || 
//                            (selectedDistrict === "alirajpur" && collegeData.alirajpur.includes(college)) ||
//                            (selectedDistrict === "barwani" && collegeData.barwani.includes(college));
//     const matchesType = selectedType === "all" || college.type.toLowerCase().includes(selectedType.toLowerCase());
    
//     return matchesSearch && matchesDistrict && matchesType;
//   });

//   const handleContactCollege = (college) => {
//     if (college.website) {
//       window.open(college.website, '_blank');
//     }
//   };

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
//           <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Institute Finder
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover government colleges and educational institutes in Alirajpur and Barwani districts, plus recommended institutions across Madhya Pradesh.
//           </p>
//         </motion.div>

//         {/* Search and Filters */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-8"
//         >
//           <Card className="bg-white shadow-lg border-0">
//             <CardContent className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                   <Input
//                     placeholder="Search colleges..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10"
//                   />
//                 </div>
//                 <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select District" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Districts</SelectItem>
//                     <SelectItem value="alirajpur">Alirajpur</SelectItem>
//                     <SelectItem value="barwani">Barwani</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Select value={selectedType} onValueChange={setSelectedType}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="College Type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Types</SelectItem>
//                     <SelectItem value="government">Government</SelectItem>
//                     <SelectItem value="technical">Technical</SelectItem>
//                     <SelectItem value="women">Women's College</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
//                   <Filter className="w-4 h-4 mr-2" />
//                   Apply Filters
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.section>

//         <Tabs defaultValue="government" className="w-full">
//           <TabsList className="grid w-full grid-cols-2 mb-8">
//             <TabsTrigger value="government" className="flex items-center space-x-2">
//               <Building2 className="w-4 h-4" />
//               <span>Government Colleges</span>
//             </TabsTrigger>
//             <TabsTrigger value="recommended" className="flex items-center space-x-2">
//               <Award className="w-4 h-4" />
//               <span>Recommended Colleges</span>
//             </TabsTrigger>
//           </TabsList>

//           {/* Government Colleges Tab */}
//           <TabsContent value="government">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="space-y-6"
//             >
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                   Government Colleges in Alirajpur & Barwani
//                 </h2>
//                 <p className="text-gray-600">
//                   Found {filteredColleges.length} colleges matching your criteria
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {filteredColleges.map((college, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                   >
//                     <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
//                       <CardHeader>
//                         <div className="flex items-start justify-between">
//                           <div className="flex-1">
//                             <CardTitle className="text-lg text-gray-900 mb-2">{college.name}</CardTitle>
//                             <div className="flex flex-wrap gap-2">
//                               <Badge variant="secondary">{college.type}</Badge>
//                               <Badge variant="outline">{college.category}</Badge>
//                               {college.established && (
//                                 <Badge variant="outline">Est. {college.established}</Badge>
//                               )}
//                             </div>
//                           </div>
//                           <Building2 className="w-8 h-8 text-blue-600" />
//                         </div>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="space-y-3">
//                           <div className="flex items-start space-x-3">
//                             <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
//                             <span className="text-sm text-gray-600">{college.address}</span>
//                           </div>
                          
//                           {college.phone && (
//                             <div className="flex items-center space-x-3">
//                               <Phone className="w-4 h-4 text-gray-500" />
//                               <span className="text-sm text-gray-600">{college.phone}</span>
//                             </div>
//                           )}
                          
//                           {college.email && (
//                             <div className="flex items-center space-x-3">
//                               <Mail className="w-4 h-4 text-gray-500" />
//                               <span className="text-sm text-gray-600">{college.email}</span>
//                             </div>
//                           )}
                          
//                           {college.website && (
//                             <div className="flex items-center space-x-3">
//                               <Globe className="w-4 h-4 text-gray-500" />
//                               <span className="text-sm text-blue-600 hover:underline cursor-pointer" 
//                                     onClick={() => handleContactCollege(college)}>
//                                 Visit Website
//                               </span>
//                             </div>
//                           )}
//                         </div>

//                         <div className="border-t pt-4">
//                           <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                             <GraduationCap className="w-4 h-4 mr-2" />
//                             Courses Offered
//                           </h4>
//                           <div className="space-y-2">
//                             {college.courses.ug && (
//                               <div>
//                                 <span className="text-sm font-medium text-gray-700">UG: </span>
//                                 <span className="text-sm text-gray-600">{college.courses.ug.join(", ")}</span>
//                               </div>
//                             )}
//                             {college.courses.pg && (
//                               <div>
//                                 <span className="text-sm font-medium text-gray-700">PG: </span>
//                                 <span className="text-sm text-gray-600">{college.courses.pg.join(", ")}</span>
//                               </div>
//                             )}
//                             {college.courses.diploma && (
//                               <div>
//                                 <span className="text-sm font-medium text-gray-700">Diploma: </span>
//                                 <span className="text-sm text-gray-600">{college.courses.diploma.join(", ")}</span>
//                               </div>
//                             )}
//                             {college.courses.note && (
//                               <p className="text-sm text-gray-500 italic">{college.courses.note}</p>
//                             )}
//                           </div>
//                         </div>


//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </TabsContent>

//           {/* Recommended Colleges Tab */}
//           <TabsContent value="recommended">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="space-y-6"
//             >
//               <div className="text-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                   Recommended Colleges in Madhya Pradesh
//                 </h2>
//                 <p className="text-gray-600">
//                   Top-rated institutions for higher education
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {recommendedColleges.map((college, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                   >
//                     <Card className="h-full bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
//                       <CardHeader>
//                         <div className="flex items-start justify-between">
//                           <div className="flex-1">
//                             <CardTitle className="text-lg text-gray-900 mb-2">{college.name}</CardTitle>
//                             <div className="flex flex-wrap gap-2">
//                               <Badge variant="secondary">{college.type}</Badge>
//                               <Badge variant="outline">{college.category}</Badge>
//                               <Badge className="bg-green-100 text-green-800">{college.ranking}</Badge>
//                             </div>
//                           </div>
//                           <Award className="w-8 h-8 text-green-600" />
//                         </div>
//                       </CardHeader>
//                       <CardContent className="space-y-4">
//                         <div className="space-y-3">
//                           <div className="flex items-center space-x-3">
//                             <MapPin className="w-4 h-4 text-gray-500" />
//                             <span className="text-sm text-gray-600">{college.location}</span>
//                           </div>
                          
//                           <div className="flex items-center space-x-3">
//                             <Users className="w-4 h-4 text-gray-500" />
//                             <span className="text-sm text-gray-600">{college.distance}</span>
//                           </div>
//                         </div>

//                         <div className="border-t pt-4">
//                           <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                             <BookOpen className="w-4 h-4 mr-2" />
//                             Programs Available
//                           </h4>
//                           <div className="flex flex-wrap gap-2">
//                             {college.courses.map((course, courseIndex) => (
//                               <Badge key={courseIndex} variant="outline" className="text-xs">
//                                 {course}
//                               </Badge>
//                             ))}
//                           </div>
//                         </div>

//                         <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           Learn More
//                         </Button>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </TabsContent>
//         </Tabs>

//         {/* CTA Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-16 text-center"
//         >
//           <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-xl">
//             <CardContent className="p-8 text-white">
//               <Building2 className="w-12 h-12 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
//               <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
//                 Our career guidance counselors can help you select the best college based on your career goals and academic performance.
//               </p>
//               <Button
//                 onClick={() => onViewChange("parents")}
//                 className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//               >
//                 Get Expert Guidance
//                 <Users className="ml-2 w-5 h-5" />
//               </Button>
//             </CardContent>
//           </Card>
//         </motion.section>
//       </div>
//     </div>
//   );
// }