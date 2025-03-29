
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, User } from "lucide-react";

interface Message {
  id: string;
  role: "system" | "user";
  content: string;
  options?: string[];
}

interface ProgramRecommendation {
  title: string;
  description: string;
  keyFeatures: string[];
  link: string;
}

const ProgramFinder = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "system",
      content: "Hi there! I'm your Growth Catalyst assistant. I can help you find the perfect program for your entrepreneurial journey. Would you like to get started?",
      options: ["Yes, help me find a program", "I'll explore on my own"]
    }
  ]);
  
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState<{[key: string]: string}>({});
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const chatSteps = [
    {
      question: "Great! Let's start with where you are in your entrepreneurial journey. Which best describes you?",
      options: ["I have an idea but haven't started yet", "I recently started my business (0-2 years)", "I have an established business (2+ years)", "I'm looking to scale significantly"]
    },
    {
      question: "What's your primary goal right now?",
      options: ["Validate my idea and create a business plan", "Get consistent revenue and customers", "Improve operations and profitability", "Scale and potentially raise funding"]
    },
    {
      question: "What's your team size?",
      options: ["Just me", "2-5 people", "6-20 people", "More than 20 people"]
    },
    {
      question: "What industry are you in?",
      options: ["Technology/SaaS", "Retail/E-commerce", "Professional Services", "Manufacturing", "Other"]
    }
  ];

  const handleOptionSelect = (option: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: option
    };
    
    setMessages([...messages, newUserMessage]);
    
    // Simulate typing indicator
    setIsTyping(true);
    
    // Handle first welcome response
    if (currentStep === 0 && option === "I'll explore on my own") {
      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          ...messages, 
          newUserMessage, 
          {
            id: `system-${Date.now()}`,
            role: "system",
            content: "No problem! Feel free to browse our programs at your own pace. If you need assistance later, I'll be here to help."
          }
        ]);
      }, 1000);
      return;
    }
    
    // Store user response
    if (currentStep < chatSteps.length) {
      setUserResponses({
        ...userResponses,
        [`step${currentStep}`]: option
      });
    }
    
    // Prepare next question or recommendation
    setTimeout(() => {
      setIsTyping(false);
      
      if (currentStep < chatSteps.length) {
        const newSystemMessage: Message = {
          id: `system-${Date.now()}`,
          role: "system",
          content: chatSteps[currentStep].question,
          options: chatSteps[currentStep].options
        };
        
        setMessages([...messages, newUserMessage, newSystemMessage]);
        setCurrentStep(currentStep + 1);
      } else {
        // Final message before recommendation
        setMessages([
          ...messages, 
          newUserMessage, 
          {
            id: `system-${Date.now()}`,
            role: "system",
            content: "Thanks for sharing that information! Based on your answers, I have a personalized program recommendation for you."
          }
        ]);
        
        // Show recommendation after a brief delay
        setTimeout(() => {
          setShowRecommendation(true);
        }, 1000);
      }
    }, 1500);
  };
  
  const getRecommendation = (): ProgramRecommendation => {
    // This is a simplified recommendation logic
    // In a real application, this would be more sophisticated
    const journey = userResponses.step0 || "";
    const goal = userResponses.step1 || "";
    
    if (journey.includes("idea") || journey.includes("haven't started")) {
      return {
        title: "Startup Accelerator Program",
        description: "Our 12-week intensive program designed for entrepreneurs at the idea or early startup stage. We'll help you validate your concept, build an MVP, and develop a go-to-market strategy.",
        keyFeatures: [
          "Business model canvas development",
          "Market validation techniques",
          "Minimum viable product planning",
          "Pitch deck creation",
          "Weekly group coaching sessions"
        ],
        link: "#startup-accelerator"
      };
    } else if (journey.includes("recently started")) {
      return {
        title: "Growth Foundations Program",
        description: "A 6-month program focused on establishing consistent revenue streams and creating scalable processes for your young business.",
        keyFeatures: [
          "Marketing and sales funnel optimization",
          "Customer retention strategies",
          "Financial management essentials",
          "Basic team building and leadership",
          "Bi-weekly 1:1 coaching"
        ],
        link: "#growth-foundations"
      };
    } else if (journey.includes("established")) {
      return {
        title: "Business Optimization Program",
        description: "A strategic program for established businesses looking to improve operations, increase profitability, and prepare for the next growth phase.",
        keyFeatures: [
          "Operational efficiency analysis",
          "Profit margin optimization",
          "Team development and delegation",
          "Strategic planning and execution",
          "Monthly mastermind meetings"
        ],
        link: "#business-optimization"
      };
    } else {
      return {
        title: "Scale & Funding Program",
        description: "Our premium program for entrepreneurs ready to significantly scale their business, potentially raise capital, or prepare for acquisition.",
        keyFeatures: [
          "Growth strategy development",
          "Investor readiness preparation",
          "Leadership team building",
          "Financial modeling and forecasting",
          "Executive coaching and advisory"
        ],
        link: "#scale-funding"
      };
    }
  };

  const restartChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "system",
        content: "Hi there! I'm your Growth Catalyst assistant. I can help you find the perfect program for your entrepreneurial journey. Would you like to get started?",
        options: ["Yes, help me find a program", "I'll explore on my own"]
      }
    ]);
    setCurrentStep(0);
    setUserResponses({});
    setShowRecommendation(false);
  };
  
  return (
    <section className="py-20 bg-gray-50" id="program-finder">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-800 mb-4">
            Find Your Perfect Program
          </h2>
          <p className="text-lg text-gray-600">
            Answer a few simple questions about your business, and we'll recommend 
            the best program to help you achieve your goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-brand-blue-100 shadow-lg">
            <CardContent className="p-0">
              {/* Chat Header */}
              <div className="bg-brand-blue-700 text-white p-4 rounded-t-lg flex items-center">
                <MessageSquare className="h-6 w-6 mr-3" />
                <h3 className="font-semibold">Program Advisor</h3>
              </div>
              
              {/* Chat Messages */}
              <div className="h-[400px] overflow-y-auto p-4 flex flex-col space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user' 
                          ? 'bg-brand-blue-600 text-white rounded-tr-none' 
                          : 'bg-gray-100 text-gray-800 rounded-tl-none'
                      }`}
                    >
                      {message.role === 'system' && (
                        <div className="w-8 h-8 rounded-full bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center mb-2">
                          <MessageSquare className="h-4 w-4" />
                        </div>
                      )}
                      <p>{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none max-w-[80%] p-3">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Recommendation card */}
                {showRecommendation && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-brand-blue-200 rounded-lg max-w-[90%] p-4 shadow-md">
                      <h4 className="font-bold text-lg text-brand-blue-700 mb-2">
                        {getRecommendation().title}
                      </h4>
                      <p className="text-gray-700 mb-3">
                        {getRecommendation().description}
                      </p>
                      <div className="mb-4">
                        <h5 className="font-semibold text-sm text-gray-600 mb-2">Key Features:</h5>
                        <ul className="pl-5 space-y-1">
                          {getRecommendation().keyFeatures.map((feature, idx) => (
                            <li key={idx} className="text-gray-700 text-sm list-disc">{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={restartChat}
                          className="text-brand-blue-600 border-brand-blue-200"
                        >
                          Start Again
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-brand-orange-600 hover:bg-brand-orange-700"
                          asChild
                        >
                          <a href={getRecommendation().link}>
                            Learn More <ArrowRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Options Buttons */}
              {!showRecommendation && messages[messages.length - 1].options && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {messages[messages.length - 1].options?.map((option, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="border-brand-blue-200 text-brand-blue-700 hover:bg-brand-blue-50"
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramFinder;
