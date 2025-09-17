import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Metrics from "../components/Metrics";
import Announcements from "../components/Announcements";
import Leaderboard from "../components/Leaderboard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Services />
      <Metrics />
      <Announcements />
      <Leaderboard />
      <Footer />
    </div>
  );
}
