import React from "react";
import { IconType } from "../../types";
import { Icon } from "../icon";

export interface CardType {
  icon: IconType;
  title: string;
  body: string;
}

export const Card: React.FC<CardType> = (props) => {
  return (
    <div className="bg-[#151515] pt-14 relative items-center text-center p-7 flex flex-col gap-4 rounded-lg">
      <div
        style={{
          boxShadow: "0px 10px 16px rgba(0, 0, 0, 0.6)",
        }}
        className="w-[60px] bg-[#151515] -translate-y-1/2 absolute top-0 grid place-items-center rounded-lg h-[60px]"
      >
        <Icon icon={props.icon} />
      </div>
      <p className="text-2xl font-medium text-white">{props.title}</p>
      <p className="text-[#A5A5A5] text-lg">{props.body}</p>
    </div>
  );
};

export default Card;
