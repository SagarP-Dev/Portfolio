"use client";
import Container from "@/components/Container";
import Input, { Label } from "@/components/Input";
import { CheckCircle, Loader, MoveUpRight } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "030f91d9-15ab-49bc-bb8e-36cd02bfa2cc",
          ...formData,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormData({ name: "", email: "", interest: "", message: "" });
        setSuccess(true);
      } else {
        setErrorMessage(data.message || "Failed to send message.");
        console.error("Form submission failed:", data);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Form Submission Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 md:px-0">
      <Container className="flex flex-col md:flex-row items-center gap-10 md:gap-20 py-10 md:py-20">
        {/* Left-side decoration (hidden on small screens) */}
        <div className="hidden md:block">
          <div className="w-[2px] h-28 bg-primary/30">
            <div className="w-full h-[80%] bg-primary" />
          </div>
        </div>

        
        <div className="flex-1 w-full max-w-2xl">
        <h2 className="font-bold text-2xl md:text-4xl leading-tight md:leading-[50px] mb-6 text-center md:text-left">
        Love to hear from you,&nbsp;<br />
        Get in touch 👋
        </h2>


          <form className="space-y-5" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="030f91d9-15ab-49bc-bb8e-36cd02bfa2cc" />

            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex flex-col w-full">
                <Label htmlFor="name">Your name</Label>
                <Input
                  disabled={loading}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <Label htmlFor="email">Your email</Label>
                <Input
                  disabled={loading}
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            
            <div className="flex flex-col w-full">
              <Label htmlFor="interest">What you are interested in</Label>
              <Input
                disabled={loading}
                type="text"
                name="interest"
                placeholder="e.g., WebApp Development & Landing Page"
                value={formData.interest}
                onChange={handleChange}
              />
            </div>

            
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                disabled={loading}
                placeholder="Let us know your thoughts"
                className="w-full bg-primary/5 text-base px-4 py-2 outline-none border rounded-md focus-within:border-primary resize-none disabled:bg-primary/20 focus-within:bg-primaryWhite"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            
            <button
              type="submit"
              className="flex items-center justify-center bg-primary text-white w-full md:w-1/2 py-2.5 rounded-lg gap-2 transition-all duration-200 hover:bg-primary/90"
            >
              {loading ? "Sending..." : "Just Send"}{" "}
              {loading ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <MoveUpRight className="w-4 h-4" />
              )}
            </button>

            
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
            )}
          </form>
        </div>

        
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
                </motion.div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">Success!</h2>
                <p className="mt-2 text-base font-medium text-gray-600">
                  Your message has been sent successfully. We&apos;ll get back to you soon!
                </p>
              </div>
              <div className="mt-5">
                <button
                  onClick={() => setSuccess(false)}
                  className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default ContactPage;
