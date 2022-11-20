import { ContactType } from "./contact.types";

export const Contact: React.FC<ContactType> = (props) => {
  return <section className="text-white">{props.email}</section>;
};
