import { Container } from "../../components/container";
import { Info1Type } from "./info-1.types";
import Disclosure from "../../components/Disclosure/disclosure";
import Image from "next/image";

const Info1: React.FC<Info1Type> = (props) => {
  return (
    <section className="relative text-white">
      <Container>
        <div className="text-center mb-14 flex flex-col gap-5 items-center justify-center text-white">
          <h2 className="text-3xl  medium:text-4xl  font-sans font-bold">{props.title}</h2>
          <p className="text-gray-100 text-lg medium:text-xl max-w-xl">{props.body}</p>
        </div>

        <div className="flex justify-center large:gap-12">
          <div className="h-[300px] hidden large:block flex-1 overflow-hidden rounded-2xl bg-gray-100">
            <Image {...props.image} className="w-full h-full object-cover" />
          </div>
          <div className="w-full medium:w-[70%] large:w-[55%] flex flex-col gap-7">
            {props?.list?.map((item, index) => {
              return <Disclosure key={index} title={item.title} body={item.body} icon={<Image {...item.icon} className="w-full h-full object-contain" />} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Info1;