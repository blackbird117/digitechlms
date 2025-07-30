import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";

// Full course data from Courses.tsx
const courses = [
  {
    id: 1,
    title: "Python Programming",
    description: "Learn the fundamentals of Python programming language including data structures, algorithms, and web development.",
    duration: "12 weeks",
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript, and modern web frameworks to create stunning websites and user interfaces.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
  },
  {
    id: 3,
    title: "Cybersecurity",
    description: "Understand network security, ethical hacking, and how to protect systems from cyber threats.",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
  },
  {
    id: 4,
    title: "Basic Computing",
    description: "Learn computer fundamentals, operating systems, and essential digital literacy skills.",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Mobile Application Development",
    description: "Build mobile applications using modern frameworks and learn the complete development lifecycle.",
    duration: "16 weeks",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "Networking",
    description: "Explore computer networks, protocols, routers, and network troubleshooting techniques.",
    duration: "10 weeks",
    level: "Intermediate",
  },
  {
    id: 7,
    title: "Robotics and IoT",
    description: "Learn how to build smart devices using sensors, microcontrollers, and real-time data systems.",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
  },
  {
    id: 8,
    title: "Hardware & Software Maintenance",
    description: "Understand PC hardware, diagnostics, operating system maintenance, and troubleshooting.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
  },
  {
    id: 9,
    title: "Graphic Design",
    description: "Develop design skills using tools like Adobe Photoshop, Illustrator, and Canva.",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
  },
  {
    id: 10,
    title: "3D Printing",
    description: "Learn how to design, slice, and print 3D models using various 3D printing technologies.",
    duration: "6 weeks",
    level: "Beginner to Intermediate",
  },
  {
    id: 11,
    title: "Photography & Videography",
    description: "Master camera techniques, lighting, editing, and visual storytelling.",
    duration: "10 weeks",
    level: "Beginner to Advanced",
  },
  {
    id: 12,
    title: "Social Media Management",
    description: "Understand social media platforms, content strategy, analytics, and growth techniques.",
    duration: "6 weeks",
    level: "Beginner to Intermediate",
  },
];

// Reusable CourseCard component
function CourseCard({ title, description, duration, level }: { title: string; description: string; duration: string; level: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between transition hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{duration}</span>
        <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>{level}</span>
      </div>
    </div>
  );
}

const LandingPage = () => {
  const navigate = useNavigate();

  // Memoize course cards for performance
  const courseCards = useMemo(() =>
    courses.map((course) => (
      <CourseCard key={course.id} {...course} />
    )),
    []
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-700 tracking-tight">DigiTechLMS</Link>
        <nav className="hidden md:flex gap-8 ml-8">
          <Link to="#courses" className="text-gray-700 hover:text-blue-600 font-medium transition">Courses</Link>
          <Link to="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
          <Link to="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
        </nav>
        <div className="flex gap-2 ml-auto">
          <button
            className="px-4 py-2 rounded-lg font-medium text-blue-700 border border-blue-700 hover:bg-blue-50 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-4 py-2 rounded-lg font-medium text-white bg-blue-700 hover:bg-blue-800 transition"
            onClick={() => navigate("/login")}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 md:px-0 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Empower Your Digital Future</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">Join DigiTechLMS and access a wide range of technology courses designed to boost your skills and career. Learn at your own pace with expert instructors and a supportive community.</p>
        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 transition"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
          <a href="#courses" className="px-6 py-3 rounded-lg font-semibold text-blue-700 border border-blue-700 hover:bg-blue-50 transition">Browse Courses</a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="max-w-5xl mx-auto px-4 md:px-0 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseCards}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm mt-auto">
        &copy; {new Date().getFullYear()} DigiTechLMS. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
