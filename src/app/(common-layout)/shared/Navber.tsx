"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Cat } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function NavBar() {
  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
    driver: "/dashboard/driver",
  };

  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        <Link className="flex" href="/">
          <Cat />
          <p className="font-bold text-inherit px-4">PET BUDDY</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* {user && <Link href={routeMap[user?.role]}>Dashboard</Link>} */}
          <Link href={routeMap.user}>Dashboard</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/login" aria-current="page">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/register" aria-current="page">
            Register
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {/* {user ? (
          <NavbarItem>
            <Button onClick={logOutUser} color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )} */}
      </NavbarContent>
    </Navbar>
  );
}
