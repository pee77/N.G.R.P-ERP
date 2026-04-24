"use client";

import { useState } from "react";
import { isRequired, isValidEmail, minLength } from "@/lib/validation";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactFormData, string>>;

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"error" | "success" | null>(null);

  const onFieldChange = <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): ContactErrors => {
    const nextErrors: ContactErrors = {};

    if (!isRequired(form.name)) nextErrors.name = "Name is required.";
    if (!isValidEmail(form.email)) nextErrors.email = "Valid email is required.";
    if (!isRequired(form.subject)) nextErrors.subject = "Subject is required.";
    if (!minLength(form.message, 10)) nextErrors.message = "Message should be at least 10 characters.";

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatusMessage(null);
    setStatusType(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusType("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    try {
      setSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatusType("success");
      setStatusMessage("Thanks! We received your message and will reply shortly.");
      setForm(initialForm);
    } catch {
      setStatusType("error");
      setStatusMessage("Something went wrong while sending your message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-area mb-100">
      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="contact_name">Name</label>
            <input
              id="contact_name"
              type="text"
              className="form-control"
              value={form.name}
              onChange={(event) => onFieldChange("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "error-contact-name" : undefined}
            />
            {errors.name ? <small id="error-contact-name">{errors.name}</small> : null}
          </div>

          <div className="col-12 col-md-6 mb-3">
            <label htmlFor="contact_email">Email</label>
            <input
              id="contact_email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={(event) => onFieldChange("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "error-contact-email" : undefined}
            />
            {errors.email ? <small id="error-contact-email">{errors.email}</small> : null}
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="contact_subject">Subject</label>
            <input
              id="contact_subject"
              type="text"
              className="form-control"
              value={form.subject}
              onChange={(event) => onFieldChange("subject", event.target.value)}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "error-contact-subject" : undefined}
            />
            {errors.subject ? <small id="error-contact-subject">{errors.subject}</small> : null}
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="contact_message">Message</label>
            <textarea
              id="contact_message"
              className="form-control"
              rows={6}
              value={form.message}
              onChange={(event) => onFieldChange("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "error-contact-message" : undefined}
            />
            {errors.message ? <small id="error-contact-message">{errors.message}</small> : null}
          </div>

          <div className="col-12" aria-live="polite">
            {statusMessage ? <p className={statusType === "error" ? "text-danger" : "text-success"}>{statusMessage}</p> : null}
          </div>

          <div className="col-12">
            <button type="submit" className="btn essence-btn" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
