import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard"); // o "/dashboard" cuando haya auth
}
