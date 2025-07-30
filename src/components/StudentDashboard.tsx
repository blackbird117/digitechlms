import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Calendar,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

export interface StudentDashboardProps {
  username: string;
}

// StudentDashboard displays the main dashboard for students, including stats, courses, and assignments
const StudentDashboard = ({ username }: StudentDashboardProps) => {
  // List of enrolled courses for the student
  const courses = [
    {
      id: 1,
      title: "Digital Technology Fundamentals",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      nextClass: "Tomorrow, 10:00 AM",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Web Development Basics",
      instructor: "Prof. Michael Chen",
      progress: 45,
      nextClass: "Friday, 2:00 PM",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Computer Networks",
      instructor: "Dr. Emily Davis",
      progress: 90,
      nextClass: "Monday, 9:00 AM",
      status: "Nearly Complete",
    },
  ];

  // List of assignments for the student
  const assignments = [
    {
      id: 1,
      title: "Database Design Project",
      course: "Digital Technology",
      dueDate: "Due in 3 days",
      status: "pending",
      type: "Project",
    },
    {
      id: 2,
      title: "HTML/CSS Assignment",
      course: "Web Development",
      dueDate: "Due in 1 week",
      status: "submitted",
      type: "Assignment",
    },
    {
      id: 3,
      title: "Network Security Quiz",
      course: "Computer Networks",
      dueDate: "Due tomorrow",
      status: "pending",
      type: "Quiz",
    },
  ];

  return (
    <div className="flex-1 min-h-screen space-y-6 px-4 md:px-8 py-6">
      {/* Welcome Section: Greets the student by name */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-1">
          Welcome back, {username}!
        </h2>
        <p className="text-sm opacity-80">
          Ready to continue learning today?
        </p>
      </div>

      {/* Quick Stats: Shows summary of courses, assignments, due soon, and average grade */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Active Courses Stat */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Active Courses</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Assignments Stat */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Due Soon Stat */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Due Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Average Grade Stat */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-sm text-gray-600">Avg Grade</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses and Assignments Section: Two columns for courses and assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Courses: Lists enrolled courses with progress and next class info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>My Courses</span>
            </CardTitle>
            <CardDescription>
              Your enrolled courses and progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Render each course */}
            {courses.map((course) => (
              <div
                key={course.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  {/* Status badge (e.g., In Progress, Nearly Complete) */}
                  <Badge variant="secondary">{course.status}</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Instructor: {course.instructor}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  {/* Progress bar for course completion */}
                  <Progress value={course.progress} className="h-2" />
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {course.nextClass}
                  </span>
                  {/* View Course button (future: link to course details) */}
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Assignments: Lists upcoming and recent assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Recent Assignments</span>
            </CardTitle>
            <CardDescription>
              Your upcoming and recent assignments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Render each assignment */}
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {assignment.title}
                  </h3>
                  {/* Status badge (e.g., Submitted, Pending) */}
                  <Badge
                    variant={
                      assignment.status === "submitted"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {assignment.status === "submitted"
                      ? "Submitted"
                      : "Pending"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {assignment.course}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {assignment.dueDate}
                </p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{assignment.type}</Badge>
                  <Button
                    size="sm"
                    variant={
                      assignment.status === "submitted"
                        ? "outline"
                        : "default"
                    }
                  >
                    {assignment.status === "submitted"
                      ? "View Submission"
                      : "Start Assignment"}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
