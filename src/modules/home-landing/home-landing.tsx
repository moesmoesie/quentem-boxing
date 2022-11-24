import Button from "../../components/button/button";
import Container from "../../components/container/container";
import Image from "next/image";
import { HomeLandingType } from "./home-landing.types";
import { motion } from "framer-motion";

export const HomeLanding: React.FC<HomeLandingType> = (props) => {
  return (
    <section>
      <Container>
        {props.background && (
          <motion.div
            className="absolute h-[108vh] w-full right-0"
            initial={{
              opacity: 0,
            }}
            animate={{
              transition: {
                duration: 2,
                delay: 0.1,
                type: "spring",
              },
              opacity: 0.8,
              y: 0,
            }}
          >
            <Image {...props.background} priority className="absolute object-cover h-full right-0 " />
          </motion.div>
        )}

        <div className="h-[108vh] min-h-[500px] relative text-white">
          <div className="w-full relative flex flex-col text-left gap-8 pt-44 ">
            <h1 className="font-black text-7xl uppercase drop-shadow-2xl medium:text-8xl max-w-2xl text-left">Quentem Mayweather</h1>
            <p className="max-w-xl font-thin drop-shadow-2xl text-white text-xl">{props.body}</p>
            <div className="flex gap-6">
              <Button className=" text-white ">{props.callToAction1.title}</Button>
              <Button intent={"outlined"} className=" text-white ">
                {props.callToAction2.title}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
