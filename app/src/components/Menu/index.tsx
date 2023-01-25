import Links from "@/components/Links";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const menuDisplay = !menuActive ? "hidden" : "block";

  return (
    <>
      <Links className="hidden sm:flex" />
      <button 
        type="button" 
        onClick={() => setMenuActive(true)}
        className="sm:hidden"
      >
        <Bars3Icon className="text-neutral-050 h-6" />
      </button>
      <div
        className={`fixed top-0 left-0 right-0 h-full bg-neutral-op-050 flex justify-end ${menuDisplay}`}
      >
        <nav className="bg-neutral-150 w-2/3 h-full px-8 py-4 flex flex-col">
          <button 
            type="button" 
            onClick={() => setMenuActive(false)}
            className="w-full flex justify-end"
          >
            <XMarkIcon className="text-neutral-050 h-8" />
          </button>
          <Links direction="v"/>
        </nav>
      </div>
    </>
  );
}

