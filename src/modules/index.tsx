import { HomeLanding } from "../modules/home-landing/home-landing";
import Contact from "../modules/contact/contact";

import { HomeLandingZod } from "../modules/home-landing/home-landing.type";
import { ContactZod } from "../modules/contact/contact.type";
import { z } from "zod";

const Module: React.FC<z.infer<typeof ModuleZod>> = (props) => {
  switch (props._type) {
    case "home-landing":
      return <HomeLanding {...props} />;
    case "contact":
      return <Contact {...props} />;
  }
};

export default Module;

export const ModuleZod = z.union([HomeLandingZod, ContactZod]);
