import { motion as _motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const RotatingImage = (props) => {
  const {
    order,
    inputTranslateRange,
    outputTranslateRange,
    src,
    inputOpacityRange,
    outputOpacityRange,
  } = props;

  const targetRef = useRef(null);
  const containerRef = useRef(null);

  // This controls when the animation happens based on scroll position
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Starts when top of element reaches bottom of viewport, ends when bottom of element reaches top of viewport
  });

  // This makes the rotation stop in middle view
  // We're using [0, 0.5, 1] as input and [0, 180, 180] as output
  // This means it rotates from 0° to 180° during first half of scroll, then stays at 180°
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["90deg", "0deg", "-60deg"]
  );
  const translateY = useTransform(
    scrollYProgress,
    inputTranslateRange,
    outputTranslateRange
  );
  const opacity = useTransform(
    scrollYProgress,
    inputOpacityRange,
    outputOpacityRange
  );
  return (
    <div
      ref={containerRef}
      className={`ml-10 flex h-64 w-full items-center justify-center ${order} lg:order-none -z-10`}
    >
      <_motion.img
        ref={targetRef}
        style={{
          opacity,
          rotate,
          y: translateY,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        src={src}
        alt="Coffee bean"
        className="max-w-28"
      />
    </div>
  );
};

export default RotatingImage;
