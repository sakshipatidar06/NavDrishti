import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Plus,
  Menu,
  MoreHorizontal,
  Edit,
  Trash2,
  Share,
  PenTool
} from "lucide-react";
import { motion } from "motion/react";

export function ParentsPage({ onViewChange }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm NavDrishti's AI Career Counselor. I'm here to help you guide your child's educational journey. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: "Career Guidance for Child", timestamp: "Today" },
    { id: 2, title: "Science vs Commerce", timestamp: "Yesterday" },
    { id: 3, title: "Engineering Colleges", timestamp: "2 days ago" },
    { id: 4, title: "Scholarship Information", timestamp: "1 week ago" }
  ]);
  const [currentChatId, setCurrentChatId] = useState(1);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What career is best for my child after 10th?",
    "How to choose between Science and Commerce?", 
    "Which colleges are best for engineering?",
    "What are scholarship opportunities?"
  ];



  const botResponses = {
    "career": "Choosing the right career depends on your child's interests, aptitude, and personality. I recommend starting with our career assessment test to understand their strengths. Would you like me to explain different career paths available after 10th grade?",
    "science": "Science stream opens doors to engineering, medical, and research careers. If your child enjoys mathematics and logical thinking, PCM (Physics, Chemistry, Math) is ideal for engineering. For those interested in biology and healthcare, PCB (Physics, Chemistry, Biology) leads to medical careers.",
    "commerce": "Commerce is excellent for business, finance, and management careers. It offers flexibility and practical skills. Students can pursue CA, CS, CMA, or go for management studies. The scope includes banking, accounting, entrepreneurship, and corporate careers.",
    "engineering": "Top engineering colleges in MP include IIT Indore, MANIT Bhopal, and various NITs. For admission, students need to clear JEE Main and JEE Advanced. I can help you understand the preparation strategy and college selection process.",
    "scholarship": "There are numerous scholarships available in MP including Mukhyamantri Medhavi Vidyarthi Yojana, Post-Matric scholarships for SC/ST/OBC, and Gaon Ki Beti Yojana. I can guide you through the application process for relevant scholarships.",
    "arts": "Arts stream offers diverse opportunities in civil services, journalism, law, design, and social work. Many students underestimate arts, but it leads to fulfilling careers in IAS, media, creative fields, and social development sectors."
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    return "That's a great question! Every child is unique, and the best career path depends on their individual interests, strengths, and aspirations. I recommend having a detailed conversation with your child about their interests. Would you like me to suggest some career assessment techniques or discuss specific career options?";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (currentMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content: generateBotResponse(currentMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setCurrentMessage(question);
    handleSendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startNewChat = () => {
    const newChatId = chatHistory.length + 1;
    setChatHistory(prev => [
      { id: newChatId, title: "New Chat", timestamp: "Now" },
      ...prev
    ]);
    setCurrentChatId(newChatId);
    setMessages([
      {
        id: 1,
        type: "bot",
        content: "Hello! I'm NavDrishti's AI Career Counselor. I'm here to help you guide your child's educational journey. How can I assist you today?",
        timestamp: new Date()
      }
    ]);
  };

  const selectChat = (chatId) => {
    setCurrentChatId(chatId);
    // In a real app, you'd load the messages for this chat
    setMessages([
      {
        id: 1,
        type: "bot",
        content: "Hello! I'm NavDrishti's AI Career Counselor. I'm here to help you guide your child's educational journey. How can I assist you today?",
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="h-screen bg-gray-800 text-white flex overflow-hidden">
      {/* Sidebar */}
      {isSidebarOpen && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
          className="w-80 bg-gray-900 border-r border-gray-700 flex flex-col"
        >
          {/* New Chat Button */}
          <div className="p-4 border-b border-gray-700">
            <Button
              onClick={startNewChat}
              className="w-full bg-transparent border border-gray-600 text-white hover:bg-gray-700 rounded-lg flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New chat</span>
            </Button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => selectChat(chat.id)}
                  className={`group relative flex items-center space-x-3 rounded-lg p-3 cursor-pointer hover:bg-gray-700 transition-colors ${
                    currentChatId === chat.id ? 'bg-gray-700' : ''
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{chat.title}</p>
                    <p className="text-xs text-gray-400">{chat.timestamp}</p>
                  </div>
                  <div className="hidden group-hover:flex items-center space-x-1">
                    <Button size="sm" variant="ghost" className="w-6 h-6 p-0 text-gray-400 hover:text-white">
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="w-6 h-6 p-0 text-gray-400 hover:text-white">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Profile */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white">Parent User</p>
                <p className="text-xs text-gray-400">Career Guidance</p>
              </div>
              <Button size="sm" variant="ghost" className="w-6 h-6 p-0 text-gray-400 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-14 border-b border-gray-700 flex items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Bot className="w-3 h-3 text-white" />
              </div>
              <span className="text-white font-medium">NavDrishti AI</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Share className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 1 ? (
            /* Welcome Screen */
            <div className="h-full flex flex-col items-center justify-center p-8">
              <div className="max-w-2xl text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-semibold text-white">
                  NavDrishti AI Career Counselor
                </h1>
                <p className="text-lg text-gray-300">
                  Get expert guidance to help your child make the right career decisions
                </p>
                
                {/* Quick Start Examples */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {quickQuestions.map((question, index) => (
                    <div
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors border border-gray-600"
                    >
                      <div className="flex items-start space-x-3">
                        <MessageCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-white leading-relaxed">{question}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Chat Messages */
            <div className="max-w-4xl mx-auto w-full">
              <div className="space-y-6 p-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-blue-600' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                    }`}>
                      {message.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-white">
                          {message.type === 'user' ? 'You' : 'NavDrishti AI'}
                        </span>
                        <span className="text-xs text-gray-400">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-white">NavDrishti AI</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Message NavDrishti AI..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 resize-none max-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={1}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!currentMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              NavDrishti AI can make mistakes. Consider checking important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}