import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BookOpen,
  BarChart3,
  Settings,
  UserPlus,
  Plus,
  TrendingUp,
} from "lucide-react";

interface AdminDashboardProps {
  username?: string;
}

export const AdminDashboard = ({ username }: AdminDashboardProps) => {
  const systemStats = [
    { label: "Total Users", value: "1,234", icon: Users, color: "text-blue-600" },
    { label: "Active Courses", value: "45", icon: BookOpen, color: "text-green-600" },
    { label: "Monthly Logins", value: "8,921", icon: TrendingUp, color: "text-purple-600" },
    { label: "System Health", value: "99.8%", icon: BarChart3, color: "text-orange-600" },
  ];

  const recentUsers = [
    {
      id: 1,
      name: "Sarah Connor",
      email: "sarah.connor@digitechw.com",
      role: "Teacher",
      status: "Active",
      joinedAt: "2 days ago",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@student.digitechw.com",
      role: "Student",
      status: "Active",
      joinedAt: "1 week ago",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@digitechw.com",
      role: "Teacher",
      status: "Pending",
      joinedAt: "3 days ago",
    },
  ];

  const courseStats = [
    {
      id: 1,
      title: "Digital Technology Fundamentals",
      students: 28,
      completion: 85,
      instructor: "Dr. Johnson",
    },
    {
      id: 2,
      title: "Web Development Basics",
      students: 22,
      completion: 72,
      instructor: "Prof. Chen",
    },
    {
      id: 3,
      title: "Computer Networks",
      students: 35,
      completion: 91,
      instructor: "Dr. Davis",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-1">
          Welcome back{username ? `, ${username}` : ""}!
        </h2>
        <p className="text-purple-100">You're managing the DigitechW LMS dashboard.</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>User Management</span>
                </CardTitle>
                <CardDescription>Manage system users and permissions</CardDescription>
              </div>
              <Button size="sm">
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentUsers.map((user) => (
              <div
                key={user.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <Badge
                    variant={user.status === "Active" ? "default" : "secondary"}
                  >
                    {user.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">{user.email}</p>
                <p className="text-sm text-gray-500 mb-3">
                  Role: {user.role} • Joined {user.joinedAt}
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    Permissions
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Course Analytics */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Course Analytics</span>
                </CardTitle>
                <CardDescription>
                  Monitor course performance and engagement
                </CardDescription>
              </div>
              <Button size="sm" variant="outline">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {courseStats.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{course.title}</h3>
                  <Badge variant="outline">{course.completion}% Complete</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Instructor: {course.instructor}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} students enrolled
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    Analytics
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <UserPlus className="h-6 w-6" />
              <span>Add New User</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Plus className="h-6 w-6" />
              <span>Create Course</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span>Generate Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
