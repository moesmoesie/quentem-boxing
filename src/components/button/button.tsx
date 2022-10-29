import { cva, type VariantProps } from "class-variance-authority";

const button = cva("px-6 py-3 rounded-md hover:-translate-y-1 transition-transform text-xl", {
  variants: {
    intent: {
      primary: "bg-primary border border-primary",
      outlined: "border border-gray-100"
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonType extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  children: React.ReactNode;
}

 const Button: React.FC<ButtonType> = ({
  className,
  intent,
  children,
  ...props
}) => (
  <button className={button({ intent, class: className })} {...props} >
    {children}
  </button>
);

export default Button;
