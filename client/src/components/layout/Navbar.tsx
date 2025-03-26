import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Process", path: "/process" },
  { name: "Case Studies", path: "/case-studies" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <i className="fas fa-flask text-white"></i>
              </div>
              <span className="text-xl font-bold text-slate-800">AI SaaS Labs</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span className="relative group text-slate-600 hover:text-primary font-medium cursor-pointer">
                  {link.name}
                  <span className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                    location === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </span>
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.path} href={link.path}>
                      <span className={`text-lg px-2 py-2 cursor-pointer ${
                        location === link.path ? "text-primary font-medium" : "text-slate-600 hover:text-primary"
                      }`}>
                        {link.name}
                      </span>
                    </Link>
                  ))}
                  <Button asChild className="mt-2">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
