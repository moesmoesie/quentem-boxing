import { PageType } from "./types";
import { SpacerType } from "./modules/spacer/spacer.types";

const spacer: SpacerType = {
  _type: "spacer",
  height: "100px",
};

export const data: PageType = {
  title: "Quentem",
  content: [
    {
      _type: "header",
      logo: "Quentem",
    },
    {
      _type: "home-landing",
      title: "Transforming your Body Shape with Diet",
      subtitle: "_MyBodyGoals",
      body: "Change your body shape according to your dreams with a healthy diet plan from the world’s best nutritionist",
      background: {
        alt: "Home Landing Background",
        width: 1080,
        height: 1080,
        title: "Home Landing Background",
        src: "/images/background.png",
      },
    },
    spacer,
    {
      _type: "info-1",
      title: "What is Lorem Ipsum?",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: {
        alt: "Info 1 Image",
        width: 1080,
        height: 1080,
        title: "Info 1 Image",
        src: "/images/yoga.png",
      },
      list: [
        {
          title: "Avoiding dangerous diseases",
          body: "Many people consider that diet is a diet by reducing the portion and type of food. But going on a diet is more than both points",
          icon: `<svg
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
          `,
        },
      ],
    },
  ],
};
