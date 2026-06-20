"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setErrorMessage("");
      setSuccessMessage("");
      
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        
        if (!response.ok) throw new Error("Failed to send");
        
        setSuccessMessage("Thanks for connecting with me. I would appreciate your time to visit my website.");
        formik.resetForm();
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <section id="contact-us-form" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block relative mb-6">
            Connect With Me
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-primary rounded-full" />
          </h2>
          <p className="text-lg text-text-secondary">
            Do you have any questions? Please do not hesitate to contact me directly. I will try my best to contact you.
            <br />
            Happy Learning <span role="img" aria-label="emoji" className="text-2xl">🙏</span>
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl"
        >
          <form onSubmit={formik.handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-primary">Your Name</label>
                <Input
                  id="name"
                  {...formik.getFieldProps("name")}
                  className={formik.errors.name && formik.touched.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                  placeholder="John Doe"
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-sm text-red-500">{formik.errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-primary">Your Email</label>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className={formik.errors.email && formik.touched.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                  placeholder="john@example.com"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-text-primary">Subject</label>
              <Input
                id="subject"
                {...formik.getFieldProps("subject")}
                className={formik.errors.subject && formik.touched.subject ? "border-red-500 focus-visible:ring-red-500" : ""}
                placeholder="How can I help you?"
              />
              {formik.errors.subject && formik.touched.subject && (
                <p className="text-sm text-red-500">{formik.errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-primary">Your Message</label>
              <Textarea
                id="message"
                rows={5}
                {...formik.getFieldProps("message")}
                className={formik.errors.message && formik.touched.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                placeholder="Anything you can ask!"
              />
              {formik.errors.message && formik.touched.message && (
                <p className="text-sm text-red-500">{formik.errors.message}</p>
              )}
            </div>

            {successMessage && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <p className="text-green-600 dark:text-green-400 text-sm">{successMessage}</p>
              </motion.div>
            )}

            {errorMessage && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
                <p className="text-red-600 dark:text-red-400 text-sm">{errorMessage}</p>
              </motion.div>
            )}

            <div className="pt-2 text-center md:text-left">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="w-full md:w-auto min-w-[160px] rounded-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Connect
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
