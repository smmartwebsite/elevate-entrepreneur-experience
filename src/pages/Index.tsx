
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import SuccessStories from "@/components/SuccessStories";
import Timeline from "@/components/Timeline";
import EventsCalendar from "@/components/EventsCalendar";
import EntrepreneurQuiz from "@/components/EntrepreneurQuiz";
import SuccessCounter from "@/components/SuccessCounter";
import ProgramFinder from "@/components/ProgramFinder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="stats" className="bg-brand-blue-800">
          <SuccessCounter />
        </section>
        
        <section id="programs" className="bg-white">
          <Programs />
        </section>
        
        <section id="find-program" className="bg-gray-50">
          <ProgramFinder />
        </section>
        
        <section id="success-stories" className="bg-gradient-to-b from-gray-50 to-white">
          <SuccessStories />
        </section>
        
        <section id="quiz" className="bg-white">
          <EntrepreneurQuiz />
        </section>
        
        <section id="our-journey" className="bg-white">
          <Timeline />
        </section>
        
        <section id="events" className="bg-gray-50">
          <EventsCalendar />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
