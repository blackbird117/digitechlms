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
  BookOpen,
  Users,
  FileText,
  Calendar,
  Plus,
  GraduationCap,
} from "lucide-react";

interface TeacherDashboardProps {
  username?: string;
}

// TeacherDashboard displays the main dashboard for teachers, including stats, classes, and recent submissions
export const TeacherDashboard = ({ username }: TeacherDashboardProps) => {
  // List of classes the teacher is handling
  const classes = [
    {
      id: 1,
      title: "Digital Technology Fundamentals",
      students: 28,
      schedule: "Mon, Wed, Fri - 10:00 AM",
      assignments: 3,
      status: "Active",
    },
    {
      id: 2,
      title: "Advanced Web Development",
      students: 22,
      schedule: "Tue, Thu - 2:00 PM",
      assignments: 5,
      status: "Active",
    },
  ];

  // List of recent student submissions for assignments
  const recentSubmissions = [
    {
      id: 1,
      student: "Alice Johnson",
      assignment: "Database Design Project",
      course: "Digital Technology",
      submittedAt: "2 hours ago",
      status: "pending",
    },
    {
      id: 2,
      student: "Bob Smith",
      assignment: "React Components Lab",
      course: "Web Development",
      submittedAt: "1 day ago",
      status: "graded",
    },
    {
      id: 3,
      student: "Carol Davis",
      assignment: "Network Security Quiz",
      course: "Digital Technology",
      submittedAt: "3 hours ago",
      status: "pending",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section: Greets the teacher by name and shows a summary */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">
          Good morning{username ? `, ${username}` : ", Professor"}!
        </h2>
        <p className="text-green-100">
          You have 5 assignments to grade and 2 classes today.
        </p>
      </div>

      {/* Quick Stats: Shows summary of classes, students, assignments, and grading */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Active Classes Stat */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Active Classes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Total Students Stat */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">50</p>
                <p className="text-sm text-gray-600">Total Students</p>
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
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Assignments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* To Grade Stat */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-600">To Grade</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Section: Two columns for classes and recent submissions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Classes: Lists classes the teacher is handling */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>My Classes</span>
                </CardTitle>
                <CardDescription>
                  Manage your courses and students
                </CardDescription>
              </div>
              {/* Button to add a new class (future feature) */}
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Class
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Render each class */}
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {classItem.title}
                  </h3>
                  {/* Status badge (e.g., Active) */}
                  <Badge variant="default">{classItem.status}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {classItem.students} students
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {classItem.assignments} assignments
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {classItem.schedule}
                </div>
                <div className="flex space-x-2">
                  {/* View Class and Gradebook buttons (future: link to details) */}
                  <Button size="sm" variant="outline">
                    View Class
                  </Button>
                  <Button size="sm" variant="outline">
                    Gradebook
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Submissions: Lists recent student assignment submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Recent Submissions</span>
            </CardTitle>
            <CardDescription>
              Student assignments awaiting review
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Render each submission */}
            {recentSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {submission.assignment}
                  </h3>
                  {/* Status badge (e.g., Graded, Pending) */}
                  <Badge
                    variant={
                      submission.status === "graded"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {submission.status === "graded" ? "Graded" : "Pending"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  Student: {submission.student}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Course: {submission.course}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  Submitted {submission.submittedAt}
                </p>
                {/* Grade or view grade button */}
                <Button
                  size="sm"
                  variant={
                    submission.status === "graded" ? "outline" : "default"
                  }
                >
                  {submission.status === "graded" ? "View Grade" : "Grade Now"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
