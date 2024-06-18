"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import ThemeSwitcher from "@/app/(work)/(components)/components/ThemeSwitcher";
import UserTime from "@/app/(work)/(components)/components/UserTime";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <Link className="pe-5 text-black dark:text-white" href="/">
            Frontend
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            }`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/products"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            }  `}
            href="/products"
          >
            products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/docs"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/docs"
          >
            docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/dashboard"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/dashboard"
          >
            dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/about"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/about"
          >
            about
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/complex-dash"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/complex-dash"
          >
            complex-dash
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/f1"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/f1"
          >
            f1
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/product-detail"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/product-detail"
          >
            product-detail
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/server-route"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/server-route"
          >
            server-route
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/fetchData"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            } `}
            href="/fetchData"
          >
            fetchData
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden items-center gap-5 sm:flex">
          <UserTime />
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
