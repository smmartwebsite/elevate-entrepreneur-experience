
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-brand-blue-800 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-brand-blue-100 max-w-3xl">
              Have questions? We're here to help you on your entrepreneurial journey
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you have questions about our programs, want to discuss your business challenges, 
                  or are ready to take the next step in your entrepreneurial journey, we're here to help.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-brand-blue-50 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-brand-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue-800">Our Location</h3>
                      <p className="text-gray-600">123 Business Hub, Bandra-Kurla Complex, Mumbai, India 400051</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue-50 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-brand-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue-800">Phone</h3>
                      <p className="text-gray-600">+91 22 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue-50 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-brand-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue-800">Email</h3>
                      <p className="text-gray-600">info@growthcatalyst.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-blue-50 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-brand-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-blue-800">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="border-2 border-brand-blue-100">
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold text-brand-blue-800 mb-4">Send us a Message</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <Input id="email" type="email" placeholder="Enter your email address" />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <Textarea id="message" placeholder="How can we help you?" rows={4} />
                      </div>
                      
                      <Button className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-white">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
