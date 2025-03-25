import { motion } from "framer-motion";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">AI SaaS Labs</span>
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              Learn more about our team, our mission, and how we transform SaaS businesses with AI-powered strategies.
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection />
      
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg mb-8">
              We believe that many SaaS businesses have untapped potential that can be unlocked with the right expertise and AI-driven strategies. Our mission is to identify these opportunities and transform these businesses into thriving, profitable enterprises.
            </p>
            <Button asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <StatsSection />
    </motion.div>
  );
}
