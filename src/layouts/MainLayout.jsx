import React from "react";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <nav>Navbar</nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;
