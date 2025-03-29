
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users } from "lucide-react";

const CommunityMastermind = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Mastermind</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl">
              Join a curated group of entrepreneurs at your level for peer learning and collaborative problem-solving
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-block p-4 bg-emerald-50 rounded-2xl">
                  <Users className="h-12 w-12 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Grow Together with Peer Support</h2>
                <p className="text-lg text-gray-700 mb-8">
                  The SMMART Community Mastermind brings together entrepreneurs at similar growth stages to share challenges, insights, and opportunities. Through facilitated group sessions and structured peer accountability, you'll gain diverse perspectives and build a powerful support network of fellow entrepreneurs.
                </p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white mb-6">
                  Join the Community <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-sm text-gray-500">New groups form quarterly - Applications now open</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Mastermind Benefits:</h3>
                <ul className="space-y-4">
                  {[
                    "Monthly group mastermind sessions",
                    "Peer accountability partnerships",
                    "Expert facilitation and guidance",
                    "Exclusive entrepreneur network",
                    "Collaborative problem-solving",
                    "Shared resources and connections",
                    "Industry-specific insights",
                    "Celebration of wins and milestones",
                    "Private online community access"
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
              <h3 className="text-2xl font-bold text-center mb-12">How Our Mastermind Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Curated Groups",
                    description: "We carefully match you with 6-8 entrepreneurs at similar business stages who can relate to your challenges and contribute meaningful insights."
                  },
                  {
                    title: "Structured Sessions",
                    description: "Our monthly mastermind sessions follow a proven format that includes wins celebration, hot seat problem-solving, and accountability setting."
                  },
                  {
                    title: "Ongoing Support",
                    description: "Between sessions, you'll have access to our private community platform for continued discussion, resource sharing, and peer support."
                  }
                ].map((component, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="bg-emerald-50 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{component.title}</h4>
                    <p className="text-gray-700">{component.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Join a Supportive Community?</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Surround yourself with motivated, like-minded entrepreneurs who will support your growth and challenge you to reach new heights.
              </p>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
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

export default CommunityMastermind;
