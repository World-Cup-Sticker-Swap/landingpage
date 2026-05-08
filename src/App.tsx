import { Route, Routes } from "react-router-dom";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { ROI } from "@/components/sections/ROI";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { PrivacyPolicy } from "@/components/sections/PrivacyPolicy";

function Home() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <HowItWorks />
      <Features />
      <ROI />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export function App() {
  return (
    <main className="mx-auto max-w-page bg-surface font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </main>
  );
}
