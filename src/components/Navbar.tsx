
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-sky-500">
              SM<span className="text-orange-500">MART</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/startup-accelerator">Startup Accelerator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/growth-leadership">Growth Leadership</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/executive-coaching">Executive Coaching</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/community-mastermind">Community Mastermind</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>

            <Button variant="ghost" asChild>
              <Link to="/resources">Resources</Link>
            </Button>

            <Button variant="ghost" asChild>
              <Link to="/events">Events</Link>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 ml-2">Get Started</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container px-4 py-3 space-y-2">
            <div className="py-2">
              <p className="text-sm font-semibold mb-2">Programs</p>
              <Button variant="ghost" className="w-full justify-start pl-4 text-sm" asChild>
                <Link to="/startup-accelerator">Startup Accelerator</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start pl-4 text-sm" asChild>
                <Link to="/growth-leadership">Growth Leadership</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start pl-4 text-sm" asChild>
                <Link to="/executive-coaching">Executive Coaching</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start pl-4 text-sm" asChild>
                <Link to="/community-mastermind">Community Mastermind</Link>
              </Button>
            </div>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/resources">Resources</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/events">Events</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button variant="default" className="w-full bg-orange-500 hover:bg-orange-600 mt-3">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
