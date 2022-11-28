import { NextPage } from "next";
import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import config from "../../lib/sanity/config";

const studioConfig = defineConfig(config);

const Studio: NextPage = () => {
  return (
    <>
      <NextStudio config={studioConfig} />
    </>
  );
};

export default Studio;
