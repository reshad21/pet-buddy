import React from "react";
import Footer from "./shared/Footer";
import NavBar from "./shared/Navber";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
