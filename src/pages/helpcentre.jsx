import React from "react";
import FAQ from "../components/FAQ";

export default function HelpCenter() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold">Help Center</h1>
          <p className="mt-2 text-slate-600">Find answers to common questions</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <FAQ />
          </div>
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-slate-600">help@jansetu.gov.in</p>
              <p className="mt-1 text-sm text-slate-600">1-800-123-4567</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Still need help?</h3>
              <p className="mt-2 text-sm text-slate-600">Use the contact form on this page (coming soon) or email support.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
