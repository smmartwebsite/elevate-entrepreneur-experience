
import React from "react";
import Navbar from "@/components/Navbar";
import EventsCalendar from "@/components/EventsCalendar";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Workshops</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl">
              Join our upcoming sessions to accelerate your entrepreneurial journey
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-20">
          <EventsCalendar />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
