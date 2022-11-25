import { ContactType } from "./contact.types";
import { Container } from "../../components/container";
import Image from "next/image";
import Button from "../../components/button/button";

export const Contact: React.FC<ContactType> = (props) => {
  return (
    <section className="text-white relative">
      <Container>
        <div className="text-center mb-14 flex flex-col gap-12 items-center justify-center text-white">
          <h2 className="text-3xl  medium:text-4xl  font-sans font-bold">{props.title}</h2>
          <div className="w-60 h-60 overflow-hidden rounded-full">
            <Image {...props.image} className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-100 font-light text-lg medium:text-xl max-w-xl">{props.body}</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Button>Stuur een email</Button>
            <Button intent={"outlined"}>Stuur een whatsapp</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
