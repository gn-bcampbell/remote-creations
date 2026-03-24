"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { peakPage } from "@/content/site-content";
import { cn } from "@/lib/utils";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type BudgetOption = (typeof peakPage.budgetOptions)[number];

type ContactFormState = {
  name: string;
  company: string;
  email: string;
  message: string;
  budget: BudgetOption;
};

const initialState: ContactFormState = {
  name: "",
  company: "",
  email: "",
  message: "",
  budget: peakPage.budgetOptions[1]
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      toast.error("Please add your name.");
      return;
    }

    if (!isValidEmail(form.email)) {
      toast.error("Please add a valid email address.");
      return;
    }

    if (form.message.trim().length < 20) {
      toast.error("Please share a bit more detail (at least 20 characters).");
      return;
    }

    if (!FORM_ENDPOINT) {
      toast.error("Form endpoint is missing. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setForm(initialState);
      toast.success("Message sent successfully — I’ll get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs uppercase tracking-[0.22em] text-brand-teal/70">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Alex Sterling"
            className="h-12 border-brand-navy/10 bg-brand-sand/55"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-xs uppercase tracking-[0.22em] text-brand-teal/70">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            placeholder="Summit Systems"
            className="h-12 border-brand-navy/10 bg-brand-sand/55"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs uppercase tracking-[0.22em] text-brand-teal/70">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="you@company.com"
          className="h-12 border-brand-navy/10 bg-brand-sand/55"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs uppercase tracking-[0.22em] text-brand-teal/70">
          Project Details
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={20}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Tell me about your trail. What are we building, what stage are you in, and what needs to work?"
          className="min-h-[180px] border-brand-navy/10 bg-brand-sand/55"
        />
      </div>

      <div className="space-y-4">
        <Label className="text-xs uppercase tracking-[0.22em] text-brand-teal/70">Budget Range</Label>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {peakPage.budgetOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, budget: option }))}
              className={cn(
                "rounded-2xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                form.budget === option
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-brand-navy/10 bg-brand-sand/45 text-brand-teal/78 hover:border-brand-navy/30 hover:text-brand-navy"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="w-full justify-center">
        {isSubmitting ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
