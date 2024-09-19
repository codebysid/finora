import React, { act, ReactNode } from "react";

interface INavItem {
  title?: string;
  icon?: ReactNode;
  active?: boolean;
}

function NavItem({ title, icon, active }: INavItem) {
  return (
    <div
      className={`flex flex-col justify-center items-center p-2 rounded-full lg:hover:underline underline-offset-8 ${
        active && " "
      }`}
    >
      <p className="hidden lg:block lg:text-xl whitespace-nowrap">{title}</p>
      <div className=" lg:hidden">{icon && icon}</div>
    </div>
  );
}

export default NavItem;
