import React from "react";
import OverviewCards from "../Components/OverviewCards";
import TipsWhySection from "../Components/TipsWhySection";
import Balance from "../Components/Report/Balance";
import Hero from "../Components/Sections/Hero";
import AllSection from "../Components/Sections/AllSection"
const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <Hero></Hero>
        <AllSection></AllSection>
      </div>
    </>
  );
};

export default Home;
