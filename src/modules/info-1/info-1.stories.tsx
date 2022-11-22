import { ComponentStory, ComponentMeta } from "@storybook/react";
import getPlaceholderImage from "../../helpers/getPlaceholderImage";
import Component from "./info-1";

const icon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    >
    <path
      fill="currentColor"
      d="M16.71 4.294a1 1 0 00-1.416 0C12.808 6.776 10.06 8 7 8a1 1 0 00-1 1v6.002c0 6.438 3.282 10.814 9.684 12.946a.999.999 0 00.632 0C22.716 25.816 26 21.44 26 15.002V9a1 1 0 00-1-1c-3.062 0-5.81-1.22-8.29-3.706zm4.998 8a1 1 0 010 1.414l-6 6a1 1 0 01-1.416 0l-3-3a1.001 1.001 0 111.416-1.416L15 17.586l5.292-5.292a1 1 0 011.416 0z"
    ></path>
  </svg>
`;

export default {
  title: "Modules/Info 1",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Why you should start diet",
  image: getPlaceholderImage(400, 400, "000000", "ffffff"),
  body: "If you haven’t found an exact reason why you should lose weight, then the following five reasons could be a consideration:",
  list: [
    {
      title: "Avoiding dangerous diseases",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: icon,
    },
    {
      title: "Build a better body",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: icon,
    },
    {
      title: "Better sleep quality",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: icon,
    },
    {
      title: "Make heart more healthier",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: icon,
    },
    {
      title: "Make the mood better",
      body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
      icon: icon,
    },
  ],
};
