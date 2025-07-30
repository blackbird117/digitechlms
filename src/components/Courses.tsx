import {
  BookOpen, Code, Shield, Computer, Smartphone, Globe, Share2, Camera,
  Printer, MonitorSmartphone, Network, Brush
} from "lucide-react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

// Courses component displays a catalog of available courses with outlines and registration
const Courses = () => {
  // State for the currently selected course (for modal display)
  const [selectedCourse, setSelectedCourse] = useState(null);
  // List of all available courses (each with outline, icon, etc.)
  const courses = [
    {
      id: 1,
      title: "Python Programming",
      description: "Learn the fundamentals of Python programming language including data structures, algorithms, and web development.",
      icon: Code,
      level: "Beginner to Advanced",
      duration: "12 weeks",
      color: "bg-green-500",
      instructor: {
        name: "Jane Doe",
        bio: "Senior Python Developer with 10+ years of experience in teaching and building scalable web applications.",
        image: null // Placeholder, can be replaced with actual image URL
      },
      courseOutline: [
        "Introduction to Python & Setup",
        "Variables, Data Types, and Operators",
        "Control Flow & Functions",
        "Data Structures (Lists, Tuples, Dictionaries)",
        "Object-Oriented Programming",
        "Modules & Packages",
        "File Handling",
        "Error Handling",
        "Web Development Basics",
        "Final Project"
      ]
    },
    {
      id: 2,
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, and modern web frameworks to create stunning websites and user interfaces.",
      icon: Globe,
      level: "Beginner to Intermediate",
      duration: "10 weeks",
      color: "bg-blue-500",
      instructor: {
        name: "John Smith",
        bio: "Fullstack Web Engineer and educator, passionate about modern web technologies and UI/UX design.",
        image: null
      },
      courseOutline: [
        "Introduction to Web Development",
        "HTML Fundamentals",
        "CSS Styling & Layouts",
        "JavaScript Basics",
        "Responsive Design",
        "Version Control with Git",
        "Modern JS Frameworks Overview",
        "Building a Portfolio Website"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Understand network security, ethical hacking, and how to protect systems from cyber threats.",
      icon: Shield,
      level: "Intermediate to Advanced",
      duration: "14 weeks",
      color: "bg-red-500",
      instructor: {
        name: "Alice Johnson",
        bio: "Certified Cybersecurity Analyst and ethical hacker, with a focus on network defense and security education.",
        image: null
      },
      courseOutline: [
        "Introduction to Cybersecurity",
        "Network Security Basics",
        "Threats & Vulnerabilities",
        "Ethical Hacking Techniques",
        "Security Tools & Practices",
        "Incident Response",
        "Cyber Law & Ethics",
        "Capstone Project"
      ]
    },
    // ...repeat for all other courses, add instructor property with name and bio...
    {
      id: 4,
      title: "Basic Computing",
      description: "Learn computer fundamentals, operating systems, and essential digital literacy skills.",
      icon: Computer,
      level: "Beginner",
      duration: "8 weeks",
      color: "bg-purple-500",
      courseOutline: [
        "Introduction to Computers",
        "Operating Systems Overview",
        "File Management",
        "Internet & Email Basics",
        "Digital Safety",
        "Productivity Software",
        "Practical Exercises"
      ]
    },
    {
      id: 5,
      title: "Mobile Application Development",
      description: "Build mobile applications using modern frameworks and learn the complete development lifecycle.",
      icon: Smartphone,
      level: "Intermediate",
      duration: "16 weeks",
      color: "bg-orange-500",
      courseOutline: [
        "Introduction to Mobile Apps",
        "UI/UX Design Principles",
        "Mobile Frameworks Overview",
        "Building Your First App",
        "Data Storage & APIs",
        "Testing & Debugging",
        "Publishing Apps",
        "Project Work"
      ]
    },
    {
      id: 6,
      title: "Networking",
      description: "Explore computer networks, protocols, routers, and network troubleshooting techniques.",
      icon: Network,
      level: "Intermediate",
      duration: "10 weeks",
      color: "bg-cyan-600",
      courseOutline: [
        "Introduction to Networking",
        "Network Devices & Topologies",
        "Protocols & Standards",
        "IP Addressing & Subnetting",
        "Routing & Switching",
        "Network Troubleshooting",
        "Practical Labs"
      ]
    },
    {
      id: 7,
      title: "Robotics and IoT",
      description: "Learn how to build smart devices using sensors, microcontrollers, and real-time data systems.",
      icon: MonitorSmartphone,
      level: "Intermediate to Advanced",
      duration: "14 weeks",
      color: "bg-teal-600",
      courseOutline: [
        "Introduction to Robotics & IoT",
        "Sensors & Microcontrollers",
        "Programming Smart Devices",
        "IoT Communication Protocols",
        "Data Collection & Analysis",
        "Project Development"
      ]
    },
    {
      id: 8,
      title: "Hardware & Software Maintenance",
      description: "Understand PC hardware, diagnostics, operating system maintenance, and troubleshooting.",
      icon: Computer,
      level: "Beginner to Intermediate",
      duration: "10 weeks",
      color: "bg-gray-600",
      courseOutline: [
        "PC Hardware Components",
        "Operating System Installation",
        "Diagnostics & Troubleshooting",
        "Software Maintenance",
        "Practical Labs"
      ]
    },
    {
      id: 9,
      title: "Graphic Design",
      description: "Develop design skills using tools like Adobe Photoshop, Illustrator, and Canva.",
      icon: Brush,
      level: "Beginner to Intermediate",
      duration: "8 weeks",
      color: "bg-pink-500",
      courseOutline: [
        "Introduction to Graphic Design",
        "Design Principles & Elements",
        "Adobe Photoshop Basics",
        "Illustrator & Canva Overview",
        "Practical Design Projects"
      ]
    },
    {
      id: 10,
      title: "3D Printing",
      description: "Learn how to design, slice, and print 3D models using various 3D printing technologies.",
      icon: Printer,
      level: "Beginner to Intermediate",
      duration: "6 weeks",
      color: "bg-yellow-600",
      courseOutline: [
        "Introduction to 3D Printing",
        "3D Design Software",
        "Slicing & Preparing Models",
        "Printer Setup & Maintenance",
        "Printing Techniques",
        "Project Work"
      ]
    },
    {
      id: 11,
      title: "Photography & Videography",
      description: "Master camera techniques, lighting, editing, and visual storytelling.",
      icon: Camera,
      level: "Beginner to Advanced",
      duration: "10 weeks",
      color: "bg-amber-600",
      courseOutline: [
        "Introduction to Photography & Videography",
        "Camera Techniques & Settings",
        "Lighting & Composition",
        "Editing & Post-Production",
        "Visual Storytelling",
        "Portfolio Development"
      ]
    },
    {
      id: 12,
      title: "Social Media Management",
      description: "Understand social media platforms, content strategy, analytics, and growth techniques.",
      icon: Share2,
      level: "Beginner to Intermediate",
      duration: "6 weeks",
      color: "bg-indigo-500",
      courseOutline: [
        "Introduction to Social Media",
        "Content Strategy & Planning",
        "Platform Analytics",
        "Growth Techniques",
        "Practical Campaigns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section with catalog title and intro */}
      <div
        className="top-0 z-50 bg-blue-600 text-white py-8 px-6 shadow mx-6 mt-4"
        style={{ borderRadius: "8px" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-2">
            <BookOpen className="h-7 w-7 mr-2 text-white" />
            <h1 className="text-3xl font-bold">Available Courses</h1>
          </div>
          <p className="text-white text-opacity-90">
            Explore our comprehensive course catalog and start your learning journey
          </p>
        </div>
      </div>

      {/* Responsive grid: 1 card per row on mobile, 2 per row on desktop */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between min-h-[260px] cursor-pointer transition hover:shadow-xl"
              tabIndex={0}
              role="button"
              onClick={() => setSelectedCourse(course)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedCourse(course); }}
              style={{ outline: 'none' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-lg ${course.color}`}>
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">{course.title}</h2>
                </div>
                <p className="text-black text-base mb-6">{course.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-6 text-sm text-black flex-wrap">
                  {/* Tag */}
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    Fullstack
                  </span>
                  {/* Lessons */}
                  <span>{course.courseOutline.length} lessons</span>
                  {/* Level */}
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    {course.level}
                  </span>
                  {/* Duration */}
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {course.duration}
                  </span>
                </div>
                {/* Circular instructor image (placeholder) */}
                <div className="ml-4">
                  <div className="relative group w-12 h-12">
                    <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white shadow-lg flex items-center justify-center overflow-hidden">
                      <svg className="w-8 h-8 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4v1H4v-1z" /></svg>
                    </div>
                    {/* Hover card for instructor details */}
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-10 hidden group-hover:block bg-white text-black rounded-lg shadow-lg p-4 w-64 border border-gray-200">
                      <div className="font-bold text-lg mb-1">{course.instructor?.name}</div>
                      <div className="text-sm text-gray-700">{course.instructor?.bio}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Outline Modal: Shows outline and details for selected course */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedCourse?.title} Outline
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <p><span className="font-semibold">Duration:</span> {selectedCourse?.duration}</p>
            <p><span className="font-semibold">Level:</span> {selectedCourse?.level}</p>
            <p className="text-gray-700">{selectedCourse?.description}</p>
            {/* Bulleted outline of course content */}
            {selectedCourse?.courseOutline && (
              <ul className="list-disc pl-5 mt-2">
                {selectedCourse.courseOutline.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Courses;
