import { Resume, ResumeProps } from "./resume";
import { ContactButtons } from "../../components/contact-buttons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import profileImage from "../../public/profile.jpg";
import { UnknownError } from "@/lib/exceptions";

async function getResume(): Promise<ResumeProps> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/resume`, {
      next: { revalidate: 3600 },
    });
    return res.json();
  } catch (_) {
    throw new UnknownError();
  }
}

export default async function AboutPage() {
  const res = await getResume();
  return (
    <div className="container my-8 md:grid md:grid-cols-4 md:gap-x-8">
      <section className="pt-4 text-center md:text-left">
        <div className="mb-8 pl-3">
          <Image
            width={200}
            priority
            className="mx-auto mb-6 rounded-3xl dark:border-2 dark:border-white md:mx-0"
            src={profileImage}
            alt="profile image"
          />
          <h1 className="mb-4 text-2xl font-bold">
            <span className="text-gray-400">Lee Lai Hon</span> Nelson
          </h1>
          <h3 className="mb-4">Software Engineer | Fullstack Developer</h3>
          <p className="text-sm">B.Eng | Electrical Engineering</p>
          <p className="text-sm">National University of Singapore</p>
        </div>
        <div className="mb-4 flex items-center justify-center md:mb-0 md:justify-start">
          <ContactButtons />
        </div>
      </section>
      <div className="text-left md:col-span-3">
        <Separator className="md:hidden" />
        <Resume
          aboutMe={res.aboutMe}
          jobExperiences={res.jobExperiences}
          projects={res.projects}
          skills={res.skills}
        />
      </div>
    </div>
  );
}
