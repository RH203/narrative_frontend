import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

export default function Layoutindex() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
