import React, { useState } from "react";

export default function ReportIssue() {
  const [form, setForm] = useState({ title: "", desc: "", category: "", location: "" });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.desc || !form.category || !form.location) {
      alert("Please fill all required fields");
      return;
    }
    // mock create tracking id
    const id = "#" + Math.floor(10000 + Math.random() * 90000);
    setSubmitted(id);
    setForm({ title: "", desc: "", category: "", location: "" });
    // optionally persist in localStorage (demo)
    const saved = JSON.parse(localStorage.getItem("jansetu_reports") || "[]");
    saved.unshift({ id, ...form, date: new Date().toISOString() });
    localStorage.setItem("jansetu_reports", JSON.stringify(saved));
  }

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">Report a New Issue</h1>
        <p className="text-slate-600 mb-6">Help us improve by reporting civic issues you encounter.</p>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Issue Title</label>
            <input name="title" value={form.title} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 p-2" placeholder="Short summary" />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea name="desc" value={form.desc} onChange={handleChange} rows="4" className="mt-1 block w-full rounded-md border-slate-300 p-2" placeholder="Describe the issue" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 p-2">
                <option value="">Select</option>
                <option>Roads and Transportation</option>
                <option>Water and Sanitation</option>
                <option>Public Safety</option>
                <option>Parks and Recreation</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input name="location" value={form.location} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 p-2" placeholder="Address or landmark" />
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md">Submit Issue</button>
          </div>

          {submitted && (
            <div className="mt-2 p-3 rounded bg-green-50 text-green-700">
              Issue submitted successfully! Your tracking ID is <strong>{submitted}</strong>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
