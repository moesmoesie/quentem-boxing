import { Disclosure as HD } from "@headlessui/react";

interface DisclosureProps {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const Disclosure: React.FC<DisclosureProps> = (props) => {
  return (
    <HD>
      <div className="text-white flex-col bg-[#151515] rounded-2xl flex">
        <HD.Button className="flex gap-8 items-center p-4">
          <div className="w-8 h-8 stroke-primary">{props.icon}</div>
          <p className="text-xl text-left font-medium">{props.title}</p>
          <div className="ml-auto transition-transform ui-open:rotate-45">
            <PlusIcon />
          </div>
        </HD.Button>

        <HD.Panel as="div" className="px-4 pb-4">
          <p className="text-[#A5A5A5]">{props.body}</p>
        </HD.Panel>
      </div>
    </HD>
  );
};

export default Disclosure;

const PlusIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="11.25" x2="24" y2="11.25" stroke="currentColor" stroke-width="1.5" />
      <line x1="12.75" y1="3.27835e-08" x2="12.75" y2="24" stroke="currentColor" stroke-width="1.5" />
    </svg>
  );
};
