import Head from "next/head";
import { Header } from "./modules/header";
import { HomeLanding } from "./modules/home-landing";

export const Page: React.FC<any> = (props) => {
  return (
    <div>
      <Head>
        <title>{props?.seo?.title ?? ""}</title>
        <meta name="description" content={props?.seo?.description ?? ""} />
        <meta name="keywords" content={props?.seo?.keywords ? "" : ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {props?.modules &&
          props.modules?.map((module: any, index: number) => {
            switch (module._type) {
              case "header":
                return <Header key={index} {...module} />;
              case "home-landing":
                return <HomeLanding key={index} {...module} />;
              default:
                return <div key={index}>Module not found : {module._type}</div>;
            }
          })}
      </div>
    </div>
  );
};
