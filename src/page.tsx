import Head from "next/head";
import { Header } from "./modules/header";
import { HomeLanding } from "./modules/home-landing";

export const Page: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Quentem</title>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Boxing, Personal Trainer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header logo="Quentem" />
      <HomeLanding
        title="Transforming your Body Shape with Diet"
        subtitle="_MyBodyGoals"
        body="Change your body shape according to your dreams with a healthy diet plan from the worlds best nutritionist"
        background={{
          src: "/images/background.png",
          alt: "Quentem",
          title: "Quentem",
          width: 1000,
          height: 1000,
        }}
      />
    </div>
  );
};
