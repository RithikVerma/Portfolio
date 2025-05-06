import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Rithik's assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  // Personal data for the chatbot to use
  const personalData = {
    name: "Rithik Verma",
    role: "Software Developer",
    contact: {
      email: "rverma8871@gmail.com",
      phone: "+918770384600",
      github: "https://github.com/RithikVerma",
      portfolio: "https://rithik-portfoli0.vercel.app/"
    },
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Java",
      "C/C++",
      "SQL/MySQL",
      "Firebase",
      "Github"
    ],
    projects: [
      {
        name: "UpSys Company Website",
        description: "Modern company website with responsive layouts and dynamic content management",
        link: "https://upsys.in"
      },
      {
        name: "The Kick Store",
        description: "Dynamic e-commerce web application with clean UI",
        github: "https://github.com/RithikVerma/KickStore"
      },
      {
        name: "Portfolio Website",
        description: "Modern portfolio with smooth transitions and responsive design",
        link: "https://rithik-portfoli0.vercel.app/",
        github: "https://github.com/RithikVerma/Portfolio"
      }
    ]
  };

  const generateResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    // Check for different types of queries
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || lowercaseInput.includes('phone')) {
      return `You can reach Rithik at:
Email: ${personalData.contact.email}
Phone: ${personalData.contact.phone}
Portfolio: ${personalData.contact.portfolio}`;
    }
    
    if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology') || lowercaseInput.includes('tech stack')) {
      return `Rithik's key skills include: ${personalData.skills.join(', ')}`;
    }
    
    if (lowercaseInput.includes('project') || lowercaseInput.includes('work')) {
      return `Here are some of Rithik's notable projects:
1. ${personalData.projects[0].name} - ${personalData.projects[0].description}
2. ${personalData.projects[1].name} - ${personalData.projects[1].description}
3. ${personalData.projects[2].name} - ${personalData.projects[2].description}`;
    }
    
    if (lowercaseInput.includes('github')) {
      return `You can find Rithik's work on GitHub: ${personalData.contact.github}`;
    }

    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
      return `Hello! I'm here to help you learn more about ${personalData.name}. Feel free to ask about his skills, projects, or contact information!`;
    }

    // Default response
    return `I can help you learn more about ${personalData.name}. Try asking about:
- Skills and technologies
- Projects and work experience
- Contact information
- GitHub profile`;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Generate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: generateResponse(input),
        isBot: true
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#64ffda] to-blue-500 p-4">
              <h3 className="text-gray-900 font-medium">Chat with Rithik's Assistant</h3>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot
                        ? 'bg-gray-800 text-white'
                        : 'bg-[#64ffda] text-gray-900'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                />
                <button
                  type="submit"
                  className="bg-[#64ffda] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#64ffda]/80 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#64ffda] to-blue-500 text-gray-900 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot; 