import { Resume } from "@/components/resume/Resume";
import { ContactButtons } from "../../components/ContactButtons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import profileImage from "../../public/profile.jpg";

export default function Home() {
  return (
    <div className="container my-8 md:grid md:grid-cols-4 md:gap-x-64">
      <div className="w-full pt-4 text-center md:text-left">
        <section className="md:fixed">
          <div className="mb-8 pl-3">
            <Image
              width={200}
              priority
              className="mx-auto mb-6 rounded-3xl dark:border-2 dark:border-white"
              src={profileImage}
              alt="profile image"
            />
            <h1 className="mb-4 text-2xl font-bold">
              <span className="text-gray-400">Lee Lai Hon</span> Nelson
            </h1>
            <h3 className="mb-4">Software Engineer</h3>
            <p className="text-sm">B.Eng | Electrical Engineering</p>
            <p className="text-sm">National University of Singapore</p>
          </div>
          <div className="mb-4 flex items-center justify-center md:mb-0">
            <ContactButtons />
          </div>
        </section>
      </div>
      <div className="text-left md:col-span-3">
        <Separator className="md:hidden" />
        <Resume />
      </div>
    </div>
  );
}