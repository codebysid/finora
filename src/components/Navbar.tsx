import { BadgePlus, Goal, TableOfContents, WalletMinimal } from "lucide-react";
import React from "react";
import NavItem from "./NavItem";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

import Link from "next/link";
import { getCurrentMonthAndYear } from "@/utils/helper";

const { month, year } = getCurrentMonthAndYear();
const navItemIconStyles = "w-6 h-6";
const navItems = new Set([
  {
    id: 2,
    title: "Set Goal",
    icon: <Goal className={navItemIconStyles} />,
  },
  {
    id: 3,
    title: "Set budget",
    icon: <WalletMinimal className={navItemIconStyles} />,
  },
  {
    id: 1,
    title: "Add transaction",
    icon: <BadgePlus className={navItemIconStyles} />,
    link: "/add",
  },
  {
    id: 4,
    title: "All Transactions",
    icon: <TableOfContents />,
    link: `/allTransactions/${month}/${year}`,
  },
]);

function Navbar() {
  return (
    <nav className="fixed bottom-0 lg:absolute lg:top-10 lg:h-max bg-secondary lg:bg-primary p-2 lg:left-[50%] lg:-translate-x-[50%] md:left-[40%] md:-translate-x-[40%] lg:rounded-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex flex-row items-center justify-around lg:justify-center lg:gap-6 w-[100vw] lg:w-[40%]">
            {[...navItems].map((item) => {
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
