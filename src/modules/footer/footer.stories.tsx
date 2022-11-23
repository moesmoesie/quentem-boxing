import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./footer";

const icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" > <path fill="#FEFEFE" d="M18.9 0H1.1A1.1 1.1 0 000 1.1v17.8A1.1 1.1 0 001.1 20h9.58v-7.75h-2.6v-3h2.6V7a3.64 3.64 0 013.88-4 20.26 20.26 0 012.33.12v2.7H15.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H13.8V20h5.1a1.102 1.102 0 001.1-1.1V1.1A1.101 1.101 0 0018.9 0z" ></path> </svg>';

export default {
  title: "Modules/Footer",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Dietin",
  body: "Dietin helps the health of the world throught the movement of healthy and best diets",
  links: [
    {
      title: "Facebook",
      href: "#",
      icon: icon,
    },
    {
      title: "Facebook",
      href: "#",
      icon: icon,
    },
    {
      title: "Facebook",
      href: "#",
      icon: icon,
    },
    {
      title: "Facebook",
      href: "#",
      icon: icon,
    },
  ],
};
