import { animate, motion, useMotionValue } from "framer-motion";
import React, { useRef } from "react";

interface CarouselType {
  children: JSX.Element[];
  gap?: string;
}

const Carousel: React.FC<CarouselType> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const items = useRef<HTMLLIElement[]>([]);

  const onDragEnd = () => {
    const value = container.current!.offsetLeft;
    let index: number = 0;
    let bestDistance = Infinity;

    items.current.forEach((item) => {
      const itemX = item.getBoundingClientRect().x;
      const distance = Math.abs(itemX - value);
      if (distance < bestDistance) {
        bestDistance = distance;
        index = items.current.indexOf(item);
      }
    });

    animate(x, -items.current[index].offsetLeft, {
      ease: "easeOut",
    });
  };

  return (
    <div
      style={
        {
          "--carousel-padding": props?.gap ?? "0px",
        } as React.CSSProperties
      }
      ref={container}
      className="w-full "
    >
      <motion.ul onDragEnd={() => onDragEnd()} style={{ x }} drag="x" whileTap={{ cursor: "grabbing" }} dragConstraints={container} className="relative snap-x cursor-grab inline-flex">
        {props.children.map((child, index) => {
          return (
            <li ref={(el) => (items.current = [...items.current, el!])} key={index} className="pr-[var(--carousel-padding)] last:pr-0 shrink-0 pointer-events-none">
              {child}
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Carousel;
