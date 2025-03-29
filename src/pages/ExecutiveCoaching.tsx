
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Lightbulb } from "lucide-react";

const ExecutiveCoaching = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Executive Coaching</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl">
              One-on-one coaching to overcome challenges, seize opportunities, and achieve your business goals
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-block p-4 bg-purple-50 rounded-2xl">
                  <Lightbulb className="h-12 w-12 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Personalized Guidance for Exceptional Results</h2>
                <p className="text-lg text-gray-700 mb-8">
                  SMMART Executive Coaching provides personalized guidance tailored to your specific business challenges and goals. Our experienced coaches work with you one-on-one to accelerate your personal growth, enhance your decision-making capabilities, and help you achieve breakthrough results.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white mb-6">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-500">Flexible coaching packages available - Start anytime</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Coaching Framework:</h3>
                <ul className="space-y-4">
                  {[
                    "Weekly 1:1 coaching sessions (60-90 minutes)",
                    "Personalized growth and development plan",
                    "Decision-making frameworks and tools",
                    "Strategic challenge resolution",
                    "Accountability system implementation",
                    "Leadership capability enhancement",
                    "Work-life balance optimization",
                    "Strengths assessment and development",
                    "Access to exclusive resources and tools"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-12">Our Coaching Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    title: "Assess",
                    description: "We begin by understanding your current situation, challenges, strengths, and goals through in-depth assessment."
                  },
                  {
                    title: "Design",
                    description: "Together, we create a personalized coaching plan focused on your specific needs and desired outcomes."
                  },
                  {
                    title: "Implement",
                    description: "Through regular sessions, we work on implementing solutions, developing capabilities, and overcoming obstacles."
                  },
                  {
                    title: "Evolve",
                    description: "We continuously measure progress, adjust approaches as needed, and celebrate wins while preparing for new challenges."
                  }
                ].map((approach, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="bg-purple-50 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{approach.title}</h4>
                    <p className="text-gray-700">{approach.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-6">Ready for Breakthrough Results?</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Take the first step toward transforming your business and leadership capabilities with SMMART Executive Coaching.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExecutiveCoaching;
