import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Hero = () => {
  return (
    <section className="hero min-h-[70vh] custom-gradient overflow-hidden">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <motion.h1
            className="text-primary font-extrabold text-4xl md:text-6xl"
            variants={textVariants}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            FinEase
          </motion.h1>

          <motion.h3
            className="text-3xl md:text-5xl font-bold leading-tight"
            variants={textVariants}
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Master Your Money,{" "}
            <span className="text-primary">Live Your Dreams</span>
          </motion.h3>

          <motion.p
            className="py-8 text-xl text-base-content/80"
            variants={textVariants}
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Track expenses, set budgets, and grow your wealth — all in one
            simple, beautiful app.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;