import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { CodeBracketIcon, Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import logo from './assets/images/logo.png'
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

  // projects data with descriptions and images
  const projects = [
    {
      title: "FundingPe",
      description: "A comprehensive mobile financial management application built with React Native and TypeScript. Features include modern UI components, cross-platform compatibility, SafeAreaView implementation, and robust navigation system. The app showcases professional purple-themed interface with optimized user experience and scalable architecture.",
      image: "https://placehold.co/600x400/112240/64ffda?text=FundingPe",
      tech: ["React Native", "JavaScript", "Postman", "Firebase", "React Library"],
      liveLink: null,
      githubLink: "https://github.com/RithikVerma/FundingPe",
      category: "Featured Project",
      role: "Mobile App Developer",
      duration: "2024",
      highlights: [
        "Modern Mobile Architecture with React Native and TypeScript",
        "Professional UI Theme with purple (#7B2AC2) interface",
        "Centralized Navigation System with AppNavigator",
        "Scalable Project Structure with modular components",
        "TypeScript Integration for enhanced code reliability"
      ]
    },
    {
      title: "The Kick Store",
      description: "A dynamic and interactive web application built using React, JavaScript, CSS, and HTML. Designed and developed with a focus on seamless user experience and clean, responsive UI. This project showcases front-end development expertise and the ability to create user-friendly, efficient web applications.",
      image: "https://placehold.co/600x400/112240/64ffda?text=%3C/%3E",
      tech: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
      liveLink: null,
      githubLink: "https://github.com/RithikVerma/KickStore",
      category: "Personal Project",
      role: "Full Stack Developer",
      duration: "2024"
    },
    {
      title: "Portfolio Website",
      description: "Crafted a modern portfolio website using React and Tailwind CSS. Features include smooth page transitions, responsive design, interactive UI elements, and optimized performance. Implemented SEO best practices and accessibility standards.",
      image: "https://placehold.co/600x400/112240/64ffda?text=Portfolio",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveLink: "https://rithik-portfoli0.vercel.app/",
      githubLink: "https://github.com/RithikVerma/Portfolio",
      category: "Personal Project",
      role: "Designer & Developer",
      duration: "2024"
    },
    {
      title: "UpSys Company Website",
      description: "Designed and developed a modern company website for UpSys Technologies. Implemented responsive layouts, smooth animations, and optimized performance. The site features dynamic content management, interactive UI elements, and cross-browser compatibility.",
      image: logo,
      tech: ["React", "Tailwind CSS", "Framer Motion", "Firebase"],
      liveLink: "https://upsys.in",
      githubLink: null,
      category: "Featured Project",
      role: "Lead Developer",
      duration: "2023"
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
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black ${
          isLoading ? "" : "pointer-events-none"
        }`}
      >
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <div className="relative">
          {/* Frame */}
          <div className="absolute -inset-8 border-2 border-[#64ffda]/20"></div>
          
          {/* Corner Decorations */}
          <div className="absolute -top-8 -left-8 w-4 h-4 border-l-2 border-t-2 border-[#64ffda]/40"></div>
          <div className="absolute -top-8 -right-8 w-4 h-4 border-r-2 border-t-2 border-[#64ffda]/40"></div>
          <div className="absolute -bottom-8 -left-8 w-4 h-4 border-l-2 border-b-2 border-[#64ffda]/40"></div>
          <div className="absolute -bottom-8 -right-8 w-4 h-4 border-r-2 border-b-2 border-[#64ffda]/40"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            className="relative px-12 py-8"
          >
            <div className="space-y-2 text-center">
              <span className="text-[#64ffda] font-mono text-sm">Hi, my name is</span>
              <h1 className="text-4xl font-bold text-gray-200">Rithik Verma</h1>
              <p className="text-xl text-gray-400">Software Engineer</p>
            </div>
          </motion.div>
        </div>

        {/* Loading Bar */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ 
            scaleX: 1,
            transition: {
              duration: 1.5,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-0 left-0 h-[2px] w-full bg-[#64ffda]/20"
        >
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: {
                duration: 1.5,
                ease: "easeInOut"
              }
            }}
            className="absolute inset-0 bg-[#64ffda]"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
          className="absolute bottom-8 text-[#64ffda] font-mono text-sm tracking-wider"
        >
          LOADING
        </motion.span>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-gray-100 overflow-hidden"
      >
        {/* Navigation */}
        <nav className="fixed w-full z-40 bg-black/80 backdrop-blur-md">
          <div className="relative">
            <div className="absolute inset-0 border-b border-[#64ffda]/10"></div>
            <div className="relative max-w-5xl mx-auto px-8">
              <div className="flex items-center justify-end h-20">
                <div className="hidden md:block">
                  <div className="flex items-center space-x-8">
                    {navItems.map((item, index) => (
                      <Link
                        key={item}
                        to={item.toLowerCase()}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative px-3 py-2 text-gray-400 hover:text-[#64ffda] cursor-pointer font-mono text-sm transition-colors duration-300"
                      >
                        <span className="relative">
                          <span className="text-[#64ffda] mr-2 font-mono text-xs">0{index + 1}.</span>
                          {item}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] group-hover:w-full transition-all duration-300"></span>
                        </span>
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
                    className="p-2 rounded-lg text-gray-400 hover:text-[#64ffda] border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-colors duration-300"
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? (
                      <XMarkIcon className="h-5 w-5" />
                    ) : (
                      <Bars3Icon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-b border-[#64ffda]/10 transition-all duration-300 ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-mono text-gray-400 hover:text-[#64ffda] border border-transparent hover:border-[#64ffda]/20 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-[#64ffda] mr-2 font-mono text-xs">0{index + 1}.</span>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Background Pattern */}
          <div className="fixed inset-0 bg-[linear-gradient(rgba(100,255,218,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,218,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          {/* Content Container */}
          <div className="relative max-w-5xl mx-auto px-8 overflow-hidden">
            {/* Frame Border */}
            <div className="absolute inset-0 border-x-2 border-[#64ffda]/20"></div>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial="initial"
                  animate="animate"
                  className="space-y-8 text-left"
                >
                  <motion.span
                    variants={slideInFromLeft}
                    className="text-[#64ffda] font-mono text-base inline-block"
                  >
                    Hi, my name is
                  </motion.span>

                  <div className="space-y-2">
                    <motion.h1
                      variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: 0.2, duration: 0.8 }
                        }
                      }}
                      className="text-6xl md:text-7xl font-bold text-gray-200 tracking-tight leading-tight"
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
                      className="text-4xl md:text-5xl font-bold text-gray-400 tracking-tight leading-tight"
                    >
                      I build things for the web and mobile.
                    </motion.h2>
                  </div>

                  <motion.p
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.4, duration: 0.8 }
                      }
                    }}
                    className="text-lg text-gray-400 max-w-xl leading-relaxed"
                  >
                    I&apos;m a software engineer specializing in building exceptional digital experiences for web and mobile platforms. 
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
                    className="flex flex-col sm:flex-row gap-6 pt-4"
                  >
                    <Link
                      to="projects"
                      smooth={true}
                      className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg w-fit"
                    >
                      <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg"></div>
                      <div className="absolute inset-0 bg-[#64ffda] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <span className="relative z-10 text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300 font-mono text-sm">
                        Check out my work
                      </span>
                    </Link>

                    <a
                      href="https://drive.google.com/file/d/1LrRtLBXs7K0BDzzC57PYGJVKiUVwato_/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg bg-[#64ffda] hover:bg-transparent transition-colors duration-300 w-fit"
                    >
                      <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg opacity-0 group-hover:opacity-100"></div>
                      <span className="relative z-10 text-[#0a192f] group-hover:text-[#64ffda] transition-colors duration-300 font-mono text-sm">
                        Resume
                      </span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </section>

        {/* About Section */}
            <section id="about" className="py-32">
          <motion.div
            variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
                className="max-w-3xl mx-auto"
          >
                <div className="flex items-center gap-2 mb-12 justify-center">
              <h2 className="text-3xl font-bold text-[#64ffda]">About Me</h2>
                  <div className="h-[1px] flex-grow bg-[#64ffda]/20"></div>
            </div>

                <div className="grid md:grid-cols-3 gap-12 items-center">
                  <div className="md:col-span-2 text-gray-400 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Hello! I&apos;m Rithik, a passionate software developer with a keen interest in creating 
                  exceptional digital experiences. My journey in programming began in 2024, and since then, 
                      I&apos;ve been constantly learning and growing in the field.
                </p>

                    <p className="text-lg leading-relaxed">
                      Currently, I&apos;m focused on building accessible, user-friendly applications 
                  while learning new technologies. I enjoy working with modern frameworks and tools 
                  that help create efficient and scalable solutions.
                </p>

                    <div className="space-y-4">
                      <p className="text-lg font-mono text-[#64ffda]">
                        Technologies I&apos;ve been working with:
                </p>

                      <div className="grid grid-cols-2 gap-4">
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-sm">
                      <span className="text-[#64ffda]">▹</span>
                      JavaScript (ES6+)
                    </li>
                          <li className="flex items-center gap-3 text-sm">
                      <span className="text-[#64ffda]">▹</span>
                      React.js
                    </li>
                          <li className="flex items-center gap-3 text-sm">
                            <span className="text-[#64ffda]">▹</span>
                            React Native
                          </li>
                          <li className="flex items-center gap-3 text-sm">
                      <span className="text-[#64ffda]">▹</span>
                      Tailwind CSS
                    </li>
                        </ul>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-sm">
                      <span className="text-[#64ffda]">▹</span>
                      Java
                    </li>
                          <li className="flex items-center gap-3 text-sm">
                      <span className="text-[#64ffda]">▹</span>
                      C/C++
                    </li>
                          <li className="flex items-center gap-3 text-sm">
                      <span className="text-[#64ffda]">▹</span>
                       SQL/MySQL
                    </li>
                          <li className="flex items-center gap-3 text-sm">
                      <span className="text-[#64ffda]">▹</span>
                      Firebase
                    </li>
                  </ul>
                      </div>
                </div>
              </div>

              <div className="relative group mx-auto">
                <div className="absolute -inset-2 rounded-lg bg-[#64ffda]/20 blur-lg group-hover:bg-[#64ffda]/30 transition-colors duration-500"></div>
                <div className="relative">
                  <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-[#64ffda] bg-[#0a192f]">
                    <img 
                      src={profileImage} 
                      alt="Rithik Verma"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-[#64ffda]/10 hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-64 h-64 border-2 border-[#64ffda] rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
            <section id="skills" className="py-32">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-16 justify-center">
                  <h2 className="text-3xl font-bold text-[#64ffda]">Skills</h2>
                  <div className="h-[1px] flex-grow bg-[#64ffda]/20"></div>
                </div>
            
            <div className="relative overflow-hidden">
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
                      </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
            <section id="projects" className="py-32">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
                className="max-w-4xl mx-auto"
          >
                <div className="flex items-center gap-2 mb-16 justify-center">
              <h2 className="text-3xl font-bold text-[#64ffda]">My Projects</h2>
              <div className="h-[1px] flex-grow bg-[#64ffda]/20"></div>
            </div>

            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={projectCardVariant}
                  viewport={{ once: true }}
                      className={`relative grid md:grid-cols-12 items-center gap-6 group`}
                >
                  {/* Project Image */}
                  <div 
                    className={`md:col-span-7 ${
                      index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Removed gradient border, simplified with single border */}
                      <div className="relative rounded-lg overflow-hidden bg-[#111111] border-2 border-[#64ffda]/20 group-hover:border-[#64ffda]/40 transition-colors duration-500">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full aspect-video object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/20 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-500">
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#64ffda] text-[#0a192f] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                              >
                                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                              </a>
                            )}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#64ffda] text-[#0a192f] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                              >
                                <CodeBracketIcon className="h-5 w-5" />
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
                          index % 2 === 0 ? 'md:order-2 md:pl-4' : 'md:order-1 md:pr-4'
                    }`}
                  >
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="text-[#64ffda] font-mono text-sm tracking-wider">{project.category}</p>
                              <div className="h-[1px] w-12 bg-[#64ffda]/20"></div>
                              <p className="text-gray-400 font-mono text-sm">{project.duration}</p>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-200 group-hover:text-[#64ffda] transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-[#64ffda] font-mono text-sm">{project.role}</p>
                          </div>

                          <div className="relative">
                            <div className="bg-[#111111] p-4 rounded-lg shadow-xl transform group-hover:translate-y-[-2px] transition-transform duration-300 border border-[#64ffda]/10 group-hover:border-[#64ffda]/20">
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {project.description}
                              </p>
                              
                              {project.highlights && (
                                <div className="mt-3 space-y-2">
                                  <h4 className="text-[#64ffda] font-mono text-xs">Key Features:</h4>
                                  <ul className="space-y-1">
                                    {project.highlights.map((highlight, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-gray-400">
                                        <span className="text-[#64ffda] mt-1 text-xs">▹</span>
                                        <span className="text-xs">{highlight}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span 
                                key={tech}
                                className="px-2 py-1 text-xs text-[#64ffda] bg-[#111111] rounded-full border border-[#64ffda]/20 
                                         hover:bg-[#64ffda]/5 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mt-32"
            >
              <a
                href="https://github.com/RithikVerma"
                target="_blank"
                rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-transparent overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center gap-2 text-[#64ffda] group-hover:text-[#0a192f] transition-colors duration-300">
                      <span className="font-mono text-sm">More Projects on GitHub</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg" />
                <div className="absolute inset-0 bg-[#64ffda] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
            <section id="contact" className="py-32 relative">
          <motion.div 
            variants={staggerContainer}
                className="max-w-3xl mx-auto text-center relative z-10"
          >
                <div className="flex items-center gap-2 mb-12 justify-center">
                  <h2 className="text-3xl font-bold text-[#64ffda]">Get In Touch</h2>
                  <div className="h-[1px] flex-grow bg-[#64ffda]/20"></div>
                </div>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
                <div className="flex justify-center space-x-8">
              <a
                    href="mailto:rverma8871@gmail.com"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
              </a>
              <a
                    href="tel:+918770384600"
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
              </a>
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
                href="https://github.com/RithikVerma"
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
            <footer className="relative py-6">
              <div className="absolute top-0 w-screen left-[50%] translate-x-[-50%] h-[2px] bg-[#64ffda]/20"></div>
              <div className="relative z-10 text-center text-gray-400">
          <p>Designed & Built by Rithik Verma</p>
              </div>
        </footer>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default App
