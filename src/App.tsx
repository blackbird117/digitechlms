import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { LoginForm } from "@/components/LoginForm";
import { DashboardLayout } from "@/components/DashboardLayout";
import NotFound from "./pages/NotFound";
import Courses from "./components/Courses";
import LandingPage from "./components/LandingPage";

// Role-based dashboards (used inside DashboardLayout)
import StudentDashboard from "./components/StudentDashboard";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { AdminDashboard } from "./components/AdminDashboard";

// Login Page
const Index = () => {
  const navigate = useNavigate();

  const handleLogin = (userRole: "student" | "teacher" | "admin", username: string) => {
    // Navigate to the shared dashboard wrapper with state
    navigate("/dashboard", { state: { userRole, username } });
  };

  return <LoginForm onLogin={handleLogin} />;
};

// Dashboard Wrapper to handle role-based dashboards
const DashboardWrapper = () => {
  const location = useLocation();
  // Try to get state from navigation, or from localStorage/sessionStorage as fallback
  let state = location.state as { userRole: "student" | "teacher" | "admin"; username: string };
  if (!state?.userRole || !state?.username) {
    // Try to get from sessionStorage (persist after reload)
    const stored = sessionStorage.getItem("dashboardUser");
    if (stored) {
      state = JSON.parse(stored);
    }
  } else {
    // Save to sessionStorage for reloads
    sessionStorage.setItem("dashboardUser", JSON.stringify(state));
  }

  if (!state?.userRole || !state?.username) {
    return <p className="text-center mt-10 text-red-600">Unauthorized. Please log in.</p>;
  }

  return (
    <DashboardLayout
      userRole={state.userRole}
      username={state.username}
      onLogout={() => {
        sessionStorage.removeItem("dashboardUser");
        window.location.href = "/";
      }}
    />
  );
};

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Index />} />
          <Route path="/dashboard" element={<DashboardWrapper />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
