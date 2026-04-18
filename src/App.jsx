import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
 
// ─── DATA ───────────────────────────────────────────────────────────────────
 
const courses = [
  {
    id: 1,
    title: "Power Bi Mastery Track - Internship",
    mrp: 25000,
    now: 17999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    id: 2,
    title: "SQL Internship Mastery Track",
    mrp: 35000,
    now: 21999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
  },
  {
    id: 3,
    title: "Power Apps Internship Mastery Track",
    mrp: 49999,
    now: 24999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
  },
  {
    id: 4,
    title: "Full Stack Development Internship Mastery Track",
    mrp: 55998,
    now: 29999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
  },
  {
    id: 5,
    title: "Excel Internship Proficiency Track",
    mrp: 9999,
    now: 5999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
  },
  {
    id: 6,
    title: "Prompt Engineering Proficiency Track",
    mrp: 10999,
    now: 5999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
  },
  {
    id: 7,
    title: "Power Bi",
    mrp: 19999,
    now: 12999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    id: 8,
    title: "SQL",
    mrp: 25999,
    now: 14999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
  },
  {
    id: 9,
    title: "Microsoft Power Platform",
    mrp: 89999,
    now: 49999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
  },
  {
    id: 10,
    title: "Human Resource Management",
    mrp: 15999,
    now: 9999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  },
  {
    id: 11,
    title: "Corporate Financial Planning",
    mrp: 18999,
    now: 9999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    id: 12,
    title: "Data Analytics - Excel, Power bi, SQL",
    mrp: 29999,
    now: 15999,
    badge: "Limited Time Offer!",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
];
 
const heroSlides = [
  {
    label: "WELCOME TO THE PROEDGE",
    title: "Success Is Just A Step Away",
    subtitle: "Certified courses and programs to help you build your career.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    label: "LEARN FROM EXPERTS",
    title: "Build Real-World Skills",
    subtitle: "Hands-on projects with industry mentors guiding you.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
  },
  {
    label: "CAREER FOCUSED",
    title: "Get Hired Faster",
    subtitle: "Mock interviews, resume reviews, and employer introductions.",
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=700&q=80",
  },
];
 
// ─── NAVBAR ─────────────────────────────────────────────────────────────────
 
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
 
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/internship", label: "Internship" },
    { to: "/courses", label: "Courses" },
    { to: "/contact", label: "Contact" },
  ];
 
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
            <span className="text-white font-extrabold text-sm">PE</span>
          </div>
          <div>
            <p className="font-extrabold text-blue-900 text-lg leading-none">
              <span className="text-orange-500">Proedge</span> Learning
            </p>
            <p className="text-xs text-gray-500">A VisionPro Ventures Private Limited Company</p>
          </div>
        </Link>
 
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-orange-600 transition"
          >
            Enroll Now
          </Link>
        </div>
 
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
 
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-500 text-white px-5 py-2 rounded text-sm font-semibold text-center"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
}
 
// ─── HERO SECTION ────────────────────────────────────────────────────────────
 
function HeroSection() {
  const [current, setCurrent] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 4000);
    return () => clearInterval(timer);
  }, []);
 
  const slide = heroSlides[current];
 
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-orange-400 text-sm font-semibold tracking-widest mb-3">{slide.label}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">{slide.title}</h1>
          <p className="text-blue-200 text-base mb-8">{slide.subtitle}</p>
          <Link
            to="/courses"
            className="inline-block bg-orange-500 text-white px-7 py-3 rounded font-semibold hover:bg-orange-600 transition"
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1 relative">
          <img
            src={slide.img}
            alt="Hero"
            className="rounded-xl w-full h-72 md:h-96 object-cover shadow-2xl"
          />
          {/* Dots */}
          <div className="flex gap-2 justify-center mt-4">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${i === current ? "bg-orange-400" : "bg-blue-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
// ─── FEATURES BAR ────────────────────────────────────────────────────────────
 
function FeaturesBar() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Dedicated Team",
      desc: "Guidance every step of the way.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "Global Community",
      desc: "Learn with diverse learners.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Practice Learning",
      desc: "Hands-on real-world projects.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24x7 Support",
      desc: "Help whenever you need it.",
    },
  ];
 
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-blue-900 text-lg mb-1">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
// ─── ABOUT SECTION ───────────────────────────────────────────────────────────
 
function AboutSection() {
  const checks = [
    {
      title: "Courses by Industry Experts",
      desc: "Curriculum built and taught by senior engineers and hiring managers, updated every quarter.",
    },
    {
      title: "Hands-On Practical Learning",
      desc: "Project-driven modules: build real apps, portfolios, and deploy to production.",
    },
    {
      title: "Dedicated Career Support",
      desc: "1:1 mentorship, resume reviews, mock interviews and employer introductions.",
    },
  ];
 
  const systemPoints = [
    "Expert-led Guidance",
    "Real-world Projects",
    "Ai & Future-Ready Skills",
    "Budget-Friendly Courses",
    "Career Focused Programs",
    "Smart Classes",
    "Job Readiness",
    "Skill Contribution",
  ];
 
  const gridImgs = [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
  ];
 
  return (
    <>
      {/* Who We Are */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-orange-500 text-sm font-semibold tracking-widest mb-2">ABOUT PROEDGE</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-5">Who We Are & What We Do</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ProEdge Learning helps ambitious professionals transition into high-growth tech roles through immersive, project-based training, hands-on mentorship, and employer-aligned career support. We blend practical engineering work with soft-skill coaching so graduates are interview-ready and confident on day one.
            </p>
            <ul className="space-y-4 mb-8">
              {checks.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-orange-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-blue-900">{c.title}</p>
                    <p className="text-gray-500 text-sm">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/courses"
              className="inline-block bg-orange-500 text-white px-7 py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Browse Courses
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
              alt="About"
              className="rounded-xl w-full h-80 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>
 
      {/* Our Education System */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 grid grid-cols-2 gap-4">
            {gridImgs.map((src, i) => (
              <img key={i} src={src} alt="education" className="rounded-xl w-full h-44 object-cover shadow" />
            ))}
          </div>
          <div className="flex-1">
            <p className="text-orange-500 text-sm font-semibold tracking-widest mb-2">OUR SYSTEM</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Our Education System Inspires</h2>
            <ul className="space-y-3">
              {systemPoints.map((pt, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-orange-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
 
// ─── WHY CHOOSE US ───────────────────────────────────────────────────────────
 
function WhyChooseUs() {
  const cards = [
    {
      emoji: "💡",
      title: "Innovative Curriculum",
      desc: "Hands-on projects inspired by real product problems — we teach modern architectures, testing, and best practices.",
    },
    {
      emoji: "🎨",
      title: "Creative Problem Solving",
      desc: "Design thinking + engineering: build elegant solutions that balance user needs and technical constraints.",
    },
    {
      emoji: "🏆",
      title: "Professional Readiness",
      desc: "Interview workshops, portfolio reviews, and employer networking — bridge the gap to your next role.",
    },
    {
      emoji: "⏱️",
      title: "Flexible, Focused Learning",
      desc: "Self-paced modules with weekly live labs so you progress quickly without sacrificing quality.",
    },
  ];
 
  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <p className="text-orange-400 text-sm font-semibold tracking-widest mb-3">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-4 leading-tight">
            Innovative. Creative.<br />Professional.
          </h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            At ProEdge we combine industry-grade engineering, creative product thinking, and professional career coaching to fast-track your growth. Our approach blends theory, studio-style collaboration, and employer-aligned projects so you graduate with market-ready skills and a standout portfolio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="text-2xl mb-2">{c.emoji}</div>
                <h4 className="font-bold text-white mb-1">{c.title}</h4>
                <p className="text-blue-200 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
            alt="Why Choose Us"
            className="rounded-xl w-full h-72 object-cover shadow-xl mb-6"
          />
          <div className="bg-white/10 border border-white/20 rounded-xl p-6">
            <h4 className="font-bold text-white text-lg mb-2">Your Career Deserves More Than Theory</h4>
            <p className="text-blue-200 text-sm">
              Because <span className="text-orange-400 font-semibold">we don't just teach</span> — we transform.
              At ProEdge, every skill you learn is designed to move you closer to your{" "}
              <span className="text-orange-400 font-semibold">career goals.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
// ─── COURSES SECTION ─────────────────────────────────────────────────────────
 
function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
      <div className="relative">
        <img src={course.img} alt={course.title} className="w-full h-44 object-cover" />
        {course.badge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {course.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-blue-900 text-sm mb-3 min-h-[40px]">{course.title}</h4>
        <p className="text-gray-400 text-xs line-through mb-0.5">MRP: ₹{course.mrp.toLocaleString("en-IN")}</p>
        <p className="text-green-600 font-bold text-sm mb-4">Now: ₹{course.now.toLocaleString("en-IN")}</p>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded transition">
          View Details
        </button>
      </div>
    </div>
  );
}
 
function CoursesSection() {
  return (
    <section className="bg-white py-16" id="courses">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">Explore Our Courses</h2>
          <p className="text-gray-500">
            Upgrade your skills with job-oriented courses —{" "}
            <span className="text-orange-500 font-semibold">Special Fee for First Few Batches Only! 🔥</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
// ─── CTA BANNER ──────────────────────────────────────────────────────────────
 
function CTABanner() {
  return (
    <section className="bg-orange-500 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-white">Enroll Today & Start Your Journey</h3>
          <p className="text-orange-100 text-sm">Build your future with ProEdge.</p>
        </div>
        <Link
          to="/contact"
          className="bg-white text-orange-500 font-bold px-8 py-3 rounded hover:bg-orange-50 transition"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
 
// ─── FOOTER ──────────────────────────────────────────────────────────────────
 
function Footer() {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/contact", label: "Enquiry Form" },
    { to: "/contact", label: "Take Admission" },
    { to: "/", label: "Privacy Policy" },
    { to: "/", label: "Terms & Conditions" },
    { to: "/", label: "Refund Policy" },
  ];
 
  const topCourses = [
    "Power Bi Mastery Track - Internship",
    "SQL Internship Mastery Track",
    "Power Apps Internship Mastery Track",
    "Full Stack Development Internship Mastery Track",
    "Excel Internship Proficiency Track",
    "Prompt Engineering Proficiency Track",
    "Power Bi",
    "SQL",
    "Microsoft Power Platform",
  ];
 
  return (
    <footer className="bg-blue-900 text-blue-200 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <p className="font-extrabold text-white text-xl mb-1">
            <span className="text-orange-400">ProEdge</span>Learning
          </p>
          <p className="text-xs text-blue-300 mb-3">A VisionPro Ventures Private Limited Company</p>
          <p className="text-sm text-blue-300 mb-5">Empowering learners with professional, practical skill development.</p>
          <div className="flex gap-3">
            {["💬", "▶", "𝕏", "📸", "✉"].map((icon, i) => (
              <span key={i} className="text-lg cursor-pointer hover:text-orange-400 transition">{icon}</span>
            ))}
          </div>
        </div>
 
        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">📞 +91 81057 51886</p>
          <p className="text-sm mb-1 font-semibold text-white">🏢 RaghuNandan Complex</p>
          <p className="text-sm text-blue-300 mb-4">
            1074, 1st Floor Simpi Gali, CP Bazar Road<br />
            Sirsi, Uttar Kannada<br />
            Karnataka, 581401
          </p>
          <p className="text-sm">✉ info@proedgelearning.in</p>
        </div>
 
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l, i) => (
              <li key={i}>
                <Link to={l.to} className="text-sm hover:text-orange-400 transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Top Courses */}
        <div>
          <h4 className="text-white font-bold mb-4">Top Courses</h4>
          <ul className="space-y-2">
            {topCourses.map((c, i) => (
              <li key={i}>
                <Link to="/courses" className="text-sm hover:text-orange-400 transition">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-blue-800 pt-6 text-center text-xs text-blue-400">
        © {new Date().getFullYear()} ProEdge Learning — A VisionPro Ventures Private Limited Company. All rights reserved.
      </div>
    </footer>
  );
}
 
// ─── PAGES ───────────────────────────────────────────────────────────────────
 
function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesBar />
      <AboutSection />
      <WhyChooseUs />
      <CoursesSection />
      <CTABanner />
    </>
  );
}
 
function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-900 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold mb-2">About Us</h1>
        <p className="text-blue-200">Learn more about ProEdge Learning</p>
      </div>
      <AboutSection />
      <WhyChooseUs />
      <CTABanner />
    </div>
  );
}
 
function CoursesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-900 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Our Courses</h1>
        <p className="text-blue-200">Upgrade your skills with job-oriented programs</p>
      </div>
      <CoursesSection />
      <CTABanner />
    </div>
  );
}
 
function InternshipPage() {
  const internshipCourses = courses.filter((c) =>
    c.title.toLowerCase().includes("internship")
  );
  return (
    <div className="min-h-screen">
      <div className="bg-blue-900 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Internship Programs</h1>
        <p className="text-blue-200">Get real-world experience with our internship tracks</p>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {internshipCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
 
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
 
  return (
    <div className="min-h-screen">
      <div className="bg-blue-900 text-white py-14 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Contact Us</h1>
        <p className="text-blue-200">We'd love to hear from you</p>
      </div>
 
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-blue-900 mb-6">Get In Touch</h2>
            <div className="space-y-5 text-gray-600">
              <div className="flex gap-3 items-start">
                <span className="text-orange-500 text-xl mt-1">📞</span>
                <div>
                  <p className="font-semibold text-blue-900">Phone</p>
                  <p>+91 81057 51886</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-orange-500 text-xl mt-1">📍</span>
                <div>
                  <p className="font-semibold text-blue-900">Address</p>
                  <p>RaghuNandan Complex, 1074, 1st Floor Simpi Gali,<br />CP Bazar Road, Sirsi, Uttar Kannada,<br />Karnataka, 581401</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-orange-500 text-xl mt-1">✉</span>
                <div>
                  <p className="font-semibold text-blue-900">Email</p>
                  <p>info@proedgelearning.in</p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-bold text-green-700 text-xl mb-2">Message Sent!</h3>
                <p className="text-green-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
 
// ─── APP ROOT ────────────────────────────────────────────────────────────────
 
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}
 
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
 