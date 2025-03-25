import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

const StatItem = ({ value, label, delay = 0 }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "tween", 0.1 + delay, 1)}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-slate-300">{label}</div>
    </motion.div>
  );
};

export default function StatsSection() {
  const stats = [
    { value: "50+", label: "Businesses Transformed" },
    { value: "300%", label: "Average Revenue Growth" },
    { value: "-70%", label: "Average Churn Reduction" },
    { value: "90+", label: "Days to Profitability" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
