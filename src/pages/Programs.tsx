
import React from "react";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import ProgramFinder from "@/components/ProgramFinder";
import Footer from "@/components/Footer";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl">
              Discover the perfect training program to accelerate your entrepreneurial journey
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-20 bg-white">
          <Programs />
        </section>
        
        <section className="py-12 md:py-20 bg-gray-50">
          <ProgramFinder />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;
