// import { useState } from "react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
// import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin } from "lucide-react";
// import { motion } from "motion/react";

// export function AuthPages({ currentView, onViewChange, onLogin }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     userType: "",
//     class: "",
//     district: "",
//     state: "Madhya Pradesh"
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate login
//     const userData = {
//       name: formData.name || formData.email.split('@')[0],
//       email: formData.email,
//       userType: formData.userType || "student",
//       district: formData.district,
//       class: formData.class
//     };
//     onLogin(userData);
//   };

//   const isLogin = currentView === "login";

//   return (
//     <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-md mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
//             <CardHeader className="text-center pb-8">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-white">N</span>
//               </div>
//               <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {isLogin ? "Welcome Back" : "Join NavDrishti"}
//               </CardTitle>
//               <p className="text-gray-600 mt-2">
//                 {isLogin 
//                   ? "Sign in to continue your career journey" 
//                   : "Start your personalized career guidance today"
//                 }
//               </p>
//             </CardHeader>

//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {!isLogin && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     transition={{ duration: 0.3 }}
//                     className="space-y-4"
//                   >
//                     <div>
//                       <Label htmlFor="name" className="flex items-center space-x-2">
//                         <User className="w-4 h-4" />
//                         <span>Full Name</span>
//                       </Label>
//                       <Input
//                         id="name"
//                         type="text"
//                         value={formData.name}
//                         onChange={(e) => handleInputChange("name", e.target.value)}
//                         placeholder="Enter your full name"
//                         className="mt-2"
//                         required={!isLogin}
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="phone" className="flex items-center space-x-2">
//                         <Phone className="w-4 h-4" />
//                         <span>Phone Number</span>
//                       </Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) => handleInputChange("phone", e.target.value)}
//                         placeholder="Enter your phone number"
//                         className="mt-2"
//                         required={!isLogin}
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="userType">I am a</Label>
//                       <Select onValueChange={(value) => handleInputChange("userType", value)} required={!isLogin}>
//                         <SelectTrigger className="mt-2">
//                           <SelectValue placeholder="Select your role" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="student">Student</SelectItem>
//                           <SelectItem value="parent">Parent</SelectItem>
//                           <SelectItem value="institute">Institute Representative</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     {formData.userType === "student" && (
//                       <div>
//                         <Label htmlFor="class">Current Class</Label>
//                         <Select onValueChange={(value) => handleInputChange("class", value)} required>
//                           <SelectTrigger className="mt-2">
//                             <SelectValue placeholder="Select your class" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="10th">Class 10th</SelectItem>
//                             <SelectItem value="11th">Class 11th</SelectItem>
//                             <SelectItem value="12th">Class 12th</SelectItem>
//                             <SelectItem value="undergraduate">Undergraduate</SelectItem>
//                             <SelectItem value="postgraduate">Postgraduate</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     )}

//                     <div>
//                       <Label htmlFor="district" className="flex items-center space-x-2">
//                         <MapPin className="w-4 h-4" />
//                         <span>District</span>
//                       </Label>
//                       <Select onValueChange={(value) => handleInputChange("district", value)} required={!isLogin}>
//                         <SelectTrigger className="mt-2">
//                           <SelectValue placeholder="Select your district" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="alirajpur">Alirajpur</SelectItem>
//                           <SelectItem value="barwani">Barwani</SelectItem>
//                           <SelectItem value="other">Other</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </motion.div>
//                 )}

//                 <div>
//                   <Label htmlFor="email" className="flex items-center space-x-2">
//                     <Mail className="w-4 h-4" />
//                     <span>Email</span>
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     placeholder="Enter your email"
//                     className="mt-2"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="password" className="flex items-center space-x-2">
//                     <Lock className="w-4 h-4" />
//                     <span>Password</span>
//                   </Label>
//                   <div className="relative mt-2">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={formData.password}
//                       onChange={(e) => handleInputChange("password", e.target.value)}
//                       placeholder="Enter your password"
//                       className="pr-10"
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                     >
//                       {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                     </button>
//                   </div>
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
//                 >
//                   {isLogin ? "Sign In" : "Create Account"}
//                 </Button>

//                 <div className="text-center pt-4">
//                   <p className="text-gray-600">
//                     {isLogin ? "Don't have an account?" : "Already have an account?"}
//                     <button
//                       type="button"
//                       onClick={() => onViewChange(isLogin ? "register" : "login")}
//                       className="ml-2 text-blue-600 hover:text-blue-700 font-semibold"
//                     >
//                       {isLogin ? "Sign up" : "Sign in"}
//                     </button>
//                   </p>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }