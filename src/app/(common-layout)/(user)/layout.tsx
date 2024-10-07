import React from "react";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>Profile page header</h1>
      <span>Sidebar</span>
      {children}
    </div>
  );
};

export default layout;
