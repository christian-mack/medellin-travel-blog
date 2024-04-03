"use client";
import { inter } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface NewsletterSignupState {
  name: string;
  email: string;
  consentGiven: boolean;
}

export default function NewsletterSignUp() {
  const [formData, setFormData] = useState<NewsletterSignupState>({
    name: "",
    email: "",
    consentGiven: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit formData to your newsletter service.
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="mx-auto my-10 rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">
        Sign Up for Our Newsletters
      </h2>
      <p className={cn("text-gray-700 mb-4", inter.className)}>
        Get notified of the best deals on our WordPress themes.
      </p>
      <form onSubmit={handleSubmit} className={inter.className}>
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          →
        </button>
        <label className="flex items-center mt-4">
          <input
            type="checkbox"
            name="consentGiven"
            checked={formData.consentGiven}
            onChange={handleInputChange}
            className="mr-2"
          />
          By checking this box, you confirm that you have read and are agreeing
          to our terms of use regarding the storage of the data submitted
          through this form.
        </label>
      </form>
    </div>
  );
}
