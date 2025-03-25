import { motion } from "framer-motion";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProcessPage() {
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
              Our <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Process</span>
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              Discover our systematic approach to transforming SaaS businesses using AI-driven methodologies.
            </p>
          </div>
        </div>
      </div>
      
      <ProcessSection />
      
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Our proven process has helped over 50 SaaS businesses achieve sustainable growth and profitability. Let's discuss how we can help you too.
            </p>
            <Button asChild>
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <StatsSection />
    </motion.div>
  );
}
