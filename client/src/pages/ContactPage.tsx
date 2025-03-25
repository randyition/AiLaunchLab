import { motion } from "framer-motion";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
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
              Get in <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-slate-300 text-xl mb-8">
              Ready to discuss how we can transform your SaaS business? We're here to help.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </motion.div>
  );
}
