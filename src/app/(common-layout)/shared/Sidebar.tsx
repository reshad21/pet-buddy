"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

type userProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Sidebar = ({ session }: { session: userProps | null }) => {
  console.log("get user information-->", session);
  return (
    <div className="bg-slate-200 min-h-screen rounded-lg p-4 flex flex-col justify-between">
      <ul className="menu ">
        <li className="mb-2 text-center">
          <Link
            href="/dashboard"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <Link
            href="/dashboard/user-info"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>Create Post</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <Link
            href="/dashboard/user-info"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>My Profile</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <Link
            href="/dashboard/user-info"
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block  rounded-lg"
          >
            <span>Update Profile</span>
          </Link>
        </li>
        <li className="mb-2 text-center">
          <button
            onClick={() => {
              signOut({ callbackUrl: "/" });
            }}
            className="py-2 bg-sky-900 hover:bg-sky-950 text-white block w-full rounded-lg"
          >
            <span>LogOut</span>
          </button>
        </li>
      </ul>
      <Link
        href="/"
        className="py-2 bg-slate-800 text-white block  rounded-lg text-center"
      >
        <span>Back To Home</span>
      </Link>
    </div>
  );
};

export default Sidebar;
