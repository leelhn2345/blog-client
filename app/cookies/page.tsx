import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  return (
    <div>
      {cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))}
    </div>
  );
}
