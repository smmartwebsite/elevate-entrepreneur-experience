
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineEvents = [
  {
    year: "2000",
    title: "Founded in Mumbai",
    description: "Started as a small consulting firm helping local entrepreneurs."
  },
  {
    year: "2005",
    title: "First Growth Program",
    description: "Launched our signature 12-week growth program for early-stage businesses."
  },
  {
    year: "2010",
    title: "Expanded Nationwide",
    description: "Opened offices in Bangalore, Delhi, and Hyderabad to serve entrepreneurs across India."
  },
  {
    year: "2015",
    title: "5,000 Entrepreneurs",
    description: "Reached the milestone of having trained 5,000 entrepreneurs across diverse industries."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched virtual programs reaching entrepreneurs globally during the pandemic."
  },
  {
    year: "2023",
    title: "12,000+ Success Stories",
    description: "Celebrating over 12,000 entrepreneurs who have transformed their businesses through our programs."
  }
];

const Timeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-white" id="timeline">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-800 mb-4">
            Our Journey of Impact
          </h2>
          <p className="text-lg text-gray-600">
            For over two decades, we've been dedicated to empowering entrepreneurs 
            and helping businesses thrive.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-blue-100"></div>

          <div className="relative">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                className={`mb-12 flex justify-between items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div className={`p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } bg-white border border-gray-100`}>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 bg-brand-blue-50 text-brand-blue-700">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-brand-blue-700">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-brand-orange-500 border-4 border-white shadow"></div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
