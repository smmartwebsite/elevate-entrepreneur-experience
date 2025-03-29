
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <SuccessCounter />
        <Programs />
        <ProgramFinder />
        <SuccessStories />
        <EntrepreneurQuiz />
        <Timeline />
        <EventsCalendar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
