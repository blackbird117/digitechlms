import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap } from "lucide-react";

//Accept onLogin as a prop
interface LoginFormProps {
  onLogin: (userRole: "student" | "teacher" | "admin", username: string) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"student" | "teacher" | "admin">("student");
  const [loginIdentifier, setLoginIdentifier] = useState("");

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignupMode) {
      if (!username.trim() || !email.trim() || !password) {
        toast({
          title: "Missing Fields",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      if (password !== confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Passwords don't match!",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Signup Successful!",
        description: "Your account has been created. Please log in.",
      });

      setIsSignupMode(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    if (!loginIdentifier.trim() || !password.trim()) {
      toast({
        title: "Missing Login Info",
        description: "Please enter your username/email and password.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login Successful",
      description: `Welcome back, ${loginIdentifier}`,
    });

    //Call the onLogin prop
    onLogin(role, loginIdentifier);
  };

  const toggleMode = () => {
    setIsSignupMode(!isSignupMode);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLoginIdentifier("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Digitech LMS</h1>
          <p className="text-gray-600">Elimu Resource Centre Learning Platform</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              {isSignupMode ? "Create Account" : "Welcome Back"}
            </CardTitle>
            <CardDescription className="text-center">
              {isSignupMode
                ? "Sign up to access your learning dashboard"
                : "Sign in to access your learning dashboard"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignupMode ? (
                <>
                  <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder="Username or Email"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {isSignupMode ? "Sign up as" : "Sign in as"}
                </label>
               <Select value={role} onValueChange={(val) => setRole(val as "student" | "teacher" | "admin")}>

                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {isSignupMode ? "Sign Up" : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2 text-sm text-gray-600">
              <button
                type="button"
                onClick={toggleMode}
                className="text-blue-600 hover:underline"
              >
                {isSignupMode
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </button>
              {!isSignupMode && (
                <div>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
