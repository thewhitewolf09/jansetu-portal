import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-slate-300">
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold">JanSetu</h3>
          <p className="text-sm mt-2">Your partner in building a better community.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>Report an Issue</li>
            <li>Track Status</li>
            <li>Leaderboard</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>help@jansetu.gov.in</li>
            <li>1-800-123-4567</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm">© 2025 JanSetu Portal. All rights reserved.</div>
    </footer>
  );
}
