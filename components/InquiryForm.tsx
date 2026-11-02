"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/Icon";

type FormState = "idle" | "submitting" | "success" | "error";

export function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result: { message?: string } = await response.json();

      if (!response.ok) {
        setState("error");
        setMessage(
          result.message ?? "We couldn’t send your enquiry. Please try again.",
        );
        return;
      }

      form.reset();
      setState("success");
      setMessage(
        result.message ?? "Thank you. Our team will be in touch shortly.",
      );
    } catch {
      setState("error");
      setMessage(
        "A connection issue stopped your enquiry from sending. Please try again.",
      );
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Full name</span>
          <input
            autoComplete="name"
            name="name"
            placeholder="Your name"
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label className="field">
          <span>Email address</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
            maxLength={254}
          />
        </label>
        <label className="field">
          <span>Phone number</span>
          <input
            autoComplete="tel"
            name="phone"
            placeholder="+91 98765 43210"
            type="tel"
            required
            minLength={7}
            maxLength={20}
            pattern={String.raw`\+?[0-9\s.\(\)\-]{7,20}`}
            title="Enter a valid phone number with 7 to 15 digits."
          />
        </label>
        <label className="field">
          <span>I’m interested in</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>
              Select an area of interest
            </option>
            <option>Land &amp; agricultural</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>International investment</option>
            <option>Property visit</option>
          </select>
        </label>
        <label className="field field-wide">
          <span>Tell us about your plans</span>
          <textarea
            name="message"
            placeholder="Share a little about the property or visit you have in mind…"
            rows={4}
            required
            minLength={10}
            maxLength={2000}
          />
        </label>
      </div>
      <div className="form-submit-row">
        <button
          className="button button-gold"
          type="submit"
          disabled={state === "submitting"}
        >
          {state === "submitting"
            ? "Sending enquiry…"
            : "Request a conversation"}
          {state !== "submitting" && <Icon name="arrow" size={18} />}
        </button>
        <p className="form-privacy">
          Your details are shared only with our advisory team.
        </p>
      </div>
      {message && (
        <p className={`form-message ${state}`} role="status" aria-live="polite">
          {message}
        </p>
      )}
    </form>
  );
}
