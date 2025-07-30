import {
  BookOpen, Calendar, FileText, GraduationCap, Home,
  MessageSquare, Settings, User, Users, BarChart3, LogOut
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarHeader, SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useNavigate, useLocation } from "react-router-dom";

interface AppSidebarProps {
  userRole: 'student' | 'teacher' | 'admin';
  username: string;
  onLogout: () => void;
}

type MenuItem = {
  title: string;
  icon: React.ElementType;
  path?: string;
  action?: () => void;
};

// AppSidebar displays the navigation sidebar for all user roles
export const AppSidebar = ({ userRole, username, onLogout }: AppSidebarProps) => {
  // State for calendar modal
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // State for selected date in calendar
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  // Menu items common to all roles
  const baseItems: MenuItem[] = [
    { title: "Dashboard", icon: Home, path: "/dashboard" },
    { title: "Courses", icon: BookOpen, path: "/courses" },
    { title: "Calendar", icon: Calendar, action: () => setIsCalendarOpen(true) },
    { title: "Messages", icon: MessageSquare, path: "/messages" },
  ];

  // Additional menu items based on user role
  const roleSpecificItems: Record<string, MenuItem[]> = {
    student: [
      { title: "Assignments", icon: FileText, path: "/assignments" },
      { title: "Grades", icon: BarChart3, path: "/grades" },
    ],
    teacher: [
      { title: "My Classes", icon: Users, path: "/my-classes" },
      { title: "Assignments", icon: FileText, path: "/assignments" },
      { title: "Gradebook", icon: BarChart3, path: "/gradebook" },
    ],
    admin: [
      { title: "User Management", icon: Users, path: "/user-management" },
      { title: "Analytics", icon: BarChart3, path: "/analytics" },
      { title: "Settings", icon: Settings, path: "/settings" },
    ],
  };

  // Handles menu item clicks, including dashboard reload if already on dashboard
  const handleMenuClick = (item: MenuItem) => {
    if (item.title === "Dashboard" && item.path === "/dashboard") {
      if (location.pathname === "/dashboard") {
        // Force reload (remount) of dashboard
        window.location.reload();
        return;
      }
    }
    if (item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
    }
  };

  // Combine base and role-specific menu items
  const menuItems = [...baseItems, ...(roleSpecificItems[userRole] || [])];

  return (
    <>
      {/* Sidebar container */}
      <Sidebar className="w-64 min-h-screen border-r border-gray-200 bg-white">
        {/* Header: App logo and user role */}
        <SidebarHeader className="border-b border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">DigitechW</h2>
              <p className="text-sm text-gray-600 capitalize">{userRole} Portal</p>
            </div>
          </div>
        </SidebarHeader>

        {/* Navigation Menu */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Render each menu item */}
                {menuItems.map((item) => {
                  const { title, icon: Icon, path } = item;
                  const isActive = path && location.pathname === path;

                  return (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton
                        onClick={() => handleMenuClick(item)}
                        className={`hover:bg-blue-50 hover:text-blue-700 ${isActive ? "bg-blue-100 text-blue-700" : ""}`}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer: User info and sign out button */}
        <SidebarFooter className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="bg-gray-300 rounded-full p-2">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">{username}</p>
              <p className="text-xs text-gray-500 capitalize">{userRole}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="w-full justify-start hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </SidebarFooter>
      </Sidebar>

      {/* Calendar Modal: Opens when calendar menu item is clicked */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Calendar</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
