import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon, ArrowDownIcon, Bars3Icon, XMarkIcon, PaintBrushIcon, CloudIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import logo from './assets/images/logo.png'
import Chatbot from './components/Chatbot'
import { motion } from 'framer-motion'
import profileImage from './assets/RV.jpeg'
import tailwindIcon from './assets/icons8.png'

// Add these animation variants at the top of the App function
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Add this animation variant near the top with other variants
const projectCardVariant = {
  initial: { 
    opacity: 0,
    y: 20
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Add this new animation variant at the top with other variants
const slideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Add this new animation variant with other variants
const loadingVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isMenuOpen])

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Simulate loading time (you can remove setTimeout if you have actual loading tasks)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  // Update the projects data with better descriptions and images
  const projects = [
    {
      title: "UpSys Company Website",
      description: "Designed and developed a modern company website for UpSys Technologies. Implemented responsive layouts, smooth animations, and optimized performance. The site features dynamic content management, interactive UI elements, and cross-browser compatibility.",
      image: logo,
      tech: ["React", "Tailwind CSS", "Framer Motion", "Firebase"],
      liveLink: "https://upsys.in",
      githubLink: null,
      category: "Featured Project"
    },
    {
      title: "The Kick Store",
      description: "A dynamic and interactive web application built using React, JavaScript, CSS, and HTML. Designed and developed with a focus on seamless user experience and clean, responsive UI. This project showcases front-end development expertise and the ability to create user-friendly, efficient web applications.",
      image: "https://placehold.co/600x400/112240/64ffda?text=KickStore+%3C/%3E",
      tech: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
      liveLink: null,
      githubLink: "https://github.com/RithikVerma/KickStore",
      category: "Personal Project"
    },
    {
      title: "Portfolio Website",
      description: "Crafted a modern portfolio website using React and Tailwind CSS. Features include smooth page transitions, responsive design, interactive UI elements, and optimized performance. Implemented SEO best practices and accessibility standards.",
      image: "https://placehold.co/600x400/112240/64ffda?text=Portfolio",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveLink: "https://rithik-portfoli0.vercel.app/",
      githubLink: "https://github.com/RithikVerma/Portfolio",
      category: "Personal Project"
    }
  ]

  // Update the skills data
  const skills = [
    {
      name: 'Frontend Development',
      icon: CodeBracketIcon,
      description: 'Expert in React.js, Next.js, TypeScript, and modern CSS frameworks. Focused on creating responsive, accessible, and performant user interfaces.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Backend Development',
      icon: CommandLineIcon,
      description: 'Proficient in , Java, and SQL. Experienced in designing and managing databases.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Tools & DevOps',
      icon: CpuChipIcon,
      description: 'Skilled in Git, Github and cloud platforms (AWS, Firebase). Strong focus on automation and deployment optimization.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Cloud Services',
      icon: CloudIcon,
      description: 'Experience with  Firebase. Implemented scalable cloud solutions and managed cloud infrastructure.',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Loading Screen */}
      <motion.div
        variants={loadingVariant}
        initial="hidden"
        animate={isLoading ? "visible" : "exit"}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black ${
          isLoading ? "" : "pointer-events-none"
        }`}
      >
        <div className="relative">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.2, 1],
              opacity: 1
            }}
            transition={{
              duration: 1,
              times: [0, 0.6, 1],
              ease: "easeOut"
            }}
            className="text-5xl font-bold relative z-10"
          >
            <span className="bg-gradient-to-r from-[#64ffda] via-blue-500 to-purple-500 bg-clip-text text-transparent">
              RV
            </span>
          </motion.div>

          {/* Animated border */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            className="absolute -inset-4 bg-gradient-to-r from-[#64ffda] via-blue-500 to-purple-500 rounded-full blur-lg opacity-20"
          />
        </div>

        {/* Loading text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-[20%] text-[#64ffda] font-mono text-sm"
        >
          Building something awesome...
        </motion.span>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-gray-100"
      >
        {/* Navigation */}
        <nav className="fixed w-full z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800/50">
          <div className="relative">
            {/* Nav Background */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"></div>

            {/* Nav Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="relative group">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
                    RV
                  </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                  <div className="flex space-x-2">
                    {navItems.map((item) => (
                      <Link
                        key={item}
                        to={item.toLowerCase()}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="px-4 py-2 text-gray-300 hover:text-white rounded-lg cursor-pointer font-medium"
                      >
                        <span className="relative z-10">{item}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsMenuOpen(!isMenuOpen)
                    }}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    {isMenuOpen ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
          
          {/* Animated background grid (optional) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial="initial"
              animate="animate"
              className="text-left space-y-6"
            >
              <motion.span
                variants={slideInFromLeft}
                className="text-[#64ffda] font-mono text-lg inline-block"
              >
                Hi, my name is
              </motion.span>

              <motion.h1
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.2, duration: 0.8 }
                  }
                }}
                className="text-5xl md:text-7xl font-bold text-gray-200"
              >
                Rithik Verma.
              </motion.h1>

              <motion.h2
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.3, duration: 0.8 }
                  }
                }}
                className="text-4xl md:text-6xl font-bold text-gray-400"
              >
                I build things for the web.
              </motion.h2>

              <motion.p
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4, duration: 0.8 }
                  }
                }}
                className="text-xl text-gray-400 max-w-2xl"
              >
                I&apos;m a software engineer specializing in building exceptional digital experiences. 
                Currently, I&apos;m focused on building accessible, human-centered products.
              </motion.p>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5, duration: 0.8 }
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <Link
                  to="projects"
                  smooth={true}
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg"></div>
                  <div className="absolute inset-0 bg-[#64ffda] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <span className="relative z-10 text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300 font-mono">
                    Check out my work
                  </span>
                </Link>

                <a
                  href="https://drive.google.com/file/d/1LrRtLBXs7K0BDzzC57PYGJVKiUVwato_/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-lg bg-[#64ffda] hover:bg-transparent transition-colors duration-300"
                >
                  <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg opacity-0 group-hover:opacity-100"></div>
                  <span className="relative z-10 text-[#0a192f] group-hover:text-[#64ffda] transition-colors duration-300 font-mono">
                    Resume
                  </span>
                </a>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  y: [0, 10, 0] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
              >
                <div className="w-[2px] h-8 bg-[#64ffda]/50 rounded-full"></div>
                <span className="text-[#64ffda]/50 text-sm font-mono">Scroll Down</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-black/30">
          <motion.div
            variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-3xl font-bold text-[#64ffda]">About Me</h2>
              <div className="h-[1px] w-32 bg-[#64ffda]/20"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2 text-gray-400 space-y-4">
                <p>
                  Hello! I'm Rithik, a passionate software developer with a keen interest in creating 
                  exceptional digital experiences. My journey in programming began in 2024, and since then, 
                  I've been constantly learning and growing in the field.
                </p>

                <p>
                  Currently, I'm focused on building accessible, user-friendly applications 
                  while learning new technologies. I enjoy working with modern frameworks and tools 
                  that help create efficient and scalable solutions.
                </p>

                <p>
                  Here are a few technologies I've been working with recently:
                </p>

                <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      JavaScript (ES6+)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      React.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Java
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      C/C++
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                       SQL/MySQL
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Firebase
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Github
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group mx-auto">
                <div className="absolute -inset-2 rounded-lg bg-[#64ffda]/20 blur-lg group-hover:bg-[#64ffda]/30 transition-colors duration-500"></div>
                <div className="relative">
                  {/* Profile Image Container */}
                  <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-[#64ffda] bg-[#0a192f]">
                    <img 
                      src={profileImage} 
                      alt="Rithik Verma"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#64ffda]/10 hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  {/* Decorative Border */}
                  <div className="absolute -right-4 -bottom-4 w-64 h-64 border-2 border-[#64ffda] rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#64ffda]">
              Skills
            </h2>
            
            <div className="relative overflow-hidden">
              {/* Single row with alternating movement */}
              <div className="flex animate-scroll-alternate hover:pause">
                <div className="flex space-x-24 px-8">
                  {[
                    {
                      name: "React",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    },
                    {
                      name: "React Native",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    },
                    {
                      name: "HTML",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    },
                    {
                      name: "JavaScript",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    },
                    {
                      name: "Tailwind CSS",
                      icon: tailwindIcon
                    },
                    {
                      name: "Java",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    },
                    {
                      name: "C",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    },
                    {
                      name: "C++",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    },
                    {
                      name: "GitHub",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                      invert: true
                    },
                    {
                      name: "Firebase",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    },
                    {
                      name: "Vite.js",
                      icon: "https://vitejs.dev/logo.svg"
                    },
                    {
                      name: "MySQL",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    }
                  ].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4 min-w-[100px] group">
                      <div className="w-20 h-20 flex items-center justify-center bg-[#111111] rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#64ffda]/20">
                        <img 
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-12 h-12 group-hover:w-14 group-hover:h-14 transition-all duration-300 ${skill.invert ? 'dark:invert' : ''}`}
                        />
                      </div>
                      <span className="text-gray-400 group-hover:text-[#64ffda] transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
                {/* Duplicate for seamless scrolling */}
                <div className="flex space-x-24 px-8" aria-hidden="true">
                  {[
                    {
                      name: "React",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    },
                    {
                      name: "React Native",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    },
                    {
                      name: "HTML",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    },
                    {
                      name: "JavaScript",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    },
                    {
                      name: "Tailwind CSS",
                      icon: tailwindIcon
                    },
                    {
                      name: "Java",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    },
                    {
                      name: "C",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    },
                    {
                      name: "C++",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    },
                    {
                      name: "GitHub",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                      invert: true
                    },
                    {
                      name: "Firebase",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    },
                    {
                      name: "Vite.js",
                      icon: "https://vitejs.dev/logo.svg"
                    },
                    {
                      name: "MySQL",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    }
                  ].map((skill, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4 min-w-[100px] group">
                      <div className="w-20 h-20 flex items-center justify-center bg-[#111111] rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#64ffda]/20">
                        <img 
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-12 h-12 group-hover:w-14 group-hover:h-14 transition-all duration-300 ${skill.invert ? 'dark:invert' : ''}`}
                        />
                      </div>
                      <span className="text-gray-400 group-hover:text-[#64ffda] transition-colors">{skill.name}</span>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-black/30">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-16">
              <h2 className="text-3xl font-bold text-[#64ffda]">My Projects</h2>
              <div className="h-[1px] flex-grow bg-[#64ffda]/20"></div>
            </div>

            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={projectCardVariant}
                  viewport={{ once: true }}
                  className={`relative grid md:grid-cols-12 items-center gap-8 group`}
                >
                  {/* Project Image */}
                  <div 
                    className={`md:col-span-7 ${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Gradient Border */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64ffda] to-purple-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
                      
                      {/* Image Container */}
                      <div className="relative rounded-lg overflow-hidden bg-[#111111]">
                        <div className="absolute inset-0 bg-[#64ffda]/5"></div>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full aspect-video object-cover object-center transform group-hover:scale-105 transition-transform duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#0a192f]/80 group-hover:bg-transparent backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500">
                          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-[#64ffda] text-[#0a192f] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                            >
                              <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                            </a>
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[#64ffda] text-[#0a192f] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                              >
                                <CodeBracketIcon className="h-6 w-6" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div 
                    className={`md:col-span-5 ${
                      index % 2 === 0 ? 'md:order-2 md:pl-6' : 'md:order-1 md:pr-6'
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-[#64ffda] font-mono text-sm tracking-wider">{project.category}</p>
                        <h3 className="text-3xl font-bold text-gray-200 group-hover:text-[#64ffda] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      {/* Project Description */}
                      <div className="relative">
                        <div className="bg-[#111111] p-6 rounded-lg shadow-xl transform group-hover:translate-y-[-4px] transition-transform duration-300 border border-gray-700/50 group-hover:border-[#64ffda]/20">
                          <p className="text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-sm text-[#64ffda] bg-[#111111] rounded-full border border-[#64ffda]/20 
                                     hover:bg-[#64ffda]/10 transition-colors duration-300 shadow-sm shadow-[#64ffda]/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Mobile Links */}
                      <div className="flex items-center gap-6 md:hidden">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#64ffda] hover:text-white transition-colors group"
                        >
                          <span className="font-mono text-sm">Visit Site</span>
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#64ffda] hover:text-white transition-colors group"
                          >
                            <span className="font-mono text-sm">Source Code</span>
                            <CodeBracketIcon className="h-4 w-4 transform group-hover:rotate-12 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mt-32"
            >
              <a
                href="https://github.com/RithikVerma"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center gap-2 text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300">
                  <span className="font-mono">More Projects on GitHub</span>
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg" />
                <div className="absolute inset-0 bg-[#64ffda] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <motion.div 
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              <a
                href="mailto:rverma8871@gamil.com"
                className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">Email</h3>
                <p className="text-gray-400">rverma8871@gmail.com</p>
                {/* <p className="text-gray-400">rithiverma877@gmail.com</p> */}
              </a>
              <a
                href="tel:+1234567890"
                className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">Phone</h3>
                <p className="text-gray-400">+918770384600</p>
                {/* <p className="text-gray-400">+919977869227</p> */}
              </a>
            </motion.div>
            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="https://linkedin.com/in/rithik-verma-508b04216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
          <p>Designed & Built by Rithik Verma</p>
        </footer>

        {/* Chatbot */}
        <Chatbot />
      </motion.div>
    </>
  )
}

export default App
