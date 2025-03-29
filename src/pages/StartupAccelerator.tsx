
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Rocket } from "lucide-react";

const StartupAccelerator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Startup Accelerator</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl">
              Zero to market in 12 weeks - Build a solid foundation for your entrepreneurial journey
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-block p-4 bg-brand-orange-50 rounded-2xl">
                  <Rocket className="h-12 w-12 text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Launch Your Business with Confidence</h2>
                <p className="text-lg text-gray-700 mb-8">
                  The SMMART Startup Accelerator is designed for early-stage entrepreneurs who want to validate their business ideas, develop a minimum viable product, and prepare for market entry. This 12-week program gives you the structure, guidance, and accountability you need to transform your idea into a viable business.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white mb-6">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-500">Next cohort starts July 15, 2024 - Limited to 20 participants</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Program Includes:</h3>
                <ul className="space-y-4">
                  {[
                    "Weekly group coaching sessions (2 hours)",
                    "Business Model Canvas development",
                    "Customer Discovery framework",
                    "MVP creation and validation",
                    "Pitch deck development",
                    "Financial modeling basics",
                    "1:1 strategy sessions (2 per month)",
                    "Access to entrepreneur community",
                    "Resource library and templates"
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
              <h3 className="text-2xl font-bold text-center mb-12">Program Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    phase: "Phase 1: Ideation & Validation",
                    weeks: "Weeks 1-4",
                    description: "Refine your business idea, identify target market, validate customer needs, and create a minimum viable product concept."
                  },
                  {
                    phase: "Phase 2: Development & Testing",
                    weeks: "Weeks 5-8",
                    description: "Build your MVP, test with early users, iterate based on feedback, and develop your go-to-market strategy."
                  },
                  {
                    phase: "Phase 3: Launch Preparation",
                    weeks: "Weeks 9-12",
                    description: "Finalize your business model, create financial projections, develop your pitch, and prepare for market entry."
                  }
                ].map((phase, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="bg-sky-50 text-sky-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{phase.phase}</h4>
                    <p className="text-sm text-orange-500 mb-3">{phase.weeks}</p>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Accelerate Your Startup?</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Join thousands of entrepreneurs who have successfully launched their businesses with SMMART.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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

export default StartupAccelerator;
