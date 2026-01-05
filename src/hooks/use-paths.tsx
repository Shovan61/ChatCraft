import { usePathname } from "next/navigation";

export const usePaths = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const path = pathname.split("/");
  const page = path[path.length - 1];
  return { page, pathname };
};
