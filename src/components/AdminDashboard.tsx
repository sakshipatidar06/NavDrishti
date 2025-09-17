import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnalyticsCharts } from "./AnalyticsCharts";
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Filter,
  Search,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  AlertCircle
} from "lucide-react";

export function AdminDashboard({ user, onViewChange }) {
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock data for admin dashboard
  const stats = {
    totalStudents: 12847,
    activeAssessments: 3421,
    completedRoadmaps: 8976,
    avgSuccessRate: 87
  };

  const recentStudents = [
    { id: 1, name: "Rahul Sharma", email: "rahul@email.com", lastActive: "2 hours ago", status: "Active", assessments: 3 },
    { id: 2, name: "Priya Patel", email: "priya@email.com", lastActive: "1 day ago", status: "Completed", assessments: 5 },
    { id: 3, name: "Arjun Kumar", email: "arjun@email.com", lastActive: "3 hours ago", status: "In Progress", assessments: 2 },
    { id: 4, name: "Sneha Reddy", email: "sneha@email.com", lastActive: "5 hours ago", status: "Active", assessments: 4 },
    { id: 5, name: "Vikram Singh", email: "vikram@email.com", lastActive: "1 week ago", status: "Inactive", assessments: 1 }
  ];

  const courses = [
    { id: 1, title: "Full Stack Web Development", category: "Technology", students: 1234, rating: 4.8, status: "Active" },
    { id: 2, title: "Data Science Fundamentals", category: "Analytics", students: 987, rating: 4.9, status: "Active" },
    { id: 3, title: "Digital Marketing Mastery", category: "Marketing", students: 567, rating: 4.6, status: "Draft" },
    { id: 4, title: "Mobile App Development", category: "Technology", students: 789, rating: 4.7, status: "Active" },
    { id: 5, title: "UI/UX Design Principles", category: "Design", students: 432, rating: 4.8, status: "Active" }
  ];

  const jobPostings = [
    { id: 1, title: "Software Engineer", company: "TCS", location: "Bangalore", salary: "₹8-12 LPA", applicants: 156 },
    { id: 2, title: "Data Analyst", company: "Infosys", location: "Hyderabad", salary: "₹6-10 LPA", applicants: 89 },
    { id: 3, title: "Product Manager", company: "Flipkart", location: "Bangalore", salary: "₹15-25 LPA", applicants: 234 },
    { id: 4, title: "UI/UX Designer", company: "Zomato", location: "Gurgaon", salary: "₹8-15 LPA", applicants: 67 },
    { id: 5, title: "DevOps Engineer", company: "Amazon", location: "Chennai", salary: "₹12-20 LPA", applicants: 123 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-purple-100 text-purple-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage students, courses, and monitor platform analytics
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalStudents.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Assessments</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeAssessments.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Roadmaps</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.completedRoadmaps.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.avgSuccessRate}%</div>
                <p className="text-xs text-muted-foreground">
                  +3% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Student Activity</CardTitle>
                <CardDescription>Latest student registrations and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.slice(0, 5).map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {student.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.lastActive}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Key metrics and trends</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">76%</div>
                    <p className="text-sm text-blue-800">Assessment Completion</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">89%</div>
                    <p className="text-sm text-green-800">Student Satisfaction</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">142</div>
                    <p className="text-sm text-purple-800">New Registrations</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">34</div>
                    <p className="text-sm text-orange-800">Active Mentors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Student Management</h2>
              <p className="text-gray-600">Monitor and manage student accounts</p>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Student Records</CardTitle>
                  <CardDescription>View and manage all registered students</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search students..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Assessments</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">
                              {student.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.lastActive}</TableCell>
                      <TableCell>{student.assessments}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(student.status)}>
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Course Management</h2>
              <p className="text-gray-600">Add, edit, and manage course content</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Course
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Course Library</CardTitle>
              <CardDescription>Manage all available courses and content</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell>{course.category}</TableCell>
                      <TableCell>{course.students}</TableCell>
                      <TableCell>⭐ {course.rating}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(course.status)}>
                          {course.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Job Postings</h2>
              <p className="text-gray-600">Manage job opportunities and internships</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Job Posting
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Job Postings</CardTitle>
              <CardDescription>Current opportunities available to students</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Applicants</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobPostings.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.company}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>{job.salary}</TableCell>
                      <TableCell>{job.applicants}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
            <p className="text-gray-600">Advanced analytics with interactive charts and insights</p>
          </div>
          <AnalyticsCharts userRole="admin" />
        </TabsContent>
      </Tabs>
    </div>
  );
}