import { Disclosure as HD } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface DisclosureProps {
  title: string;
  body: string;
  icon: React.ReactNode;
}

const Disclosure: React.FC<DisclosureProps> = (props) => {
  return (
    <HD>
      {({ open }) => (
        <div className="text-white flex-col bg-[#151515] rounded-2xl flex">
          <HD.Button className="flex gap-8 items-center p-4">
            <motion.div className="w-8 h-8 ui-open:text-primary transition-colors text-[#9BBE1A]">{props.icon}</motion.div>
            <p className="text-xl text-left font-medium">{props.title}</p>
            <div className="ml-auto transition-transform ui-open:rotate-45">
              <PlusIcon />
            </div>
          </HD.Button>

          <AnimatePresence>
            {open && (
              <HD.Panel static as="div">
                <motion.div className="px-4 overflow-hidden" layout initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[#A5A5A5] pb-6">
                    {props.body}
                  </motion.p>
                </motion.div>
              </HD.Panel>
            )}
          </AnimatePresence>
        </div>
      )}
    </HD>
  );
};

export default Disclosure;

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeWidth="1.5" d="M0 11.25L24 11.25"></path>
      <path stroke="currentColor" strokeWidth="1.5" d="M12.75 0L12.75 24"></path>
    </svg>
  );
}
