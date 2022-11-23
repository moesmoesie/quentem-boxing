import { Container } from "../../components/container";
import { Icon } from "../../components/icon";
import { FooterType } from "./footer.types";

export const Footer: React.FC<FooterType> = (props) => {
  return (
    <section className="relative text-white">
      <Container>
        <div className="max-w-sm mb-14 flex flex-col gap-5 text-white">
          <h2 className="text-3xl medium:text-4xl font-sans font-bold">{props.title}</h2>
          <p className="text-gray-100 text-lg medium:text-xl max-w-xl">{props.body}</p>
          <ul className="flex gap-8">
            {props.links?.map((link, index) => {
              return (
                <li key={index} className="hover:text-accent">
                  <a title={link.title} href={link.href}>
                    <Icon icon={link.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};
