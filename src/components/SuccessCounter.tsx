
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, TrendingUp, Globe } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60); // 60fps animation
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);
  
  return <span ref={nodeRef}>{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  {
    icon: <Users className="w-10 h-10 text-brand-blue-600" />,
    value: 12347,
    label: "Entrepreneurs Trained",
    suffix: "+"
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-brand-orange-500" />,
    value: 87,
    label: "Average Revenue Growth",
    suffix: "%"
  },
  {
    icon: <Award className="w-10 h-10 text-purple-600" />,
    value: 24,
    label: "Years of Experience",
    suffix: "+"
  },
  {
    icon: <Globe className="w-10 h-10 text-emerald-600" />,
    value: 28,
    label: "Countries Reached",
    suffix: ""
  }
];

const SuccessCounter = () => {
  return (
    <section className="py-16 bg-brand-blue-800 text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-brand-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCounter;
