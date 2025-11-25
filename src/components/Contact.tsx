"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    
    // Reset status after 2 seconds
    setTimeout(() => {
      setSubmitStatus("idle");
    }, 2000);
  };

  const getButtonText = () => {
    if (isSubmitting) return "Sending...";
    if (submitStatus === "success") return "Message Sent! ✓";
    return "Send Message";
  };

  const getButtonStyle = () => {
    if (submitStatus === "success") return "bg-[#27AE60]";
    return "bg-[#4682B4] hover:bg-[#5a9bd4]";
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-[1200px] mx-auto bg-white/95 mb-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
      <h2 className="text-4xl text-[#2c3e50] mb-8 text-center font-bold">Book Your Voyage</h2>
      
      <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-4 border-2 border-[#BDC3C7] rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-[#4682B4]"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-4 border-2 border-[#BDC3C7] rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-[#4682B4]"
        />
        <textarea
          placeholder="Message Hampton..."
          rows={5}
          required
          className="p-4 border-2 border-[#BDC3C7] rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-[#4682B4] resize-vertical"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-8 py-4 text-white border-none rounded-lg text-lg cursor-pointer transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${getButtonStyle()}`}
        >
          {getButtonText()}
        </button>
      </form>
    </section>
  );
}

