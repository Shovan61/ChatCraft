import { onBoardUser } from "@/actions/users";
import { redirect } from "next/navigation";

async function Dashboardpage() {
  const user = await onBoardUser();

  if (user.status === 200 || user.status === 201) {
    return redirect(`dashboard/${user.data?.firstName}-${user.data?.lastName}`);
  }

  return redirect("/sign-in");
}

export default Dashboardpage;
