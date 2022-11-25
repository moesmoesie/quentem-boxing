import { Container } from "../../components/container";
import { GalleryType } from "./gallery.types";
import Image from "next/image";
import { motion } from "framer-motion";
import Carousel from "../../components/carousel/carousel";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const x = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export const Gallery: React.FC<GalleryType> = (props) => {
  return (
    <section>
      <Container>
        <div className="medium:hidden">
          <motion.div variants={container} initial="hidden" viewport={{ once: true }} whileInView={"show"}>
            <Carousel gap="25px">
              {props.images.map((image, index) => {
                return (
                  <motion.div variants={x} transition={{ duration: 0.5 }} key={index}>
                    {image.image && <Image {...image.image} className="w-[350px] max-w-[80vw] rounded-md h-[350px] object-cover" />}
                  </motion.div>
                );
              })}
            </Carousel>
          </motion.div>
        </div>

        <motion.div variants={container} initial="hidden" viewport={{ once: true }} whileInView={"show"} className="medium:grid hidden grid-cols-7 gap-2 h-[800px] grid-rows-3">
          {props.images.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={x}
                transition={{ duration: 0.5 }}
                style={{
                  gridRow: `span ${item.row}`,
                  gridColumn: `span ${item.col}`,
                }}
              >
                <Item image={item.image} />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

const Item: React.FC<{ image?: any }> = (props) => {
  return (
    <motion.div
      whileHover={{
        opacity: 1,
      }}
      initial={{ opacity: 0.6 }}
      className={`overflow-hidden w-full h-full border border-gray-100/20 rounded-md`}
    >
      {props.image ? <Image className="w-full h-full object-cover" {...props.image} /> : null}
    </motion.div>
  );
};
