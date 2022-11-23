import { ComponentStory, ComponentMeta } from "@storybook/react";
import getPlaceholderImage from "../../helpers/getPlaceholderImage";

import { Testimonial as Component } from "./testimonial";

export default {
  title: "Modules/Testimonial",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Businessman",
  name: "John Michael Santos",
  body: "Dietin helps me run a healthy and good diet, in addition to helping me get a good body, I become healthier and happy",
  image: getPlaceholderImage(400, 400, "808080", "ffffff"),
};
