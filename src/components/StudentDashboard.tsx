import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GamificationDashboard } from "./GamificationDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Brain, 
  Target, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Calendar,
  Clock,
  Users,
  ExternalLink,
  PlayCircle,
  ChevronRight,
  Trophy,
  Star
} from "lucide-react";

export function StudentDashboard({ user, onViewChange }) {
  const careerRecommendations = [
    {
      title: "Software Engineer",
      match: 92,
      description: "Build applications and systems using programming languages",
      averageSalary: "₹8-25 LPA",
      demand: "High",
      skills: ["JavaScript", "React", "Python", "SQL"]
    },
    {
      title: "Data Scientist",
      match: 87,
      description: "Analyze complex data to help organizations make decisions",
      averageSalary: "₹10-30 LPA",
      demand: "Very High",
      skills: ["Python", "Machine Learning", "Statistics", "SQL"]
    },
    {
      title: "UI/UX Designer",
      match: 78,
      description: "Design user interfaces and experiences for digital products",
      averageSalary: "₹6-20 LPA",
      demand: "High",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"]
    }
  ];

  const recentActivities = [
    { action: "Completed Aptitude Test", time: "2 hours ago", icon: Brain },
    { action: "Updated Profile", time: "1 day ago", icon: Users },
    { action: "Viewed Software Engineer Roadmap", time: "3 days ago", icon: Target },
    { action: "Started Python Course", time: "1 week ago", icon: BookOpen }
  ];

  const upcomingTasks = [
    { task: "Complete Personality Assessment", deadline: "Today", priority: "high" },
    { task: "Apply for Google Summer of Code", deadline: "3 days", priority: "medium" },
    { task: "Finish React Course Module 3", deadline: "1 week", priority: "low" },
    { task: "Update Portfolio Website", deadline: "2 weeks", priority: "medium" }
  ];

  const achievements = [
    { title: "Profile Completed", icon: Users, earned: true },
    { title: "First Assessment", icon: Brain, earned: true },
    { title: "Career Explorer", icon: Target, earned: true },
    { title: "Skill Builder", icon: BookOpen, earned: false },
    { title: "Goal Setter", icon: Award, earned: false }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.name}! 👋
        </h1>
        <p className="text-gray-600">
          Here's your personalized career guidance dashboard
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gamification">
            <Trophy className="w-4 h-4 mr-2" />
            Progress
          </TabsTrigger>
          <TabsTrigger value="recommendations">AI Insights</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Career Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                AI Career Recommendations
              </CardTitle>
              <CardDescription>
                Based on your profile, skills, and assessment results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {careerRecommendations.map((career, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{career.title}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {career.match}% Match
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{career.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500 mb-3">
                        <span>💰 {career.averageSalary}</span>
                        <span>📈 {career.demand} Demand</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <Progress value={career.match} className="h-2" />
                </div>
              ))}
              <Button 
                className="w-full mt-4" 
                variant="outline"
                onClick={() => onViewChange('roadmap')}
              >
                View Detailed Roadmaps
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Continue your career journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2"
                  onClick={() => onViewChange('assessment')}
                >
                  <Brain className="w-6 h-6" />
                  <span className="text-xs">Take Assessment</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2"
                  onClick={() => onViewChange('roadmap')}
                >
                  <Target className="w-6 h-6" />
                  <span className="text-xs">View Roadmap</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2"
                  onClick={() => onViewChange('chatbot')}
                >
                  <Brain className="w-6 h-6" />
                  <span className="text-xs">AI Assistant</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <BookOpen className="w-6 h-6" />
                  <span className="text-xs">Browse Courses</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <activity.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Profile Completion</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Assessments Completed</span>
                  <span>3/5</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Skills Verified</span>
                  <span>7/12</span>
                </div>
                <Progress value={58} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded">
                    <div className={`w-2 h-2 rounded-full ${
                      task.priority === 'high' ? 'bg-red-500' : 
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{task.task}</p>
                      <p className="text-xs text-gray-500">{task.deadline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg text-center ${
                      achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                    }`}
                  >
                    <achievement.icon className={`w-6 h-6 mx-auto mb-1 ${
                      achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                    }`} />
                    <p className="text-xs font-medium">{achievement.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Featured Content */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NzMyNzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Featured course"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h4 className="font-medium text-sm mb-1">Web Development Bootcamp</h4>
                  <p className="text-xs text-gray-600 mb-2">Learn full-stack development from scratch</p>
                  <Button size="sm" variant="outline" className="w-full">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Start Learning
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
        </TabsContent>

        <TabsContent value="gamification">
          <GamificationDashboard user={user} />
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          {/* Enhanced AI Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                Enhanced AI Career Recommendations
              </CardTitle>
              <CardDescription>
                Advanced machine learning analysis of your profile and market trends
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {careerRecommendations.map((career, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{career.title}</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {career.match}% Match
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{career.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500 mb-3">
                        <span>💰 {career.averageSalary}</span>
                        <span>📈 {career.demand} Demand</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <Progress value={career.match} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <activity.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Tasks & Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded">
                    <div className={`w-2 h-2 rounded-full ${
                      task.priority === 'high' ? 'bg-red-500' : 
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{task.task}</p>
                      <p className="text-xs text-gray-500">{task.deadline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}