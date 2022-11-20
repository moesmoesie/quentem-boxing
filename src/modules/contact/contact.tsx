import { ContactType } from "./contact.type";

export const Contact: React.FC<ContactType> = (props) => {
  return <section>{props.email}</section>;
};
