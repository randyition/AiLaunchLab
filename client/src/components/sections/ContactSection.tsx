import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { staggerContainer, fadeIn } from "@/lib/animations";

// Extend schema for client-side validation
const formSchema = insertContactSubmissionSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      revenue: "",
      message: ""
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted. We'll be in touch soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get in <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Interested in having your SaaS business acquired and transformed? Contact us to start the conversation.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <div className="bg-slate-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your SaaS Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Recurring Revenue</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Revenue Range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<100k">Less than $100K</SelectItem>
                            <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                            <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                            <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                            <SelectItem value=">5m">More than $5M</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your business and what you're looking to achieve..."
                            className="resize-none min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isPending}
                  >
                    {isPending ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <div className="bg-slate-800 p-8 rounded-xl shadow-md text-white mb-8">
              <h3 className="text-2xl font-semibold mb-6">Acquisition Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p><span className="font-semibold">SaaS Business Model:</span> We focus exclusively on software-as-a-service businesses with recurring revenue.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p><span className="font-semibold">Revenue Range:</span> Typically $100K to $5M in annual recurring revenue (ARR).</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p><span className="font-semibold">Growth Potential:</span> Businesses with untapped growth potential but lacking resources or expertise to scale.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p><span className="font-semibold">Market Position:</span> Established product with satisfied customers, even if growth has stalled.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <p><span className="font-semibold">Technology:</span> Sound core technology, though we can address technical debt and modernization.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">What types of businesses do you acquire?</h4>
                  <p className="text-slate-600">We focus on SaaS businesses with $100K-$5M ARR that have a solid product but are struggling with growth, profitability, or scaling.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">What's your typical acquisition process?</h4>
                  <p className="text-slate-600">After initial contact, we conduct a thorough analysis, make a fair offer, and work toward a smooth transition. The process typically takes 4-8 weeks.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">How does the AI transformation work?</h4>
                  <p className="text-slate-600">Our proprietary AI systems analyze your business data to identify opportunities for optimization in pricing, customer acquisition, retention, and operations.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-slate-800 mb-2">What happens to the existing team?</h4>
                  <p className="text-slate-600">We often retain key team members who want to stay, while augmenting with our specialized AI and growth experts as needed.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
