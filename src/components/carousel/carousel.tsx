import { motion } from "framer-motion";
import React, { useRef } from "react";

interface CarouselType {
  children: JSX.Element[];
  gap?: string;
}

const Carousel: React.FC<CarouselType> = (props) => {
  const container = useRef<HTMLDivElement>(null);

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
      <motion.ul drag="x" dragConstraints={container} className="relative inline-flex">
        {props.children.map((child, index) => {
          return (
            <Item key={index} gap={props.gap}>
              {child}
            </Item>
          );
        })}
      </motion.ul>
    </div>
  );
};

interface ItemType {
  gap?: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemType> = (props) => {
  return <li className="last:pr-0 shrink-0 pr-[var(--carousel-padding)]">{props.children}</li>;
};

export default Carousel;
