import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import ReportIssue from "./pages/reportissue.jsx";
import TrackStatus from "./pages/trackstatus.jsx";
import Login from "./pages/login.jsx";
import HelpCenter from "./pages/helpcentre.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/track" element={<TrackStatus />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
