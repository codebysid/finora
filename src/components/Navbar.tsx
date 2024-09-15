import { BadgePlus, Goal, WalletMinimal } from "lucide-react";
import React from "react";
import NavItem from "./NavItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

const navItemIconStyles = "w-10 h-10";
const navItems = [
  {
    id: 2,
    title: "Set Goal",
    icon: <Goal className={navItemIconStyles} />,
  },
  {
    id: 1,
    title: "Add transaction",
    icon: <BadgePlus className={navItemIconStyles} />,
    link: "/add",
  },
  {
    id: 3,
    title: "Set budget",
    icon: <WalletMinimal className={navItemIconStyles} />,
  },
];

function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-secondary p-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex flex-row items-center justify-around w-[100vw]">
            {navItems.map((item) => {
              return (
                <NavigationMenuLink key={item.id} asChild>
                  <Link href={item.link || "#"}>
                    <NavItem
                      icon={item.icon}
                      title={item.title}
                      active={item.id === 1}
                    />
                  </Link>
                </NavigationMenuLink>
              );
            })}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
