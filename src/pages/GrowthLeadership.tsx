
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, BarChart } from "lucide-react";

const GrowthLeadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Growth Leadership Program</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl">
              Scale your established business with strategic leadership development and operational excellence
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-block p-4 bg-brand-blue-50 rounded-2xl">
                  <BarChart className="h-12 w-12 text-sky-500" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Take Your Business to the Next Level</h2>
                <p className="text-lg text-gray-700 mb-8">
                  The SMMART Growth Leadership Program is designed for established business owners looking to scale their operations, develop leadership capabilities, and implement systems for sustainable growth. This 6-month program provides you with the strategies and tools to break through plateaus and achieve new levels of success.
                </p>
                <Button className="bg-sky-500 hover:bg-sky-600 text-white mb-6">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-500">Applications reviewed on a rolling basis - Limited to 15 businesses per cohort</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Program Includes:</h3>
                <ul className="space-y-4">
                  {[
                    "Monthly in-person mastermind sessions",
                    "Revenue growth strategy development",
                    "Leadership team development framework",
                    "Operational excellence blueprints",
                    "Strategic planning workshops",
                    "Monthly 1:1 coaching sessions",
                    "Financial performance analysis",
                    "Team assessment and optimization",
                    "Exclusive access to growth resources"
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
              <h3 className="text-2xl font-bold text-center mb-12">Program Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Strategic Leadership",
                    description: "Develop your capabilities as a strategic leader who can envision the future, align team efforts, and drive organizational change."
                  },
                  {
                    title: "Scalable Operations",
                    description: "Create systems and processes that enable your business to grow without proportionally increasing costs or management complexity."
                  },
                  {
                    title: "Performance Optimization",
                    description: "Implement metrics and accountability systems that drive consistent improvement in financial and operational performance."
                  }
                ].map((component, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="bg-sky-50 text-sky-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{component.title}</h4>
                    <p className="text-gray-700">{component.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Scale Your Business?</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Join other growth-focused entrepreneurs who have doubled or tripled their business with the SMMART Growth Leadership Program.
              </p>
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GrowthLeadership;
