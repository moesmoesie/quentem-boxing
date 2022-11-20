import Container from "../../components/container/container";
import { HeaderType } from "./header.types";

export const Header: React.FC<HeaderType> = (props) => {
  return (
    <header className="bg-black/80 text-white backdrop-blur-3xl  fixed top-0 w-full py-4 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <a className="text-2xl font-bold  top-0" href="/">
            {props.logo}
          </a>
          <nav className="hidden medium:block">
            <ul className="flex gap-20">
              {["Schema", "Nutritionist", "Program"].map((el, index) => {
                return (
                  <li key={index}>
                    <a className="text-md hover:underline " href="#">
                      {el}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
