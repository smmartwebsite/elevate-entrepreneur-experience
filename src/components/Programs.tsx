
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Users, Lightbulb, Rocket } from "lucide-react";

const programData = [
  {
    title: "Startup Accelerator",
    description: "Zero to market in 12 weeks. Ideal for early-stage entrepreneurs looking to validate ideas and build a solid foundation.",
    icon: <Rocket className="h-10 w-10 text-brand-orange-500" />,
    features: ["Business Model Canvas", "MVP Development", "Customer Discovery", "Pitch Deck Creation"],
    color: "bg-brand-orange-50"
  },
  {
    title: "Growth Leadership",
    description: "Scale your established business with strategic leadership development and operational excellence.",
    icon: <BarChart className="h-10 w-10 text-brand-blue-600" />,
    features: ["Revenue Growth Strategies", "Team Building", "Operational Excellence", "Strategic Planning"],
    color: "bg-brand-blue-50"
  },
  {
    title: "Executive Coaching",
    description: "One-on-one coaching to overcome challenges, seize opportunities, and achieve your business goals.",
    icon: <Lightbulb className="h-10 w-10 text-purple-600" />,
    features: ["Weekly 1:1 Sessions", "Personalized Growth Plan", "Decision-Making Framework", "Accountability System"],
    color: "bg-purple-50"
  },
  {
    title: "Community Mastermind",
    description: "Join a curated group of entrepreneurs at your level for peer learning and collaborative problem-solving.",
    icon: <Users className="h-10 w-10 text-emerald-600" />,
    features: ["Monthly Group Sessions", "Peer Accountability", "Expert Facilitation", "Exclusive Network"],
    color: "bg-emerald-50"
  }
];

const Programs = () => {
  return (
    <section className="py-20 bg-white" id="programs">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-800 mb-4">
            Programs Tailored to Your Entrepreneurial Stage
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're just starting out or scaling an established business, 
            we have the right program to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programData.map((program, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className={`${program.color} rounded-t-lg`}>
                <div className="mb-4">{program.icon}</div>
                <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                <CardDescription className="text-gray-700">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full group" variant="outline">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-brand-blue-700 hover:bg-brand-blue-800">
            Take Our Assessment Quiz
          </Button>
          <p className="mt-3 text-sm text-gray-500">
            Not sure which program is right for you? Take our quick assessment quiz
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
