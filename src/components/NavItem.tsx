import React, { act, ReactNode } from "react";

interface INavItem {
  title?: string;
  icon?: ReactNode;
  dialog?: boolean;
}

function NavItem({ title, icon, dialog = false }: INavItem) {
  return (
    <div
      className={`flex flex-col justify-center items-center p-2 rounded-full lg:hover:underline underline-offset-8`}
    >
      {dialog ? (
        <span>{icon && icon}</span>
      ) : (
        <>
          <p className="hidden lg:block lg:text-xl whitespace-nowrap">
            {title}
          </p>
          <div className=" lg:hidden">{icon && icon}</div>
        </>
      )}
    </div>
  );
}

export default NavItem;
