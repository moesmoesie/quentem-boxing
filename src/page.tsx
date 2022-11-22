import Head from "next/head";
import { Contact } from "./modules/contact";
import { Header } from "./modules/header";
import { HomeLanding } from "./modules/home-landing";
import { Info1 } from "./modules/info-1";
import Spacer from "./modules/spacer/spacer";
import { PageType } from "./types";

export const Page: React.FC<PageType> = (props) => {
  return (
    <>
      <Head>
        <title>Quentem</title>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Boxing, Personal Trainer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {props?.content?.map((el, index) => {
          switch (el._type) {
            case "header":
              return <Header key={index} {...el} />;
            case "info-1":
              return <Info1 key={index} {...el} />;
            case "contact":
              return <Contact key={index} {...el} />;
            case "spacer":
              return <Spacer key={index} {...el} />;
            case "home-landing":
              return <HomeLanding key={index} {...el} />;
            default:
              return <p>Unknown Module Type</p>;
          }
        })}
      </main>
    </>
  );
};
