import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Target,
  Award,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

interface AnalyticsChartsProps {
  userRole?: string;
}

export function AnalyticsCharts({ userRole = 'admin' }: AnalyticsChartsProps) {
  // Mock data for charts
  const careerTrendsData = [
    { career: 'Software Engineer', students: 3420, growth: 15.2 },
    { career: 'Data Scientist', students: 2890, growth: 22.8 },
    { career: 'Product Manager', students: 1950, growth: 8.5 },
    { career: 'UI/UX Designer', students: 1670, growth: 18.3 },
    { career: 'DevOps Engineer', students: 1230, growth: 25.1 },
    { career: 'Cybersecurity', students: 980, growth: 31.4 },
    { career: 'AI/ML Engineer', students: 890, growth: 45.6 },
    { career: 'Cloud Architect', students: 760, growth: 28.9 }
  ];

  const assessmentPerformanceData = [
    { name: 'Aptitude', avgScore: 78, completionRate: 89, totalTaken: 5420 },
    { name: 'Personality', avgScore: 85, completionRate: 94, totalTaken: 6100 },
    { name: 'Technical', avgScore: 72, completionRate: 76, totalTaken: 4680 },
    { name: 'Career Interest', avgScore: 88, completionRate: 91, totalTaken: 5890 }
  ];

  const skillDemandData = [
    { skill: 'JavaScript', demand: 95, jobs: 8900, growth: 12 },
    { skill: 'Python', demand: 92, jobs: 7800, growth: 18 },
    { skill: 'React', demand: 88, jobs: 6200, growth: 15 },
    { skill: 'Cloud Computing', demand: 85, jobs: 5400, growth: 28 },
    { skill: 'Machine Learning', demand: 82, jobs: 4900, growth: 35 },
    { skill: 'DevOps', demand: 78, jobs: 4200, growth: 22 },
    { skill: 'Cybersecurity', demand: 75, jobs: 3800, growth: 31 },
    { skill: 'UI/UX Design', demand: 72, jobs: 3400, growth: 14 }
  ];

  const monthlyGrowthData = [
    { month: 'Jan', newStudents: 1250, assessments: 2890, completions: 1680 },
    { month: 'Feb', newStudents: 1420, assessments: 3240, completions: 1890 },
    { month: 'Mar', newStudents: 1680, assessments: 3780, completions: 2240 },
    { month: 'Apr', newStudents: 1890, assessments: 4120, completions: 2680 },
    { month: 'May', newStudents: 2140, assessments: 4560, completions: 2980 },
    { month: 'Jun', newStudents: 2380, assessments: 5020, completions: 3420 }
  ];

  const geographicData = [
    { state: 'Maharashtra', students: 2847, percentage: 22.1, color: '#0088FE' },
    { state: 'Karnataka', students: 2156, percentage: 16.8, color: '#00C49F' },
    { state: 'Tamil Nadu', students: 1923, percentage: 14.9, color: '#FFBB28' },
    { state: 'Delhi', students: 1654, percentage: 12.8, color: '#FF8042' },
    { state: 'Telangana', students: 1234, percentage: 9.6, color: '#8884d8' },
    { state: 'Gujarat', students: 987, percentage: 7.7, color: '#82ca9d' },
    { state: 'Others', students: 2089, percentage: 16.3, color: '#ffc658' }
  ];

  const successMetrics = [
    { 
      title: 'Job Placement Rate', 
      value: '87%', 
      change: '+5.2%', 
      trend: 'up',
      description: 'Students who got jobs within 6 months'
    },
    { 
      title: 'Average Salary Increase', 
      value: '₹4.2L', 
      change: '+12%', 
      trend: 'up',
      description: 'Salary improvement after course completion'
    },
    { 
      title: 'Course Completion Rate', 
      value: '78%', 
      change: '-2.1%', 
      trend: 'down',
      description: 'Students completing their chosen roadmap'
    },
    { 
      title: 'Student Satisfaction', 
      value: '4.6/5', 
      change: '0%', 
      trend: 'neutral',
      description: 'Average rating from student feedback'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp className="w-4 h-4 text-green-600" />;
      case 'down': return <ArrowDown className="w-4 h-4 text-red-600" />;
      default: return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Success Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {successMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {getTrendIcon(metric.trend)}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center gap-1 text-xs">
                <span className={getTrendColor(metric.trend)}>{metric.change}</span>
                <span className="text-muted-foreground">from last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Career Trends Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Most Popular Career Paths
                </CardTitle>
                <CardDescription>Student interest by career field</CardDescription>
              </div>
              <Select defaultValue="all-time">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={careerTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="career" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [value, 'Students']}
                  labelFormatter={(label) => `Career: ${label}`}
                />
                <Bar dataKey="students" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              Geographic Distribution
            </CardTitle>
            <CardDescription>Student registrations by state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={geographicData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="students"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                    labelLine={false}
                  >
                    {geographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [value, 'Students']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {geographicData.slice(0, 6).map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-600">{item.state}: {item.students}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Assessment Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              Assessment Performance
            </CardTitle>
            <CardDescription>Average scores and completion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assessmentPerformanceData.map((assessment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{assessment.name}</span>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{assessment.avgScore}% avg</Badge>
                      <Badge variant="outline">{assessment.completionRate}% complete</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>Average Score: {assessment.avgScore}%</div>
                    <div>Total Taken: {assessment.totalTaken}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Demand Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-600" />
              In-Demand Skills
            </CardTitle>
            <CardDescription>Market demand and growth trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {skillDemandData.slice(0, 6).map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{skill.skill}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-green-600 text-sm">+{skill.growth}%</span>
                      <TrendingUp className="w-3 h-3 text-green-600" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Demand: {skill.demand}%</span>
                    <span>{skill.jobs} jobs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div 
                      className="bg-orange-500 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${skill.demand}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Monthly Growth
            </CardTitle>
            <CardDescription>Platform usage trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={monthlyGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="newStudents" 
                  stackId="1"
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="assessments" 
                  stackId="2"
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>New Students</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Assessments</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Career Analytics</CardTitle>
          <CardDescription>Comprehensive view of career path performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Career Path</th>
                  <th className="text-right p-2">Students</th>
                  <th className="text-right p-2">Growth Rate</th>
                  <th className="text-right p-2">Avg. Completion</th>
                  <th className="text-right p-2">Job Placement</th>
                  <th className="text-right p-2">Avg. Salary</th>
                </tr>
              </thead>
              <tbody>
                {careerTrendsData.map((career, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium">{career.career}</td>
                    <td className="p-2 text-right">{career.students.toLocaleString()}</td>
                    <td className={`p-2 text-right ${getTrendColor('up')}`}>
                      +{career.growth}%
                    </td>
                    <td className="p-2 text-right">{Math.floor(Math.random() * 20) + 70}%</td>
                    <td className="p-2 text-right">{Math.floor(Math.random() * 15) + 80}%</td>
                    <td className="p-2 text-right">₹{Math.floor(Math.random() * 10) + 8}-{Math.floor(Math.random() * 15) + 20}L</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}