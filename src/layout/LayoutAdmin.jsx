import React from "react";
import { SideBar } from "../components";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div>
      <SideBar />
      <div className="w-full pl-24 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}
