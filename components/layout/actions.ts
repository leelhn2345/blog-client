import { cookies } from "next/headers";

export async function getAppearanceInfo() {
  // console.log(cookies().getAll());
  cookies().getAll();
}
