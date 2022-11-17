export const Contact: React.FC<ContactType> = (props) => {
  return <section>{props.email}</section>;
};

export interface ContactType {
  title: string | null;
  email: string;
}
