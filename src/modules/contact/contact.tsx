import ContactType from "./contact.type";

const Contact: React.FC<ContactType> = (props) => {
  return <section>{props.email}</section>;
};

export default Contact;
