import Container from "../../components/container/container";
import { TestimonialType } from "./testimonial.types";
import Image from "next/image";

export const Testimonial: React.FC<TestimonialType> = (props) => {
  return (
    <section className="text-white bg-[#101010]">
      <Container>
        <div className="grid grid-cols-5">
          <div className="rounded-lg  pr-10 hidden medium:block col-span-3 h-full">{props?.image && <Image className="h-[112%] -translate-y-[6%] rounded-lg w-full object-cover" {...props.image} />}</div>
          <div className="py-20 col-span-full medium:col-span-2">
            <Quote />
            <p className="text-3xl mt-14 mb-6">{props.body}</p>
            <div className="flex flex-col">
              <p className="text-accent text-lg font-medium">{props.name}</p>
              <p className="text-[#D18BFF] text-lg">{props.title}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Quote: React.FC = () => {
  return (
    <svg width="57" height="40" viewBox="0 0 57 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.403 39.434C51.8708 38.209 56.4514 32.4324 56.1371 25.897C55.9835 22.7022 54.7561 19.8491 52.5369 17.5278C50.8907 15.8058 48.9982 14.6443 46.8355 14.0284C46.3052 13.8775 45.8403 13.7228 45.8024 13.6848C45.6988 13.5812 46.3807 12.0441 47.1105 10.7356C48.0617 9.0305 49.0869 7.53167 50.6035 5.62878C51.7476 4.19336 51.9752 3.83839 52.0951 3.30285C52.3645 2.09886 51.8007 0.90894 50.6846 0.325814C49.7876 -0.142818 49.1499 -0.114696 47.4601 0.468079C38.8656 3.43152 33.0342 9.65793 30.878 18.1735C30.1588 21.0135 29.9938 22.3732 29.9901 25.4868C29.9877 27.6597 30.0267 28.3451 30.1917 29.0233C31.4246 34.0935 34.9689 37.8992 39.6778 39.2091C40.5894 39.4628 41.0761 39.5199 42.6434 39.557C43.9487 39.588 44.7872 39.5506 45.403 39.434ZM15.7362 39.3603C20.0328 38.4584 23.6474 35.462 25.2418 31.48C25.9965 29.5953 26.1049 28.9805 26.1128 26.5415C26.1194 24.4567 26.0993 24.2413 25.7967 23.1583C24.5371 18.6507 20.9674 15.0545 16.6557 13.9496C15.9562 13.7703 15.8137 13.6942 15.8433 13.5157C15.8631 13.3967 16.2206 12.6081 16.638 11.7634C17.5779 9.86113 19.1333 7.48328 20.6217 5.67355C21.9179 4.09726 22.1879 3.58914 22.1916 2.71937C22.1947 1.95648 21.9935 1.45527 21.4364 0.83863C20.4807 -0.219105 19.4088 -0.252385 16.8621 0.696834C6.19687 4.67207 0.0145241 13.8263 0.00128433 25.6626C-0.00141244 28.0975 0.0911703 28.7523 0.690936 30.539C2.22644 35.1131 6.11414 38.5533 10.7391 39.4307C12.0634 39.682 14.3577 39.6496 15.7362 39.3603Z"
        fill="#9BBE1A"
      />
    </svg>
  );
};
