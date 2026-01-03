import { motion } from "framer-motion";
import Balance from "../Report/Balance";
import TipsWhySection from "../TipsWhySection";
import NewsLetter from "./NewsLetter";
import CTASection from "./CTASection";
import FeaturesSection from "./FeaturesSection";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";
import ReviewSection from "./ReviewSection";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const AllSection = () => {
  return (
    <>
      {/* Overview Section */}
      <motion.section
        className="py-20 px-6 bg-base-200/50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl text-center pb-5 md:text-4xl font-bold leading-tight text-base-20">
          Overview
        </h2>
        <Balance />
      </motion.section>

      {/* Tips & Why Section */}
      <motion.section
        className="py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <TipsWhySection />
      </motion.section>
      {/* services */}
      <ServicesSection></ServicesSection>
      {/* features */}
      <FeaturesSection></FeaturesSection>
      {/* Review */}
      <ReviewSection></ReviewSection>
      {/* Partners */}
      <PartnersSection></PartnersSection>
      {/* CTA */}
      <CTASection></CTASection>
      {/* newsletter */}
      <NewsLetter></NewsLetter>
    </>
  );
};

export default AllSection;