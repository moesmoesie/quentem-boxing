import { Container } from "../../components/container";
import { Icon } from "../../components/icon";
import { Info2Type, Info2ListItemsType } from "./info-2.types";
import Image from "next/image";

const Info2: React.FC<Info2Type> = (props) => {
  return (
    <section className="relative text-white">
      <Container>
        <div className="grid grid-cols-2">
          <div>
            <div className="text-left mb-14 flex flex-col gap-5 items-start justify-start text-white">
              <h2 className="text-3xl  medium:text-4xl  font-sans font-bold">{props.title}</h2>
              <p className="text-gray-100 text-lg medium:text-xl max-w-xl">{props.body}</p>
            </div>
            <div className="flex flex-col gap-9">
              {props.list.map((item, index) => {
                return <Item {...item} />;
              })}
            </div>
          </div>
          <div className="rounded-lg pl-14 overflow-hidden h-full">
            <Image className="h-full rounded-lg w-full object-cover" {...props.image} />
          </div>
        </div>
      </Container>
    </section>
  );
};

const Item: React.FC<Info2ListItemsType> = (props) => {
  return (
    <div className="flex gap-5">
      <div>
        <div
          style={{
            boxShadow: "0px 10px 16px rgba(0, 0, 0, 0.6)",
          }}
          className="w-[60px] bg-[#151515] text-accent grid place-items-center rounded-lg h-[60px]"
        >
          <Icon icon={props.icon} />
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold">{props.title}</p>
        <p className="text-lg text-[#A5A5A5]">{props.body}</p>
      </div>
    </div>
  );
};

export default Info2;
