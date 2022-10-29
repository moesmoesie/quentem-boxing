import React from "react";

export interface ContainerType {
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerType> = ({ children }) => {
  return (
    <div
      className={`md:px-16 mx-auto small:max-w-lg medium:max-w-5xl large:max-w-7xl px-4 medium:px-10`}
    >
      {children}
    </div>
  );
};

export default Container;
