import React from "react";
import OverviewCards from "../Components/OverviewCards";
import TipsWhySection from "../Components/TipsWhySection";
import Balance from "../Components/Report/Balance";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-primary font-extrabold text-4xl md:text-7xl">
                FinEase
              </h1>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Master Your Money,{" "}
                <span className="text-primary">Live Your Dreams</span>
              </h3>
              <p className="py-8 text-xl md:text-2xl text-base-content/80">
                Track expenses, set budgets, and grow your wealth — all in one
                simple, beautiful app.
              </p>
            </div>
          </div>
        </section>
        {/* Overview Cards */}
        <section className="py-10 px-6 bg-base-200/50">
        <h2 className="text-3xl text-center pb-5 md:text-5xl font-bold leading-tight text-primary">Overview</h2>
          <Balance></Balance>
        </section>

        {/* Tips & Why Section */}
        <section className="py-20 px-6">
          <TipsWhySection></TipsWhySection>
        </section>
      </div>
    </>
  );
};

export default Home;
