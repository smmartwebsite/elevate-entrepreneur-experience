
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    score: number;
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "How long have you been in business?",
    options: [
      { id: "a1", text: "I'm still in the idea phase", score: 1 },
      { id: "a2", text: "Less than 1 year", score: 2 },
      { id: "a3", text: "1-3 years", score: 3 },
      { id: "a4", text: "More than 3 years", score: 4 }
    ]
  },
  {
    id: 2,
    text: "What is your current team size?",
    options: [
      { id: "b1", text: "Just me", score: 1 },
      { id: "b2", text: "2-5 people", score: 2 },
      { id: "b3", text: "6-20 people", score: 3 },
      { id: "b4", text: "More than 20 people", score: 4 }
    ]
  },
  {
    id: 3,
    text: "What's your biggest business challenge right now?",
    options: [
      { id: "c1", text: "Finding product-market fit", score: 1 },
      { id: "c2", text: "Getting consistent revenue", score: 2 },
      { id: "c3", text: "Growing and scaling operations", score: 3 },
      { id: "c4", text: "Maintaining growth while improving profitability", score: 4 }
    ]
  },
  {
    id: 4,
    text: "How do you currently make business decisions?",
    options: [
      { id: "d1", text: "Mostly intuition and gut feeling", score: 1 },
      { id: "d2", text: "Some data, but still learning", score: 2 },
      { id: "d3", text: "Data-driven, with established processes", score: 3 },
      { id: "d4", text: "Sophisticated analytics and forecasting", score: 4 }
    ]
  },
  {
    id: 5,
    text: "What are your goals for the next 12 months?",
    options: [
      { id: "e1", text: "Launch and validate my idea", score: 1 },
      { id: "e2", text: "Achieve consistent revenue", score: 2 },
      { id: "e3", text: "Scale my team and operations", score: 3 },
      { id: "e4", text: "Enter new markets or prepare for exit", score: 4 }
    ]
  }
];

const getEntrepreneurStage = (score: number): { title: string; description: string; recommendedProgram: string } => {
  if (score <= 7) {
    return {
      title: "Idea Stage",
      description: "You're in the early stages of your entrepreneurial journey, focusing on validating your ideas and finding product-market fit.",
      recommendedProgram: "Startup Accelerator"
    };
  } else if (score <= 12) {
    return {
      title: "Early Growth",
      description: "Your business is gaining traction with some revenue, but you're still working to establish consistent systems and processes.",
      recommendedProgram: "Growth Foundations"
    };
  } else if (score <= 17) {
    return {
      title: "Scale-Up",
      description: "Your business is proven and profitable. Now you're focused on scaling operations, team, and market reach.",
      recommendedProgram: "Growth Leadership"
    };
  } else {
    return {
      title: "Expansion & Maturity",
      description: "Your business is well-established. You're now looking at expansion into new markets, product lines, or even acquisition strategies.",
      recommendedProgram: "Executive Coaching"
    };
  }
};

const EntrepreneurQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (!selectedOption) {
      toast({
        title: "Please select an option",
        description: "You need to select an answer before proceeding.",
        variant: "destructive"
      });
      return;
    }

    // Save the answer
    setAnswers({
      ...answers,
      [quizQuestions[currentQuestion].id]: selectedOption
    });

    // Move to next question or show results
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = (): number => {
    let totalScore = 0;
    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = quizQuestions.find(q => q.id === parseInt(questionId));
      if (question) {
        const option = question.options.find(o => o.id === optionId);
        if (option) {
          totalScore += option.score;
        }
      }
    });
    return totalScore;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(null);
  };

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  
  return (
    <section className="py-20 bg-white" id="quiz">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-800 mb-4">
            What's Your Entrepreneurial Stage?
          </h2>
          <p className="text-lg text-gray-600">
            Take this quick quiz to discover where you are in your journey and
            which programs are best suited for your current challenges.
          </p>
        </div>

        <Card className="border-2 border-brand-blue-100 shadow-lg">
          {!showResults ? (
            <>
              <CardHeader className="bg-brand-blue-50 border-b border-brand-blue-100">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl text-brand-blue-800">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </CardTitle>
                  <span className="text-sm font-medium text-brand-blue-600">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </CardHeader>
              
              <CardContent className="pt-8 pb-4">
                <h3 className="text-xl font-semibold mb-6">
                  {quizQuestions[currentQuestion].text}
                </h3>
                
                <RadioGroup 
                  value={selectedOption || ""} 
                  onValueChange={handleOptionSelect}
                  className="space-y-4"
                >
                  {quizQuestions[currentQuestion].options.map((option) => (
                    <div 
                      key={option.id}
                      className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 hover:border-brand-blue-300 transition-colors cursor-pointer"
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <RadioGroupItem 
                        value={option.id} 
                        id={option.id} 
                        className="text-brand-blue-600"
                      />
                      <Label 
                        htmlFor={option.id} 
                        className="flex-grow cursor-pointer"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              
              <CardFooter className="flex justify-end pt-2 pb-6">
                <Button 
                  onClick={handleNext}
                  className="bg-brand-blue-700 hover:bg-brand-blue-800"
                >
                  {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              {/* Results Screen */}
              <CardHeader className="text-center bg-brand-blue-50 border-b border-brand-blue-100">
                <CardTitle className="text-2xl text-brand-blue-800">Your Entrepreneurial Profile</CardTitle>
                <CardDescription>Based on your responses, here's where you are in your journey</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-8 pb-6">
                {(() => {
                  const score = calculateScore();
                  const result = getEntrepreneurStage(score);
                  
                  return (
                    <div className="text-center">
                      <div className="inline-block mb-6 p-6 rounded-full bg-brand-orange-100">
                        <div className="rounded-full bg-brand-orange-600 text-white w-24 h-24 flex items-center justify-center">
                          <span className="text-3xl font-bold">{score}/{quizQuestions.length * 4}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-brand-blue-700 mb-3">
                        {result.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6">
                        {result.description}
                      </p>
                      
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
                        <h4 className="font-semibold text-green-800 mb-2">Recommended Program:</h4>
                        <p className="text-green-700">{result.recommendedProgram}</p>
                      </div>
                    </div>
                  );
                })()}
              </CardContent>
              
              <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center pt-2 pb-6">
                <Button 
                  onClick={restartQuiz}
                  variant="outline"
                  className="border-brand-blue-600 text-brand-blue-600"
                >
                  Take Quiz Again
                </Button>
                <Button className="bg-brand-orange-600 hover:bg-brand-orange-700">
                  Explore Recommended Program
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </section>
  );
};

export default EntrepreneurQuiz;
