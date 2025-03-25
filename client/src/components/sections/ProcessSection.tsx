import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const ProcessStep = ({ number, title, description, deliverables, image, reverse = false }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <motion.div 
        variants={fadeIn(reverse ? "left" : "right", "tween", 0.2, 1)}
        className={`md:w-1/2 ${reverse ? "md:order-2" : ""}`}
      >
        <div className={`bg-white p-6 rounded-xl shadow-md max-w-md ${reverse ? "ml-auto" : ""}`}>
          <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
            number === 1 || number === 4 ? "bg-primary" : 
            number === 2 ? "bg-emerald-600" : "bg-indigo-600"
          } text-white mb-4`}>
            <i className={`fas ${
              number === 1 ? "fa-search" : 
              number === 2 ? "fa-cogs" : 
              number === 3 ? "fa-rocket" :
              "fa-chart-line"
            }`}></i>
          </div>
          <h3 className="text-xl font-semibold mb-3">{number}. {title}</h3>
          <p className="text-slate-600">
            {description}
          </p>
          <div className="mt-4 bg-slate-50 p-3 rounded-lg">
            <div className="text-sm text-slate-600 font-medium">Key Deliverables:</div>
            <ul className="mt-2 text-sm text-slate-500 space-y-1">
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
      <motion.div 
        variants={fadeIn(reverse ? "right" : "left", "tween", 0.2, 1)}
        className={`md:w-1/2 hidden md:block ${reverse ? "md:order-1" : ""}`}
      >
        <img src={image} alt={title} className="rounded-xl shadow-lg max-w-md mx-auto" />
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
    <section id="process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Process</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            We follow a systematic, AI-driven approach to transform underperforming SaaS businesses.
          </motion.p>
        </motion.div>
        
        <div className="relative">
          <div className="hidden md:block absolute top-[88px] bottom-20 left-1/2 w-0.5 bg-gradient-to-b from-primary via-indigo-400 to-primary/50 -translate-x-1/2 z-0"></div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 relative z-10"
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
