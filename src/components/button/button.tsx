import { cva, type VariantProps } from "class-variance-authority";

const button = cva("medium:px-6 px-4 py-2 medium:py-3 text-white text-lg rounded-md hover:-translate-y-1 transition-transform medium:text-xl", {
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
