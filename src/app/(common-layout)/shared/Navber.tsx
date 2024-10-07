"use client";
import { logOut } from "@/utils/logout";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Cog } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string; // Added role to user type
  };
};

export default function NavBar({ session }: { session: UserProps | null }) {
  console.log("Get user information in the navbar menu:", session?.user);

  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
  };

  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        <Link className="flex" href="/">
          <Cog />
          <p className="font-bold text-inherit px-4">APOLLO GEARS</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/posts">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/register" aria-current="page">
            Register
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/profile" aria-current="page">
            profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          {session?.user?.role && (
            <Link href={routeMap[session.user.role]}>Dashboard</Link>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {session?.user ? (
          <NavbarItem>
            <Button
              onClick={() => {
                signOut({ callbackUrl: "/" });
                logOut();
              }}
              color="primary"
              variant="flat"
            >
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login" passHref>
              <Button color="primary" variant="flat">
                Login
              </Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
