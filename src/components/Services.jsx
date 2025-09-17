import React from "react";
import { Link } from "react-router-dom";
import reportImage from "../images/reportissue.jpg";
import helpImage from "../images/helpcentre.jpg";
import liveTrackerImage from "../images/live tracker.jpg";
import leaderboardImage from "../images/leaderboard.jpg";

export default function Services() {
  const cards = [
    {
      title: "Report Issue",
      desc: "Report a new civic issue",
      to: "/report",
      image: reportImage,
    },
    {
      title: "Live Tracker",
      desc: "Track status of your issues",
      to: "/track",
      image: liveTrackerImage,
    },
    {
      title: "Leaderboard",
      desc: "Top contributors",
      to: "/help",
      image: leaderboardImage,
    },
    {
      title: "Help Center",
      desc: "Get help & FAQs",
      to: "/help",
      image: helpImage,
    },
  ];
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              to={c.to}
              key={c.title}
              className="card overflow-hidden hover:shadow-lg"
            >
              <div
                className="h-55 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${c.image})`,
                }}
              ></div>
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
