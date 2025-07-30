import StudentDashboard from "@/components/StudentDashboard";
import { TeacherDashboard } from "@/components/TeacherDashboard";
import { AdminDashboard } from "@/components/AdminDashboard";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { AppSidebar } from "@/components/AppSidebar";

interface DashboardContentProps {
  userRole: "student" | "teacher" | "admin";
  username: string;
  onLogout: () => void;
}

// DashboardContent is the main wrapper for all dashboard roles (student, teacher, admin)
export const DashboardContent = ({ userRole, username, onLogout }: DashboardContentProps) => {
  // Renders the appropriate dashboard based on user role
  const renderDashboard = () => {
    switch (userRole) {
      case "student":
        // Student dashboard view
        return <StudentDashboard username={username} />;
      case "teacher":
        // Teacher dashboard view
        return <TeacherDashboard username={username} />;
      case "admin":
        // Admin dashboard view
        return <AdminDashboard username={username} />;
      default:
        // Fallback for unknown roles
        return (
          <div className="text-red-600 text-center mt-10">
            Unknown role. Please contact support.
          </div>
        );
    }
  };

  // The main dashboard layout: sidebar (if present), top bar, and dashboard body
  // Uses a key on the dashboard body to force remount on navigation (for react-router)
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Main Area: Contains the top bar and dashboard content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar: Shows the dashboard title and menu button */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
        </header>

        {/* Dashboard Body: Renders the dashboard for the current user role */}
        <section className="flex-1 p-4 md:p-6 bg-gray-50 overflow-y-auto">
          {/* Key prop ensures remount on navigation if using react-router */}
          <div key={username + '-' + userRole}>
            {renderDashboard()}
          </div>
        </section>
      </div>
    </div>
  );
};
