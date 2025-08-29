import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  Users, 
  PlusCircle, 
  ClipboardList, 
  GraduationCap,
  Target,
  TrendingUp,
  Bell,
  Clock,
  Award
} from "lucide-react";

interface DashboardProps {
  userRole: 'admin' | 'professor' | 'student';
  userEmail: string;
}

export const Dashboard = ({ userRole, userEmail }: DashboardProps) => {
  const [courses] = useState([
    { id: 1, name: "Data Structures", code: "CS201", students: 45, assignments: 8 },
    { id: 2, name: "Web Development", code: "CS301", students: 38, assignments: 12 },
    { id: 3, name: "Database Systems", code: "CS401", students: 52, assignments: 6 }
  ]);

  const [assignments] = useState([
    { id: 1, title: "Binary Trees Implementation", course: "Data Structures", due: "2024-09-15", submitted: false },
    { id: 2, title: "React Portfolio Project", course: "Web Development", due: "2024-09-18", submitted: true },
    { id: 3, title: "SQL Query Optimization", course: "Database Systems", due: "2024-09-20", submitted: false }
  ]);

  if (userRole === 'professor') {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Professor Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Professor!</p>
            </div>
            <Button variant="hero" size="lg">
              <PlusCircle className="w-5 h-5" />
              Create New Course
            </Button>
          </div>

          {/* Analytics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">135</div>
                <div className="flex items-center text-xs text-blue-600 dark:text-blue-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% from last semester
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Active Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">{courses.length}</div>
                <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                  <BookOpen className="w-3 h-3 mr-1" />
                  All courses active
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">26</div>
                <div className="flex items-center text-xs text-purple-600 dark:text-purple-400">
                  <ClipboardList className="w-3 h-3 mr-1" />
                  5 pending review
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">Avg Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">84%</div>
                <div className="flex items-center text-xs text-orange-600 dark:text-orange-400">
                  <Award className="w-3 h-3 mr-1" />
                  +3% improvement
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Your Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                  <Card key={course.id} className="cursor-pointer hover:shadow-elegant transition-all duration-300 border border-border hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{course.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{course.code}</Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Students:</span>
                          <span className="font-medium">{course.students}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Assignments:</span>
                          <span className="font-medium">{course.assignments}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (userRole === 'student') {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
              <p className="text-muted-foreground">Track your academic progress</p>
            </div>
            <Button variant="academic" size="lg">
              <PlusCircle className="w-5 h-5" />
              Join Course
            </Button>
          </div>

          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Current CGPA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">3.75</div>
                <div className="flex items-center text-xs text-blue-600 dark:text-blue-400">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +0.12 this semester
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Enrolled Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">6</div>
                <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                  <BookOpen className="w-3 h-3 mr-1" />
                  18 credit hours
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-red-700 dark:text-red-300">Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-900 dark:text-red-100">8</div>
                <div className="flex items-center text-xs text-red-600 dark:text-red-400">
                  <Clock className="w-3 h-3 mr-1" />
                  2 due this week
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Completion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">92%</div>
                <div className="flex items-center text-xs text-purple-600 dark:text-purple-400">
                  <Target className="w-3 h-3 mr-1" />
                  Excellent progress
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assignments Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="w-5 h-5" />
                Recent Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-medium">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground">{assignment.course}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">Due: {assignment.due}</p>
                        <Badge variant={assignment.submitted ? "default" : "destructive"}>
                          {assignment.submitted ? "Submitted" : "Pending"}
                        </Badge>
                      </div>
                      <Button size="sm" variant={assignment.submitted ? "secondary" : "academic"}>
                        {assignment.submitted ? "View" : "Submit"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage the SaiU LMS platform</p>
          </div>
          <Button variant="hero" size="lg">
            <Users className="w-5 h-5" />
            Register Users
          </Button>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">1,247</div>
              <div className="flex items-center text-xs text-blue-600 dark:text-blue-400">
                <Users className="w-3 h-3 mr-1" />
                89 students, 12 professors
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900 dark:text-green-100">24</div>
              <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                <BookOpen className="w-3 h-3 mr-1" />
                6 departments
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">System Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">98%</div>
              <div className="flex items-center text-xs text-purple-600 dark:text-purple-400">
                <TrendingUp className="w-3 h-3 mr-1" />
                All systems operational
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">Monthly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">15.2K</div>
              <div className="flex items-center text-xs text-orange-600 dark:text-orange-400">
                <BarChart3 className="w-3 h-3 mr-1" />
                +23% increase
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="academic" size="lg" className="h-16 flex-col gap-2">
                <Users className="w-6 h-6" />
                <span>Register Students</span>
              </Button>
              <Button variant="gradient" size="lg" className="h-16 flex-col gap-2">
                <GraduationCap className="w-6 h-6" />
                <span>Add Professors</span>
              </Button>
              <Button variant="hero" size="lg" className="h-16 flex-col gap-2">
                <BarChart3 className="w-6 h-6" />
                <span>View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};