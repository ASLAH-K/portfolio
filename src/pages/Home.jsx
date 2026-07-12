import React from 'react'
import Welcome from "../components/Welcome";
import Portfolio from "../Portfolio";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* FULLSCREEN INTRO SECTION */}
      <Welcome />

      {/* YOUR ENTIRE PORTFOLIO (UNCHANGED) */}
      <Portfolio />
    </div>
  )
}