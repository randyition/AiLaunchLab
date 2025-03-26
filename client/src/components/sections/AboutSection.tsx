import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.h2 
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Our <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Approach</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg"
          >
            We combine business expertise with cutting-edge AI technology to identify, acquire, and transform underperforming SaaS businesses.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
            <Card className="bg-slate-50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-slate-100 h-full">
              <CardContent className="pt-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <i className="fas fa-search text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Acquisition</h3>
                <p className="text-slate-600">
                  We identify undervalued SaaS businesses with strong fundamentals but inefficient operations or limited growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
            <Card className="bg-slate-50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-slate-100 h-full">
              <CardContent className="pt-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                  <i className="fas fa-robot text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Transformation</h3>
                <p className="text-slate-600">
                  Our proprietary AI models analyze operations, customer data, and market positioning to identify optimization opportunities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeIn("up", "tween", 0.5, 1)}>
            <Card className="bg-slate-50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-slate-100 h-full">
              <CardContent className="pt-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Growth</h3>
                <p className="text-slate-600">
                  We implement data-driven strategies to optimize pricing, reduce churn, enhance customer acquisition, and streamline operations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-left">Why We're Different</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base"><span className="font-semibold">AI-First Methodology:</span> Unlike traditional private equity, we leverage advanced AI to identify hidden value and growth opportunities.</p>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base"><span className="font-semibold">Tech & Business Expertise:</span> Our team combines deep SaaS industry knowledge with cutting-edge technical skills.</p>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base"><span className="font-semibold">Rapid Transformation:</span> We implement changes quickly and effectively, with measurable results in 90 days.</p>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base"><span className="font-semibold">Long-Term Focus:</span> We build sustainable businesses, not quick flips, with robust recurring revenue models.</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="relative mt-8 md:mt-0">
              <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <blockquote className="text-white text-sm sm:text-base md:text-lg italic font-light">
                    "The AI SaaS Labs team transformed our struggling business into a growth machine in less than 6 months."
                  </blockquote>
                  <div className="mt-2 sm:mt-3 flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="ml-2 sm:ml-3">
                      <div className="text-white font-medium text-sm sm:text-base">Sarah Johnson</div>
                      <div className="text-white/70 text-xs sm:text-sm">Former CEO, DataMetrics SaaS</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white p-2 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-1 text-amber-500 text-xs sm:text-base">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="text-slate-800 font-medium mt-1 text-xs sm:text-base">
                  50+ Success Stories
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
