
import { redirect } from "next/navigation";
export default function Home() {
  redirect("/Swap");
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      </main>
    </div>
  );
}
