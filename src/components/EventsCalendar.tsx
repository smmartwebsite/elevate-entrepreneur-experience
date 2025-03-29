
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Entrepreneur Masterclass",
    date: new Date(2023, 7, 15), // August 15, 2023
    startTime: "10:00 AM",
    endTime: "1:00 PM",
    location: "Mumbai",
    isVirtual: false,
    type: "Workshop",
    description: "Join us for a hands-on workshop on scaling your business sustainably."
  },
  {
    id: 2,
    title: "Funding Strategies Webinar",
    date: new Date(2023, 7, 22), // August 22, 2023
    startTime: "3:00 PM",
    endTime: "4:30 PM",
    location: "Online",
    isVirtual: true,
    type: "Webinar",
    description: "Learn about various funding options for different stages of your business."
  },
  {
    id: 3,
    title: "Leadership Summit 2023",
    date: new Date(2023, 8, 5), // September 5, 2023
    startTime: "9:00 AM",
    endTime: "6:00 PM",
    location: "Bangalore",
    isVirtual: false,
    type: "Conference",
    description: "Our annual conference bringing together successful entrepreneurs and industry leaders."
  }
];

// Get current date for calendar
const today = new Date();

const EventsCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(today);
  
  // Find events on the selected date
  const selectedDateEvents = date 
    ? upcomingEvents.filter(event => 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() && 
        event.date.getFullYear() === date.getFullYear()
      )
    : [];

  // Create an array of dates that have events for highlighting in the calendar
  const eventDates = upcomingEvents.map(event => event.date);
  
  return (
    <section className="py-20 bg-gray-50" id="events">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-800 mb-4">
            Upcoming Events & Workshops
          </h2>
          <p className="text-lg text-gray-600">
            Join our interactive sessions to gain insights, connect with peers, 
            and accelerate your entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
                modifiers={{
                  event: (date) => 
                    eventDates.some(eventDate => 
                      eventDate.getDate() === date.getDate() && 
                      eventDate.getMonth() === date.getMonth() && 
                      eventDate.getFullYear() === date.getFullYear()
                    )
                }}
                modifiersStyles={{
                  event: { fontWeight: 'bold', backgroundColor: 'rgba(237, 137, 54, 0.2)' }
                }}
              />
            </div>
          </div>

          {/* Event Cards */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              {selectedDateEvents.length > 0 
                ? `Events on ${date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` 
                : "Upcoming Events"}
            </h3>
            
            <div className="space-y-5">
              {(selectedDateEvents.length > 0 ? selectedDateEvents : upcomingEvents.slice(0, 3)).map((event) => (
                <Card key={event.id} className="overflow-hidden border border-gray-200">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-6 md:border-r border-gray-100 flex flex-col justify-center items-center md:w-1/4 bg-brand-blue-50">
                      <CalendarIcon className="h-8 w-8 text-brand-blue-600 mb-2" />
                      <span className="text-2xl font-bold text-brand-blue-700">
                        {event.date.getDate()}
                      </span>
                      <span className="text-sm font-medium text-brand-blue-600">
                        {event.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    
                    <div className="p-6 md:w-3/4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold">{event.title}</h4>
                        <Badge className={event.isVirtual ? "bg-emerald-100 text-emerald-800" : "bg-brand-blue-100 text-brand-blue-800"}>
                          {event.type}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{event.startTime} - {event.endTime}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                        <Button className="bg-brand-orange-600 hover:bg-brand-orange-700">
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-brand-blue-600 text-brand-blue-600">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
