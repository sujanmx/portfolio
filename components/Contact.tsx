"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PROFILE } from "@/lib/data";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Mail, Linkedin, Figma, ExternalLink, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef, FormEvent } from "react";

// ── Form state types ──────────────────────────────────────────────────────────
type Status = "idle" | "sending" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ── Client-side validation ────────────────────────────────────────────────────
function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim() || fields.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!fields.message.trim() || fields.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [fields, setFields] = useState<FormFields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const submittingRef = useRef(false); // guard against duplicate submissions

  const isSending = status === "sending";

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear individual field error on change
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return; // prevent duplicate clicks

    // Client-side validation
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    submittingRef.current = true;
    setStatus("sending");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.error ?? "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        setServerMessage("Your message was sent! I'll get back to you soon.");
        setFields({ name: "", email: "", message: "" });
        setErrors({});
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="mb-8">
                <ProfileImage size="md" variant="rounded" />
              </div>
              <Typography variant="small" className="mb-4 text-accent-glow">Get In Touch</Typography>
              <Typography variant="h2" className="mb-8">Let's Build Something <br /> <span className="text-neutral-500">Extraordinary.</span></Typography>
              <Typography variant="p" className="text-lg mb-12 opacity-60 leading-relaxed">
                I'm currently open to freelance opportunities and full-time roles. 
                Whether you have a project in mind or just want to say hi, my inbox is always open.
              </Typography>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-accent-glow transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <Typography variant="small" className="block opacity-40">Email</Typography>
                    <Typography variant="p" className="text-white">{PROFILE.email}</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-accent-glow transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <Typography variant="small" className="block opacity-40">LinkedIn</Typography>
                    <Typography variant="p" className="text-white">hey-sujan</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:text-accent-glow transition-colors">
                    <Figma size={20} />
                  </div>
                  <div>
                    <Typography variant="small" className="block opacity-40">Behance</Typography>
                    <Typography variant="p" className="text-white">sujanmandal20</Typography>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-glow/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6 relative z-10"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Typography variant="small" className="opacity-40">Name</Typography>
                  <input 
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required
                    disabled={isSending}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-glow/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {errors.name && (
                    <p id="error-name" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Typography variant="small" className="opacity-40">Email</Typography>
                  <input 
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    disabled={isSending}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-glow/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {errors.email && (
                    <p id="error-email" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Typography variant="small" className="opacity-40">Message</Typography>
                <textarea 
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..." 
                  rows={5}
                  required
                  disabled={isSending}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-glow/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {errors.message && (
                  <p id="error-message" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Success / Error feedback — renders in the existing space without layout shift */}
              {(status === "success" || status === "error") && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${
                    status === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {status === "success" ? (
                    <CheckCircle size={16} className="mt-0.5 shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  )}
                  {serverMessage}
                </motion.div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full py-4"
                disabled={isSending}
                aria-label={isSending ? "Sending message…" : "Send message"}
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message <ExternalLink size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
