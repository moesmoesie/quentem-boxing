import ButtonType from "./button.type";

const Button: React.FC<ButtonType> = (props) => {
  return <button className="text-3xl">{props.children}</button>;
};

export default Button;
