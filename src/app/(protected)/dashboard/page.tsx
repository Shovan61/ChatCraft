import { onBoardUser } from "@/actions/users";
import React from "react";

async function Dashboardpage() {
 const user = await onBoardUser()
  return <div>Dashboardpage</div>;
}

export default Dashboardpage;
