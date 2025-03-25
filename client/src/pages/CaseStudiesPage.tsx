import { motion } from "framer-motion";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CaseStudiesPage() {
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
              Case <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              Explore real-world examples of how we've transformed struggling SaaS businesses.
            </p>
          </div>
        </div>
      </div>
      
      <CaseStudiesSection />
      
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Be Our Next Success Story?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Join the ranks of SaaS businesses we've helped achieve remarkable growth and profitability through our AI-driven transformation process.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
