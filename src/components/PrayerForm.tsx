"use client";

import { useState } from "react";

export default function PrayerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    topic: "",
    story: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream rounded-2xl p-10 text-center shadow-sm">
        <div className="text-5xl mb-4">&#x1F54A;&#xFE0F;</div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy-800 mb-3">
          We Are Praying With You
        </h3>
        <p className="text-navy-600 mb-6">
          Thank you for trusting us with your prayer request. God hears you, and
          so do we. May His peace be with you.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", topic: "", story: "" });
          }}
          className="text-navy-600 underline hover:text-navy-800 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Your Name{" "}
          <span className="text-navy-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="You may remain anonymous"
          className="w-full px-4 py-3 rounded-lg border border-navy-100 bg-white focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition-all placeholder:text-navy-300"
        />
      </div>

      <div>
        <label
          htmlFor="topic"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          What would you like prayer for?{" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="topic"
          required
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          placeholder="e.g. Healing, guidance, family, faith..."
          className="w-full px-4 py-3 rounded-lg border border-navy-100 bg-white focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition-all placeholder:text-navy-300"
        />
      </div>

      <div>
        <label
          htmlFor="story"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Your Story{" "}
          <span className="text-navy-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="story"
          rows={4}
          value={form.story}
          onChange={(e) => setForm({ ...form, story: e.target.value })}
          placeholder="Share as much or as little as you'd like..."
          className="w-full px-4 py-3 rounded-lg border border-navy-100 bg-white focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition-all placeholder:text-navy-300 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-navy-700 text-white rounded-lg font-semibold hover:bg-navy-800 transition-colors"
      >
        Submit Prayer Request
      </button>

      <p className="text-xs text-navy-400 text-center">
        Your prayer request is kept confidential and will be prayed over by our
        team.
      </p>
    </form>
  );
}
