import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardContent } from "@/components/DashboardContent";

interface DashboardLayoutProps {
  userRole: 'student' | 'teacher' | 'admin';
  username: string;
  onLogout: () => void;
}

export const DashboardLayout = ({
  userRole,
  username,
  onLogout,
}: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        {/* Sidebar with role and username */}
        <AppSidebar 
          userRole={userRole} 
          username={username} 
          onLogout={onLogout} 
        />

        {/* Main dashboard content with personalized greeting */}
        <main className="flex-1">
          <DashboardContent 
            userRole={userRole} 
            username={username} 
            onLogout={onLogout}
          />
        </main>
      </div>
    </SidebarProvider>
  );
};
