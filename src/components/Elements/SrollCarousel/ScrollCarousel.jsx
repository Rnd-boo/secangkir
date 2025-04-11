import { motion as _motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    url: "images/Cafe1.jpg",
    id: 1,
  },
  {
    url: "images/Cafe2.jpg",
    id: 2,
  },
  {
    url: "images/Cafe3.png",
    id: 3,
  },
  {
    url: "images/Cafe4.jpeg",
    id: 4,
  },
  {
    url: "images/handinkeyboard.jpeg",
    id: 5,
  },
];

const Card = ({ card }) => {
  return (
    <img
      key={card.id}
      src={card.url}
      alt={`Card ${card.id}`}
      className="h-[200px] w-[200px] lg:h-[350px] lg:w-[350px]  2xl:h-[500px] 2xl:w-[500px] border-2 object-cover transition-transform duration-300"
    />
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-15%"]);

  return (
    <section ref={targetRef} className="relative">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <_motion.div style={{ x }} className="flex">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </_motion.div>
      </div>
    </section>
  );
};
export default HorizontalScrollCarousel;
