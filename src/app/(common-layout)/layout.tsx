import React from "react";
import Footer from "./shared/Footer";
import NavBar from "./shared/Navber";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
