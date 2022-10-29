import Button from "../../components/button/button";
import Container from "../../components/container/container";
import Image from "../../components/image/image";

const HomeLanding: React.FC<HomeLandingType> = (props) => {
  return (
    <div className="relative">
      <Container>
        <Image
          lazy={false}
          className=" right-0 left-0 pointer-events-none absolute medium:h-[100vh] h-[80vh] object-cover"
          width={2000}
          data={props.background ?? undefined}
        />
        <section className="medium:pt-[200px] pt-[160px] relative">
          <div className="mb-6 medium:mb-10">
            <p className="text-accent text-xl  medium:text-2xl">
              {props.subtitle}
            </p>
            <h1 className="text-5xl medium:text-6xl font-bold mb-3 max-w-[500px] leading-tight">
              {props.title}
            </h1>
            <p className="text-xl medium:text-2xl text-gray-100 max-w-md">
              {props.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 medium:gap-10">
            <Button>Wedstrijden</Button>
            <Button intent={"outlined"}>Lees Blog</Button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomeLanding;

import { z } from "zod";
import { ImageZod } from "../../types";

export const HomeLandingZod = z.object({
  _id: z.string(),
  _type: z.literal("home-landing"),
  title: z.string(),
  subtitle: z.string(),
  body: z.string(),
  background: ImageZod.nullable(),
});

export type HomeLandingType = z.infer<typeof HomeLandingZod>;
