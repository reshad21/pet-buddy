import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import Footer from "./shared/Footer";
import NavBar from "./shared/Navber";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <NavBar session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
