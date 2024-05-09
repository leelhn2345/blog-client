import { Resume } from "@/components/resume/Resume";
import { ContactButtons } from "../components/ContactButtons";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="my-8 md:grid md:grid-cols-4 md:gap-x-64">
      <div className="w-full pt-4 text-center md:text-left">
        <section className="md:fixed">
          <div className="pl-3">
            <h1 className="mb-4 text-xl font-bold">Lee Lai Hon Nelson</h1>
            <h3 className="mb-8 ">Software Engineer</h3>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <ContactButtons />
          </div>
        </section>
      </div>
      <div className="text-left md:col-span-3">
        <Separator />
        <Resume />
      </div>
    </div>
  );
}
