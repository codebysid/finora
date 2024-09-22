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
import BudgetDialog from "./BudgetDialog";

const { month, year } = getCurrentMonthAndYear();
const navItems = new Set([
  {
    id: 3,
    title: "Set budget",
    icon: (
      <BudgetDialog
        triggerText={
          <p className="hidden lg:block lg:text-xl whitespace-nowrap hover:underline hover:underline-offset-8">
            Set Budget
          </p>
        }
        triggerIcon={<WalletMinimal className="lg:hidden navItemIcon" />}
      />
    ),
    dialog: true,
  },
  {
    id: 1,
    title: "Add transaction",
    icon: <BadgePlus className="navItemIcon" />,
    link: "/add",
  },
  {
    id: 2,
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
                      dialog={item?.dialog}
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
