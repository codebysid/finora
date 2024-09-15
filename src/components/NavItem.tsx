import React, { act, ReactNode } from "react";

interface INavItem {
  title?: string;
  icon?: ReactNode;
  active?: boolean;
}

function NavItem({ title, icon, active }: INavItem) {
  return (
    <div
      className={`flex flex-col justify-center items-center p-2 ${
        active && " rounded-full bg-primary"
      }`}
    >
      <div>{icon && icon}</div>
    </div>
  );
}

export default NavItem;