import clsx from "clsx";
import { JSX } from "react";

interface ListItemProps {
  children: JSX.Element;
  className?: string;
}
const ListItem = ({ children, className }: ListItemProps) => {
  return (
    <li
      className={clsx(
        "grow py-3 border-gray-400 shadow-md shadow-gray-100 font-extrabold text-black  hover:text-gray-700 hover:shadow-none hover:decoration-wavy hover:underline focus:underline active:underline focus:decoration-wavy active:decoration-wavy active:text-black active:shadow-none text-center px-2 hover:bg-white focus:bg-white active:bg-white",
        className
      )}
    >
      {children}
    </li>
  );
};

export default function Header() {
  return (
    <header className="w-full">
      <nav>
        <ul className="flex flex-row justify-center list-none">
          <ListItem className="bg-gray-200/50 ">
            <a href="#Recent">Recent</a>
          </ListItem>
          <ListItem className="bg-amber-100/50 border-x-1">
            <a href="#knits-for-sale">Knits</a>
          </ListItem>
          <ListItem className="bg-green-200/50">
            <a href="#contacts">Contacts</a>
          </ListItem>
        </ul>
      </nav>
    </header>
  );
}
