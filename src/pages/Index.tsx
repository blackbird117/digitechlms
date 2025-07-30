
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'teacher' | 'admin'>('student');

  const handleLogin = (role: 'student' | 'teacher' | 'admin') => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <DashboardLayout userRole={userRole} onLogout={() => setIsLoggedIn(false)} />;
};

export default Index;
