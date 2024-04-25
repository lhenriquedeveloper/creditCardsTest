"use client";

import NavDash from "../../components/navDash/navdash";
import Dashmenu from "../../components/dashMenu/dashmenu";
import { use } from "react";

export default function Dashboard() {
  return (
    <main>
      <NavDash />
      <Dashmenu />
    </main>
  );
}
