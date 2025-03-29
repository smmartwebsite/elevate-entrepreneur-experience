
import React from "react";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import SuccessCounter from "@/components/SuccessCounter";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-brand-blue-800 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Growth Catalyst</h1>
            <p className="text-xl md:text-2xl text-brand-blue-100 max-w-3xl">
              Over two decades of transforming businesses and empowering entrepreneurs
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Growth Catalyst, we believe that entrepreneurship is a powerful force for positive change. Our mission is to equip business owners with the knowledge, skills, and mindset needed to build sustainable, profitable enterprises that create value for their communities.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Since our founding in 2000, we've been dedicated to making high-quality business education and coaching accessible to entrepreneurs at all stages – from startups to established businesses looking to scale.
                </p>
              </div>
              <div className="bg-brand-blue-50 p-8 rounded-xl border border-brand-blue-100">
                <h3 className="text-2xl font-semibold text-brand-blue-700 mb-4">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand-orange-500 text-white mr-3 mt-1 flex-shrink-0">1</span>
                    <div>
                      <span className="font-semibold text-brand-blue-800">Excellence</span>
                      <p className="text-gray-600">We are committed to delivering the highest quality of training and support.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand-orange-500 text-white mr-3 mt-1 flex-shrink-0">2</span>
                    <div>
                      <span className="font-semibold text-brand-blue-800">Innovation</span>
                      <p className="text-gray-600">We constantly evolve our programs to stay ahead of market trends.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand-orange-500 text-white mr-3 mt-1 flex-shrink-0">3</span>
                    <div>
                      <span className="font-semibold text-brand-blue-800">Impact</span>
                      <p className="text-gray-600">We measure our success by the success of the entrepreneurs we serve.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-brand-blue-800 text-white">
          <SuccessCounter />
        </section>
        
        <section className="bg-white">
          <Timeline />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
