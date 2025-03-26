import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface DeliverableItem {
  icon: string;
  text: string;
}

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  deliverables: DeliverableItem[];
  image: string;
  reverse?: boolean;
}

const ProcessStep = ({ number, title, description, deliverables, image, reverse = false }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
      {/* Mobile Image - only visible on mobile */}
      <div className="md:hidden w-full mb-4">
        <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-48 sm:h-56 object-cover mx-auto" />
      </div>
      
      <motion.div 
        variants={fadeIn(reverse ? "left" : "right", "tween", 0.2, 1)}
        className={`w-full md:w-1/2 ${reverse ? "md:order-2" : ""}`}
      >
        <div className={`bg-white p-4 sm:p-6 rounded-xl shadow-md mx-auto md:max-w-md ${reverse ? "md:ml-auto" : ""}`}>
          <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full ${
            number === 1 || number === 4 ? "bg-primary" : 
            number === 2 ? "bg-emerald-600" : "bg-indigo-600"
          } text-white mb-3 sm:mb-4`}>
            <i className={`fas ${
              number === 1 ? "fa-search" : 
              number === 2 ? "fa-cogs" : 
              number === 3 ? "fa-rocket" :
              "fa-chart-line"
            } text-sm sm:text-base`}></i>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{number}. {title}</h3>
          <p className="text-slate-600 text-sm sm:text-base">
            {description}
          </p>
          <div className="mt-3 sm:mt-4 bg-slate-50 p-2 sm:p-3 rounded-lg">
            <div className="text-xs sm:text-sm text-slate-600 font-medium">Key Deliverables:</div>
            <ul className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500 space-y-1">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <i className={`${item.icon} ${
                    number === 1 || number === 4 ? "text-primary" : 
                    number === 2 ? "text-emerald-500" : "text-indigo-500"
                  }`}></i>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Desktop Image - only visible on desktop */}
      <motion.div 
        variants={fadeIn(reverse ? "right" : "left", "tween", 0.2, 1)}
        className={`md:w-1/2 hidden md:block ${reverse ? "md:order-1" : ""}`}
      >
        <img src={image} alt={title} className="rounded-xl shadow-lg max-w-md w-full h-64 lg:h-auto object-cover mx-auto" />
      </motion.div>
    </div>
  );
};

export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      title: "Discovery & Analysis",
      description: "Our AI systems analyze your SaaS business to identify strengths, weaknesses, and untapped opportunities. We evaluate market position, customer base, tech stack, and financial performance.",
      deliverables: [
        { icon: "fas fa-file-alt", text: "Comprehensive business analysis" },
        { icon: "fas fa-chart-pie", text: "Market opportunity assessment" },
        { icon: "fas fa-code-branch", text: "Technical infrastructure evaluation" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "Based on our analysis, we develop a custom transformation roadmap that leverages AI to optimize operations, enhance product features, adjust pricing, and improve customer acquisition and retention.",
      deliverables: [
        { icon: "fas fa-route", text: "Transformation roadmap" },
        { icon: "fas fa-dollar-sign", text: "Revenue optimization plan" },
        { icon: "fas fa-users", text: "Customer engagement strategy" }
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      reverse: true
    },
    {
      number: 3,
      title: "Implementation & Optimization",
      description: "We execute the transformation strategy with precision, implementing AI tools, optimizing processes, and enhancing the product. Our team works closely with your existing teams to ensure smooth transition.",
      deliverables: [
        { icon: "fas fa-robot", text: "AI implementation for key processes" },
        { icon: "fas fa-tachometer-alt", text: "Performance optimization" },
        { icon: "fas fa-sitemap", text: "Operational restructuring" }
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      number: 4,
      title: "Scaling & Growth",
      description: "With the optimized foundation in place, we focus on sustainable scaling and growth. Our AI continuously monitors performance and makes adjustments to maximize profitability and market share.",
      deliverables: [
        { icon: "fas fa-expand-arrows-alt", text: "Market expansion plan" },
        { icon: "fas fa-bullhorn", text: "Enhanced marketing strategies" },
        { icon: "fas fa-sync-alt", text: "Continuous improvement system" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      reverse: true
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 bg-slate-50">
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
            Our <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Process</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
          >
            We follow a systematic, AI-driven approach to transform underperforming SaaS businesses.
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline connector for desktop */}
          <div className="hidden md:block absolute top-[88px] bottom-20 left-1/2 w-0.5 bg-gradient-to-b from-primary via-indigo-400 to-primary/50 -translate-x-1/2 z-0"></div>
          
          {/* Mobile timeline connector */}
          <div className="md:hidden absolute top-0 bottom-0 left-[20px] w-0.5 bg-gradient-to-b from-primary via-indigo-400 to-primary/50 z-0"></div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8 sm:space-y-10 md:space-y-12 relative z-10"
          >
            {processSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
