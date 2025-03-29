
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Book, Video, FileText, Headphones, Clock } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-16 pb-12 md:pt-24 md:pb-20 bg-sky-600 text-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources for Entrepreneurs</h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl">
              Access valuable tools, guides, and content to accelerate your business growth
            </p>
          </div>
        </div>
        
        <section className="py-12 md:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <Tabs defaultValue="guides" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                  <TabsTrigger value="guides">Guides & Templates</TabsTrigger>
                  <TabsTrigger value="videos">Video Library</TabsTrigger>
                  <TabsTrigger value="blog">Blog Articles</TabsTrigger>
                  <TabsTrigger value="podcast">Podcast</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="guides" className="space-y-8">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-700">Free Templates & Guides</h2>
                  <p className="text-gray-600">
                    Download our professionally crafted templates and guides to streamline your business operations.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Business Model Canvas",
                      description: "Map out your business model on a single page",
                      icon: <FileText className="h-8 w-8 text-sky-600" />,
                      downloadLink: "#"
                    },
                    {
                      title: "Marketing Strategy Template",
                      description: "Create a comprehensive marketing plan",
                      icon: <FileText className="h-8 w-8 text-sky-600" />,
                      downloadLink: "#"
                    },
                    {
                      title: "Cash Flow Projection Sheet",
                      description: "Plan and track your business finances",
                      icon: <FileText className="h-8 w-8 text-sky-600" />,
                      downloadLink: "#"
                    },
                    {
                      title: "Pitch Deck Template",
                      description: "Impress investors with a professional presentation",
                      icon: <FileText className="h-8 w-8 text-sky-600" />,
                      downloadLink: "#"
                    },
                    {
                      title: "SMART Goals Worksheet",
                      description: "Set achievable objectives for your business",
                      icon: <FileText className="h-8 w-8 text-sky-600" />,
                      downloadLink: "#"
                    },
                    {
                      title: "Customer Avatar Worksheet",
                      description: "Define your ideal customer profile",
                      icon: <FileText className="h-8 w-8 text-sky-600" />,
                      downloadLink: "#"
                    }
                  ].map((resource, index) => (
                    <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="mb-2">{resource.icon}</div>
                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <a href={resource.downloadLink}>
                            <Download className="mr-2 h-4 w-4" /> Download
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="videos" className="space-y-8">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-700">Video Library</h2>
                  <p className="text-gray-600">
                    Watch expert tutorials and insights to enhance your entrepreneurial skills.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Building a Winning Business Strategy",
                      duration: "32 min",
                      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "Marketing on a Budget",
                      duration: "24 min",
                      thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "Financial Literacy for Entrepreneurs",
                      duration: "45 min",
                      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "Building High-Performance Teams",
                      duration: "38 min",
                      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "Scaling Your Business",
                      duration: "28 min",
                      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "Effective Leadership Skills",
                      duration: "36 min",
                      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }
                  ].map((video, index) => (
                    <Card key={index} className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-48 object-cover"
                        />
                        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-14 h-14 p-0 flex items-center justify-center bg-orange-500/90 hover:bg-orange-600 text-white">
                          <Video className="h-6 w-6" />
                        </Button>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs rounded px-2 py-1 flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold">{video.title}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="blog" className="space-y-8">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-700">Blog Articles</h2>
                  <p className="text-gray-600">
                    Read our latest insights and strategies for business success.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    {
                      title: "10 Proven Strategies to Boost Your Business Growth",
                      excerpt: "Discover actionable tactics that can help your business reach new heights...",
                      date: "August 15, 2023",
                      readTime: "6 min read",
                      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "How to Build a Resilient Business During Economic Uncertainty",
                      excerpt: "Learn the key steps to strengthen your business against economic challenges...",
                      date: "July 28, 2023",
                      readTime: "8 min read",
                      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "The Art of Delegation: Why Entrepreneurs Must Master It",
                      excerpt: "Effective delegation is a critical skill for business growth. Here's how to do it right...",
                      date: "June 15, 2023",
                      readTime: "5 min read",
                      image: "https://images.unsplash.com/photo-1551836022-4c4c9a92f320?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    },
                    {
                      title: "Digital Marketing Trends Every Business Owner Should Know",
                      excerpt: "Stay ahead of the curve with these emerging marketing strategies for 2023...",
                      date: "May 10, 2023",
                      readTime: "7 min read",
                      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    }
                  ].map((post, index) => (
                    <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow flex flex-col md:flex-row">
                      <div className="md:w-2/5">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-sky-700">{post.title}</h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="text-sm text-gray-500">
                            {post.date} · {post.readTime}
                          </div>
                          <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="outline">
                    View All Articles
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="podcast" className="space-y-8">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-700">The Entrepreneur's Journey Podcast</h2>
                  <p className="text-gray-600">
                    Listen to conversations with successful entrepreneurs and business experts.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Overcoming Business Challenges with Resilience",
                      guest: "Rajan Mehta, CEO of TechTribe",
                      duration: "48 min",
                      date: "August 2, 2023"
                    },
                    {
                      title: "Funding Strategies for Early-Stage Startups",
                      guest: "Priya Sharma, Venture Capitalist",
                      duration: "52 min",
                      date: "July 18, 2023"
                    },
                    {
                      title: "Building a Customer-Centric Business Culture",
                      guest: "Arjun Kapoor, Founder of ServiceFirst",
                      duration: "45 min",
                      date: "July 5, 2023"
                    },
                    {
                      title: "The Future of E-commerce in India",
                      guest: "Neha Gupta, E-commerce Expert",
                      duration: "56 min",
                      date: "June 21, 2023"
                    },
                    {
                      title: "Work-Life Balance for Entrepreneurs",
                      guest: "Dr. Vikram Singh, Business Psychologist",
                      duration: "41 min",
                      date: "June 7, 2023"
                    }
                  ].map((podcast, index) => (
                    <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">{podcast.title}</h3>
                            <p className="text-gray-600 mb-2">Guest: {podcast.guest}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" /> {podcast.duration}
                              <span className="mx-2">•</span>
                              {podcast.date}
                            </div>
                          </div>
                          <div>
                            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
                              <Headphones className="h-5 w-5 text-orange-500" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Subscribe to Our Podcast
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
