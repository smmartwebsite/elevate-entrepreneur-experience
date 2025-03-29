
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder, EcoWare Solutions",
    image: "",
    quote: "The Growth Catalyst program helped me refine my business model and secure ₹1.5 crore in funding. Our revenue has increased by 70% in just 8 months.",
    stats: [
      { label: "Revenue Growth", value: "70%" },
      { label: "Team Size", value: "5 → 18" },
      { label: "Funding Secured", value: "₹1.5 Cr" }
    ],
    program: "Startup Accelerator"
  },
  {
    id: 2,
    name: "Rajiv Mehta",
    role: "CEO, CloudSync Technologies",
    image: "",
    quote: "The strategic guidance provided by the coaches was transformative. We've doubled our client base and expanded to three new international markets.",
    stats: [
      { label: "Client Growth", value: "120%" },
      { label: "New Markets", value: "3" },
      { label: "Profit Margin", value: "+15%" }
    ],
    program: "Growth Leadership"
  },
  {
    id: 3,
    name: "Anjali Desai",
    role: "Founder, Wellness Revolution",
    image: "",
    quote: "The mastermind group provided invaluable peer support and accountability. Implementing the strategies I learned resulted in 90% year-over-year growth.",
    stats: [
      { label: "YoY Growth", value: "90%" },
      { label: "Locations", value: "1 → 4" },
      { label: "Customer Retention", value: "85%" }
    ],
    program: "Community Mastermind"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="success-stories">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-800 mb-4">
            Entrepreneurs Who Transformed Their Business
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real business owners who have experienced 
            breakthrough results with our programs.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border border-gray-200 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-3">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-brand-blue-100 text-brand-blue-700">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-brand-blue-50">
                        {testimonial.program}
                      </Badge>
                    </div>
                    
                    <div className="relative mb-6 mt-5">
                      <Quote className="absolute top-0 left-0 h-6 w-6 text-brand-orange-400 opacity-40 -translate-x-2 -translate-y-2" />
                      <p className="text-gray-700 italic pl-2">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-gray-100">
                      {testimonial.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-brand-blue-700 font-bold text-xl">{stat.value}</p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static relative-important transform-none" />
            <CarouselNext className="static relative-important transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStories;
