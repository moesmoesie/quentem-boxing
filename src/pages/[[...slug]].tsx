import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { getClient } from "../sanity/sanity.server";
import { filterDataToSingleItem } from "../helpers/filterDataToSingleItem";

import { Page } from "../page";
import { lazy } from "react";
import { PreviewSuspense } from "next-sanity/preview";

const PreviewPage = lazy(() => import("../previewPage"));

const Home: React.FC<Props> = (props) => {
  if (props.preview) {
    return (
      <PreviewSuspense fallback={<Page {...props.page} />}>
        <PreviewPage query={props.query} params={props.queryParams} />
      </PreviewSuspense>
    );
  }

  return <Page {...props.page} />;
};

interface Props {
  page: any;
  preview: boolean;
  query: string;
  queryParams: any;
}

export default Home;

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

  const page: any = filterDataToSingleItem(data, preview);

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
        modules[]{
          _type,
          _id,
          ...select(


            _type == "home-landing" => {
              "title" : coalesce(title, "Title"),
              "subtitle" : coalesce(subtitle, "Subtitle"),
              "body" : coalesce(body, "Body"),
              background{
                defined(alt) => alt,
                defined(title) => title,
                ...asset->{
                  'src': url,
                  "width": metadata.dimensions.width,
                  "height": metadata.dimensions.height,
                }
              }
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
