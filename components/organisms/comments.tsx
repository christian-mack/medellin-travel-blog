"use client";
import { inter } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface CommentFormState {
  comment: string;
  name: string;
  email: string;
  website?: string;
}

export default function CommentForm() {
  const [formData, setFormData] = useState<CommentFormState>({
    comment: "",
    name: "",
    email: "",
    website: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the form submission logic.
    console.log("Comment Form Data", formData);
  };

  return (
    <div className="mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Leave a Reply</h2>
      <p className={cn("text-sm mb-4", inter.className)}>
        Your email address will not be published. Required fields are marked *
      </p>
      <form onSubmit={handleSubmit} className={inter.className}>
        <textarea
          className="w-full mb-4 p-3 border border-gray-300 rounded"
          name="comment"
          placeholder="Comment *"
          required
          value={formData.comment}
          onChange={handleInputChange}
        />
        <input
          className="w-full mb-4 p-3 border border-gray-300 rounded"
          type="text"
          name="name"
          placeholder="Name *"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          className="w-full mb-4 p-3 border border-gray-300 rounded"
          type="email"
          name="email"
          placeholder="Email *"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          className="w-full mb-4 p-3 border border-gray-300 rounded"
          type="url"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}
