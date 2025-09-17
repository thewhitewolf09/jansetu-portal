import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Metrics from "../components/Metrics";
import Announcements from "../components/Announcements";
import Leaderboard from "../components/Leaderboard";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Metrics />
      <Announcements />
      <Leaderboard />
    </div>
  );
}
