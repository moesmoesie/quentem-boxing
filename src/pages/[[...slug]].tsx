import Head from "next/head";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { getClient } from "../sanity/sanity.server";
import { usePreviewSubscription } from "../sanity/sanity.helpers";
import { filterDataToSingleItem } from "../sanity/sanity.helpers";

// IMPORT MODULES
import { Header } from "../modules/header";
import { HomeLanding } from "../modules/home-landing";
import { Contact } from "../modules/contact";

const Page: React.FC<Props> = (props) => {
  const { data: previewData } = usePreviewSubscription(props.query, {
    params: props.queryParams ?? {},
    initialData: props.page,
    enabled: props.preview,
  });

  const page: PageType = filterDataToSingleItem(previewData, props.preview);

  return (
    <div>
      <Head>
        <title>{page.seo.title ?? ""}</title>
        <meta name="description" content={page.seo.description ?? ""} />
        <meta name="keywords" content={page.seo?.keywords ? "" : ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {page.modules &&
          page.modules.map((module, index) => {
            switch (module._type) {
              case "header":
                return <Header key={index} {...module} />;
              case "home-landing":
                return <HomeLanding {...module} />;
              case "contact":
                return <Contact {...module} />;
              default:
                return <div>Module not found : {module._type}</div>;
            }
          })}
      </div>
    </div>
  );
};

interface SeoType {
  title?: string;
  description?: string;
  keywords?: string[];
}

interface PageType {
  seo: SeoType;
  modules: any[];
}

interface Props {
  page: PageType;
  preview: boolean;
  query: string;
  queryParams: any;
}

export default Page;

// LOAD DATA

export async function getStaticPaths() {
  const data = await getClient(false).fetch(SlugQuery);

  return {
    paths: data,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  let slug = "/";

  if (params?.slug && Array.isArray(params.slug)) {
    slug += params.slug.join("/");
  }

  const queryParams = { slug };
  const data = await getClient(preview).fetch(PageQuery, queryParams);

  if (!data) return { notFound: true };

  const page: Props = filterDataToSingleItem(data, preview);

  return {
    props: {
      page: page,
      query: preview ? PageQuery : null,
      queryParams: preview ? queryParams : null,
      preview: preview ?? false,
    },
  };
};

// QUERY

const SlugQuery = groq`
  *[defined(slug.current)]{
      'params': {
        "slug": string::split(slug.current,"/")[@ != ""]
      }
  }
`;

const PageQuery = groq`
    *[slug.current == $slug]{
        _id,
        "seo" : {
          "title" : coalesce(title, "Title"),
          "description" : coalesce(description, "Description"),
          "keywords" : coalesce(keywords, [])
        },
        modules[]-> {
          _type,
          _id,
          ...select(
            _type == "home-landing" => {
              "title" : coalesce(title, "Title"),
              "subtitle" : coalesce(subtitle, "Subtitle"),
              "body" : coalesce(body, "Body"),
              "background":  coalesce(background.asset->, null)
            },
            _type == "contact" => {
              title,
              "email" : coalesce(email, "placeholder@email.com")
            },
            _type== "header" => {
              "logo" : coalesce(logo, "logo"),
            }
          ) 
        }
    }
`;
