import { ComponentStory, ComponentMeta } from "@storybook/react";
import getPlaceholderImage from "../../helpers/getPlaceholderImage";
import Component from "./info-2";

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
  title: "Modules/Info 2",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Benefits of our program",
  image: getPlaceholderImage(400, 400, "808080", "ffffff"),
  body: "Healthy lifestyle with ideal weight is currently popular in society. But people may be confused to choose the type of diet, we will help you choose the program that is best for you:",
  list: [
    {
      title: "Diet without pain",
      body: "Whatever your problem, whatever your goals, our nutritionist's advice adapts to your daily activities and diet.",
      icon: icon,
    },
    {
      title: "Easy to apply",
      body: "The sampled menu is tailored to the commonly available and commonly used by you.",
      icon: icon,
    },
  ],
};
