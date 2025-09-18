import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  BookOpen, 
  Target, 
  TrendingUp,
  MessageSquare,
  Clock,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

export function ChatbotInterface({ onViewChange }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm CareerGuide AI, your personal career assistant. I can help you with career guidance, course recommendations, scholarship information, and answer any questions about your professional journey. How can I assist you today?",
      timestamp: new Date(Date.now() - 30000)
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "What career is best for me?",
    "Tell me about Data Science courses",
    "Government job preparation guidance",
    "Which programming language should I learn?",
    "How to prepare for tech interviews?",
    "Available scholarships for engineering students"
  ];

  const botResponses = {
    "career": "Based on your profile and assessment results, I recommend considering Software Engineering, Data Science, or Product Management. These fields align well with your technical skills and problem-solving abilities. Would you like me to create a detailed roadmap for any of these careers?",
    "data science": "Data Science is an excellent field! Here's what you need to know:\n\n🔹 **Required Skills**: Python, Statistics, Machine Learning, SQL\n🔹 **Average Salary**: ₹10-30 LPA\n🔹 **Growth**: Very High demand\n🔹 **Best Courses**: \n   • Python for Data Science (Coursera)\n   • Machine Learning Course (Andrew Ng)\n   • Statistics for Data Science\n\nWould you like me to show you a detailed roadmap?",
    "government job": "Great choice! Government jobs offer stability and good benefits. Here's your preparation guide:\n\n🔹 **Popular Exams**: UPSC, SSC, Banking, Railway\n🔹 **Preparation Timeline**: 12-18 months\n🔹 **Key Subjects**: General Studies, Current Affairs, English, Quantitative Aptitude\n🔹 **Recommended Resources**:\n   • NCERT Books (Class 6-12)\n   • Previous Year Papers\n   • Current Affairs Magazines\n\nWhich specific exam are you interested in?",
    "programming": "Excellent question! Here are the best programming languages to start with:\n\n🔹 **For Beginners**: Python (easy syntax, versatile)\n🔹 **For Web Development**: JavaScript, HTML/CSS\n🔹 **For Mobile Apps**: Flutter (Dart), React Native\n🔹 **For Data Science**: Python, R\n🔹 **For System Programming**: C++, Java\n\nI recommend starting with Python - it's beginner-friendly and has great job prospects. Would you like a learning roadmap?",
    "interview": "Tech interview preparation is crucial! Here's your comprehensive guide:\n\n🔹 **Technical Skills**:\n   • Data Structures & Algorithms\n   • System Design basics\n   • Language-specific concepts\n\n🔹 **Practice Platforms**:\n   • LeetCode, HackerRank\n   • InterviewBit, GeeksforGeeks\n\n🔹 **Soft Skills**:\n   • Communication\n   • Problem-solving approach\n   • Team collaboration examples\n\nWould you like specific preparation resources for your target companies?",
    "scholarships": "Here are some major scholarships available:\n\n🔹 **For Engineering Students**:\n   • JEE Main/Advanced (Merit-based)\n   • State Government Scholarships\n   • Private Company Scholarships (TCS, Infosys)\n\n🔹 **For Minorities**:\n   • Maulana Azad National Fellowship\n   • Post Matric Scholarship\n\n🔹 **General Merit**:\n   • National Scholarship Portal\n   • INSPIRE Scholarship (Science students)\n\nNeed help with application process for any specific scholarship?"
  };

  const getResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('best for me')) {
      return botResponses.career;
    } else if (lowerMessage.includes('data science') || lowerMessage.includes('machine learning') || lowerMessage.includes('analytics')) {
      return botResponses["data science"];
    } else if (lowerMessage.includes('government') || lowerMessage.includes('upsc') || lowerMessage.includes('ssc')) {
      return botResponses["government job"];
    } else if (lowerMessage.includes('programming') || lowerMessage.includes('language') || lowerMessage.includes('coding')) {
      return botResponses.programming;
    } else if (lowerMessage.includes('interview') || lowerMessage.includes('preparation') || lowerMessage.includes('tech interview')) {
      return botResponses.interview;
    } else if (lowerMessage.includes('scholarship') || lowerMessage.includes('financial aid') || lowerMessage.includes('funding')) {
      return botResponses.scholarships;
    } else {
      return "I understand you're asking about career guidance. Let me help you with that! Could you be more specific about what aspect you'd like to know about? For example:\n\n• Career recommendations based on your skills\n• Course suggestions for specific fields\n• Interview preparation tips\n• Scholarship opportunities\n• Government job guidance\n\nFeel free to ask me anything related to your career journey!";
    }
  };

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputMessage.trim();
    if (!messageToSend) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user' as const,
      content: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate API delay and add bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot' as const,
        content: getResponse(messageToSend),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI Career Assistant
        </h1>
        <p className="text-gray-600">
          Get instant answers to your career questions, course recommendations, and guidance
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-600" />
                CareerGuide AI
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Online
                </Badge>
              </CardTitle>
              <CardDescription>
                Your 24/7 career guidance assistant
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                      {message.type === 'bot' && (
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-blue-600" />
                        </div>
                      )}
                      
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-last' : ''}`}>
                        <div className={`p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="whitespace-pre-wrap">{message.content}</div>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          {message.type === 'bot' && (
                            <div className="flex gap-1 ml-2">
                              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                <ThumbsUp className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                <ThumbsDown className="w-3 h-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>

                      {message.type === 'user' && (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="border-t pt-4 mt-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me about careers, courses, or any guidance..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={() => handleSendMessage()} disabled={!inputMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onViewChange('assessment')}
              >
                <Target className="w-4 h-4 mr-2" />
                Take Career Assessment
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onViewChange('roadmap')}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                View Career Roadmaps
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => onViewChange('dashboard')}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Dashboard Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Suggested Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Suggested Questions
              </CardTitle>
              <CardDescription>
                Click to ask these common questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start h-auto p-3"
                  onClick={() => handleSendMessage(question)}
                >
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Chat Features */}
          <Card>
            <CardHeader>
              <CardTitle>AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Career Recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Course Suggestions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Interview Preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Scholarship Information</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Government Job Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Skill Development Plans</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help & Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>If the AI can't answer your question, you can:</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Contact our career counselors</li>
                <li>• Join our community forums</li>
                <li>• Schedule a 1-on-1 session</li>
                <li>• Browse our knowledge base</li>
              </ul>
              <Button size="sm" variant="outline" className="w-full mt-3">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}