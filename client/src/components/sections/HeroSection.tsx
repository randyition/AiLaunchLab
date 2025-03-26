import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Transform <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">SaaS Businesses</span> with AI-Powered Growth
            </h1>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 mx-auto lg:mx-0 max-w-2xl">
              We acquire underperforming SaaS companies and transform them into profitable businesses using our proprietary AI-driven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/process" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 w-full sm:w-auto">
                  Learn Our Process
                </Button>
              </Link>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-emerald-500"></i>
                <span className="text-sm sm:text-base">50+ businesses transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-chart-line text-emerald-500"></i>
                <span className="text-sm sm:text-base">300% avg. growth</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={slideIn("left", "tween", 0.4, 1)}
            className="w-full mt-10 lg:mt-0 lg:w-1/2"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="bg-gradient-to-r from-primary to-indigo-500 rounded-2xl shadow-xl p-1">
                <div className="bg-white rounded-xl p-3 sm:p-6">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="AI-powered dashboard" className="rounded-lg shadow-lg w-full" />
                  <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="bg-slate-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-primary font-bold text-sm sm:text-base md:text-xl">+127%</div>
                      <div className="text-slate-500 text-xs sm:text-sm">Revenue</div>
                    </div>
                    <div className="bg-slate-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-indigo-600 font-bold text-sm sm:text-base md:text-xl">-62%</div>
                      <div className="text-slate-500 text-xs sm:text-sm">Churn Rate</div>
                    </div>
                    <div className="bg-slate-50 p-2 sm:p-3 rounded-lg">
                      <div className="text-emerald-600 font-bold text-sm sm:text-base md:text-xl">+89%</div>
                      <div className="text-slate-500 text-xs sm:text-sm">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-emerald-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg text-xs sm:text-base">
                AI-Optimized
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
