import { motion } from "framer-motion";
import Button from "../../components/button/button";
import Container from "../../components/container/container";
import Image from "next/image";
import { HomeLandingType } from "./home-landing.types";

export const HomeLanding: React.FC<HomeLandingType> = (props) => {
  return (
    <section className="relative h-[100vh] text-white">
      <Container>
        <motion.div
          className="absolute transition-none h-[108vh] w-full right-0"
          initial={{
            opacity: 0,
          }}
          animate={{
            transition: {
              duration: 1,
              delay: 0.1,
            },
            opacity: 0.8,
            y: 0,
          }}
        >
          {props?.background && <Image {...props.background} priority className="absolute object-cover h-full right-0" />}
        </motion.div>
        <div className="absolute top-1/2 -translate-y-[45%]">
          <div className="text-white">
            <div className="w-full relative flex flex-col text-left gap-8">
              <h1 className="font-black text-6xl uppercase drop-shadow-2xl medium:text-8xl max-w-2xl text-left">Quentem Mayweather</h1>
              <p className="max-w-[90%] medium:max-w-xl font-thin drop-shadow-2xl text-white text-xl">{props.body}</p>
              <div className="flex gap-6">
                {props?.callToAction1 && <Button className=" text-white ">{props.callToAction1.title}</Button>}
                {props?.callToAction2 && (
                  <Button intent={"outlined"} className=" text-white ">
                    {props.callToAction2.title}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
