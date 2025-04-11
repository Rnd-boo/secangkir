// components/AnimatedSection.jsx
import { motion as _motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate only once when in view

  // Animation variants
  const containerVariants = {
    hidden: {
      y: -80,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 1, // Stagger child animations
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <_motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="h-screen bg-[url('/images/herosection.png')] relative
    bg-no-repeat bg-center bg-cover"
    >
      <div className="mx-auto grid px-2 absolute inset-0 bg-black bg-opacity-50 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 ">
        <_motion.div
          variants={childVariants}
          className="mx-auto mt-36 lg:col-span-7"
        >
          <h1 className="mb-1 lg:max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-8xl xl:text-[160px] text-white">
            <i>Secangkir</i>
          </h1>
          <h1
            className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight md:text-6xl xl:text-5xl text-white
            "
          >
            kopi buat jalani hari
          </h1>
          <div className="justify-bet mb-6 flex items-center">
            <p className="text-[#4e7dc5] font-semibold text-sm md:text-lg lg:text-xl xl:max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              voluptatum quibusdam
            </p>
          </div>
        </_motion.div>
      </div>
    </_motion.section>
  );
};

export default AnimatedSection;
