import { ComponentStory, ComponentMeta } from "@storybook/react";

import Component from "./disclosure";

export default {
  title: "Components/Disclosure",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <div className="w-[500px]">
      <Component {...args} />;
    </div>
  );
};

const ShieldIcon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.71 4.29397C16.6171 4.20084 16.5068 4.12696 16.3853 4.07655C16.2638 4.02613 16.1335 4.00018 16.002 4.00018C15.8705 4.00018 15.7402 4.02613 15.6187 4.07655C15.4972 4.12696 15.3869 4.20084 15.294 4.29397C12.808 6.77597 10.06 7.99997 7 7.99997C6.73478 7.99997 6.48043 8.10533 6.29289 8.29286C6.10536 8.4804 6 8.73475 6 8.99997V15.002C6 21.44 9.282 25.816 15.684 27.948C15.8891 28.0164 16.1109 28.0164 16.316 27.948C22.716 25.816 26 21.44 26 15.002V8.99997C26 8.73475 25.8946 8.4804 25.7071 8.29286C25.5196 8.10533 25.2652 7.99997 25 7.99997C21.938 7.99997 19.19 6.77997 16.71 4.29397ZM21.708 12.294C21.8955 12.4815 22.0008 12.7358 22.0008 13.001C22.0008 13.2661 21.8955 13.5204 21.708 13.708L15.708 19.708C15.6151 19.8011 15.5048 19.875 15.3833 19.9254C15.2618 19.9758 15.1315 20.0018 15 20.0018C14.8685 20.0018 14.7382 19.9758 14.6167 19.9254C14.4952 19.875 14.3849 19.8011 14.292 19.708L11.292 16.708C11.1042 16.5202 10.9987 16.2655 10.9987 16C10.9987 15.7344 11.1042 15.4797 11.292 15.292C11.4798 15.1042 11.7344 14.9987 12 14.9987C12.2656 14.9987 12.5202 15.1042 12.708 15.292L15 17.586L20.292 12.294C20.3849 12.2008 20.4952 12.127 20.6167 12.0765C20.7382 12.0261 20.8685 12.0002 21 12.0002C21.1315 12.0002 21.2618 12.0261 21.3833 12.0765C21.5048 12.127 21.6151 12.2008 21.708 12.294Z"
        fill="#9BBE1A"
      />
    </svg>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Build a better body",
  body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
  icon: <ShieldIcon />,
};
