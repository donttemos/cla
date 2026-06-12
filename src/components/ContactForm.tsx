"use client";

import { useState } from "react";
import { getAllCalculators } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  subject: string;
  calculatorSlug: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export function ContactForm() {
  const calculators = getAllCalculators();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "General Inquiry",
    calculatorSlug: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server communication delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({
        name: "",
        email: "",
        subject: "General Inquiry",
        calculatorSlug: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="w-full">
      {isSuccess ? (
        <div className="cv-surface p-8 text-center flex flex-col items-center justify-center border-emerald-800 bg-emerald-950/10 transition-all duration-500 animate-in fade-in zoom-in-95">
          <div className="h-16 w-16 rounded-full bg-emerald-900/40 border border-emerald-500 flex items-center justify-center text-emerald-400 mb-6">
            <svg className="h-8 w-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white mb-3">
            Message Sent Successfully!
          </h3>
          <p className="max-w-md text-zinc-400 text-sm leading-relaxed mb-8">
            Thank you for reaching out to DTECALC. Our technical team has received your submission and will review it within 24 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 px-6 text-xs font-bold uppercase tracking-wider text-white border border-zinc-700 transition"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                disabled={isSubmitting}
                className={`w-full rounded-lg border bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition focus:ring-0 ${
                  errors.name ? "border-red-500/80 focus:border-red-500" : "border-zinc-850 focus:border-zinc-500"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                disabled={isSubmitting}
                className={`w-full rounded-lg border bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition focus:ring-0 ${
                  errors.email ? "border-red-500/80 focus:border-red-500" : "border-zinc-850 focus:border-zinc-500"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
              Inquiry Type
            </label>
            <select
              id="contact-subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value, calculatorSlug: "" })}
              disabled={isSubmitting}
              className="w-full rounded-lg border border-zinc-850 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500 focus:ring-0"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Calculator Feedback / Error Report">Calculator Feedback / Error Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Partnership & Advertising">Partnership & Advertising</option>
            </select>
          </div>

          {form.subject === "Calculator Feedback / Error Report" && (
            <div className="animate-in slide-in-from-top-3 duration-200">
              <label htmlFor="contact-calculator" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
                Select Calculator
              </label>
              <select
                id="contact-calculator"
                value={form.calculatorSlug}
                onChange={(e) => setForm({ ...form, calculatorSlug: e.target.value })}
                disabled={isSubmitting}
                className="w-full rounded-lg border border-zinc-850 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500 focus:ring-0"
              >
                <option value="">-- Choose a calculator --</option>
                {calculators.map((calc) => (
                  <option key={calc.slug} value={calc.slug}>
                    {calc.name} ({calc.categorySlug})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us what you need..."
              disabled={isSubmitting}
              className={`w-full rounded-lg border bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-700 outline-none transition focus:ring-0 resize-none ${
                errors.message ? "border-red-500/80 focus:border-red-500" : "border-zinc-850 focus:border-zinc-500"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 flex items-center justify-center rounded-lg bg-white hover:bg-zinc-200 text-sm font-semibold tracking-wide text-black transition-all active:scale-[0.99] disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-550 border-t-black" />
                Processing message...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
