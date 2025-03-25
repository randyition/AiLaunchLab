import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { fadeIn, staggerContainer } from "@/lib/animations";

const CaseStudyCard = ({ image, title, category, description, metrics, delay = 0 }) => {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "Project Management":
        return { bg: "bg-emerald-100", text: "text-emerald-700" };
      case "Customer Support":
        return { bg: "bg-primary/10", text: "text-primary" };
      case "Analytics":
        return { bg: "bg-indigo-100", text: "text-indigo-700" };
      default:
        return { bg: "bg-slate-100", text: "text-slate-700" };
    }
  };
  
  const categoryColor = getCategoryColor(category);
  
  return (
    <motion.div variants={fadeIn("up", "tween", 0.2 + delay, 1)}>
      <Card className="overflow-hidden bg-slate-50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span className={`${categoryColor.bg} ${categoryColor.text} text-xs font-medium px-2.5 py-0.5 rounded`}>
              {category}
            </span>
          </div>
          <p className="text-slate-600 mb-4">
            {description}
          </p>
          <div className="space-y-2 mb-6">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{metric.label}</span>
                  <span className="text-sm font-medium text-emerald-600">{metric.value}</span>
                </div>
                <Progress 
                  value={metric.percentage} 
                  className="h-1.5 my-1"
                  indicatorClassName={
                    category === "Project Management" ? "bg-emerald-500" :
                    category === "Customer Support" ? "bg-primary" :
                    "bg-indigo-500"
                  }
                />
              </div>
            ))}
          </div>
          <Button 
            variant="link" 
            className={
              category === "Project Management" ? "text-emerald-600 hover:text-emerald-800" :
              category === "Customer Support" ? "text-primary hover:text-primary/80" :
              "text-indigo-600 hover:text-indigo-800"
            }
          >
            View Full Case Study
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "TaskFlow Pro",
      category: "Project Management",
      description: "A struggling project management SaaS with declining user base and increasing churn rate.",
      metrics: [
        { label: "Revenue Growth", value: "+215%", percentage: 85 },
        { label: "Churn Reduction", value: "-68%", percentage: 68 },
        { label: "Time to Profit", value: "4 months", percentage: 90 }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "SupportDesk AI",
      category: "Customer Support",
      description: "A customer support platform with great technology but inefficient pricing and marketing strategies.",
      metrics: [
        { label: "Revenue Growth", value: "+178%", percentage: 78 },
        { label: "Customer Acquisition", value: "+230%", percentage: 95 },
        { label: "Time to Profit", value: "3 months", percentage: 95 }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "MetricsMaster",
      category: "Analytics",
      description: "A data analytics platform with impressive technology but poor user experience and high technical debt.",
      metrics: [
        { label: "Revenue Growth", value: "+320%", percentage: 100 },
        { label: "User Satisfaction", value: "+85%", percentage: 85 },
        { label: "Time to Profit", value: "6 months", percentage: 80 }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
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
            Case <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Studies</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            See how we've transformed struggling SaaS businesses into thriving, profitable companies.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={study.title} 
              {...study} 
              delay={index * 0.1}
            />
          ))}
        </motion.div>
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            View All Case Studies
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
