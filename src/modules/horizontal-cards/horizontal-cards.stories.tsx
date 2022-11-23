import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HomeLanding } from "./horizontal-cards";

export default {
  title: "Modules/Horizontal Cards",
  component: HomeLanding,
} as ComponentMeta<typeof HomeLanding>;

const Template: ComponentStory<typeof HomeLanding> = (args) => <HomeLanding {...args} />;

const icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" > <path fill="#9BBE1A" d="M24.344 13.89c-.078.227-.992 3.352-1.352 4.462 0 .007-.008.007-.008.015v.016c0 .008-.39.992 0 1.945a.5.5 0 01-.265.649.503.503 0 01-.649-.266c-.312-.758-.273-1.5-.18-2.016H11.806c-.235 1.578.515 2.938 1.218 3.82.961 1.227 1.493 2.797 1.493 4.43v6.352h9.257v-6.258c0-1.516.532-3.062 1.54-4.484.835-1.18 1.085-2.758 1.343-4.422.282-1.75.594-3.742 1.64-5.617.142-.274.032-.672-.288-.782-1.555-.53-3.125.547-3.664 2.157z" ></path> <path fill="#D18BFF" d="M26.375 10.71V8.954c0-.734-.57-1.305-1.305-1.305-.718 0-1.304.586-1.304 1.305v3.813c.593-1.04 1.539-1.79 2.609-2.055zm-6.203-2.702v4.773c0 .735.57 1.305 1.305 1.305.734 0 1.304-.57 1.304-1.305V8.008c0-.735-.57-1.305-1.304-1.305-.735 0-1.305.57-1.305 1.305zm-3.594 0v4.773c0 .719.586 1.305 1.305 1.305s1.305-.586 1.305-1.305V8.008c0-.719-.586-1.305-1.305-1.305s-1.305.586-1.305 1.305zm-2.305 5.883h.008c.735 0 1.305-.57 1.305-1.305v-2.68c0-.734-.57-1.304-1.305-1.304-.726 0-1.312.585-1.312 1.304v2.68c0 .719.586 1.305 1.304 1.305zm13.454 3.812h2.726v-4.625h-1.336c-.82 1.516-1.133 3.086-1.39 4.625zm10.515-7.867c-.969 0-1.75.789-1.75 1.75v7.594a1.76 1.76 0 001.758 1.758c.969 0 1.75-.79 1.75-1.75v-7.586c0-.985-.79-1.766-1.758-1.766zm-4.765 14.242a2.024 2.024 0 002.023-2.023V8.726c0-1.109-.906-2.023-2.023-2.023a2.024 2.024 0 00-2.024 2.024c.008 18.843 0-4.344 0 13.328 0 1.11.906 2.023 2.024 2.023zM3.507 11.602c0-.954-.757-1.766-1.757-1.766-.96 0-1.75.789-1.75 1.75v7.594c0 .968.79 1.758 1.758 1.758.969 0 1.75-.79 1.75-1.75v-7.586z" ></path> <path fill="#9BBE1A" d="M22.156 17.703c.258-.812.532-1.75.766-2.547.039-.14.078-.265.117-.39-.039-.079-.078-.149-.11-.235a2.28 2.28 0 01-1.452.54 2.272 2.272 0 01-1.797-.891c-.422.539-1.063.89-1.797.89-.774 0-1.461-.39-1.875-.984a2.273 2.273 0 01-1.719.797h-.008a2.302 2.302 0 01-2.242-1.805H9.547v4.625H22.156zM6.523 24.078a2.024 2.024 0 002.024-2.023V8.727c0-1.11-.914-2.024-2.024-2.024A2.024 2.024 0 004.5 8.727v13.328c0 1.11.914 2.023 2.023 2.023z" ></path> </svg>';

export const Default = Template.bind({});
Default.args = {
  title: "Trending Diet Plan",
  body: "Try popular plans that suit yourself",
  cards: [
    {
      title: "Keto Diet",
      body: "Ac tincidunt   vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: icon,
    },
    {
      title: "Keto Diet",
      body: "Ac tincidunt   vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: icon,
    },
    {
      title: "Keto Diet",
      body: "Ac tincidunt   vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: icon,
    },
    {
      title: "Keto Diet",
      body: "Ac tincidunt   vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: icon,
    },
  ],
};
