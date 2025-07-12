"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateForm = (form: HTMLFormElement) => {
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim() || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim() || "";

    const newErrors: Record<string, string> = {};

    if (name.length < 3 || name.length > 35) {
      newErrors.name = "Name must be between 3 and 35 characters.";
    }

    if (phone.length < 9 || phone.length > 15) {
      newErrors.phone = "Phone number must be between 9 and 15 digits.";
    }

    if (message.length <= 20) {
      newErrors.message = "Message must be more than 20 characters.";
    }

    return { isValid: Object.keys(newErrors).length === 0, newErrors };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { isValid, newErrors } = validateForm(form);

    if (!isValid) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const formData = {
      name: ((form.elements.namedItem("name") as HTMLInputElement)?.value.trim()) || "",
      email: ((form.elements.namedItem("email") as HTMLInputElement)?.value.trim()) || "",
      phoneNumber: ((form.elements.namedItem("phone") as HTMLInputElement)?.value.trim()) || "",
      message: ((form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim()) || "",
    };

    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus({ success: true, error: false });
        form.reset();
      } else {
        setFormStatus({ success: false, error: true });
      }
    } catch {
      setFormStatus({ success: false, error: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#F4F2F1] px-[2.5%] py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 lg:text-[72px] md-lg:text-[52px] md:text-[45px] text-[42px]">
          Lets Connect
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Have a project in mind or a question? Fill out the form, and lets
          talk.
        </p>
      </div>

      <div className="mx-auto max-w-3xl mt-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-lg py-2"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-lg py-2"
          />

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-lg py-2"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-black text-lg py-2"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#b5aba1]"
            } text-white rounded-full text-[18px] tracking-wider leading-tight hover:scale-[96%] transition-transform duration-700`}
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </form>

        {formStatus.success && (
          <div className="text-green-600 mt-6 text-center text-lg">
            Thank you! We&apos;ll get back to you soon.
          </div>
        )}
        {formStatus.error && (
          <div className="text-red-600 mt-6 text-center text-lg">
            Oops! Something went wrong. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}
