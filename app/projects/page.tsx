import { Badge } from "@/components/ui/badge";
import { HoverEffect } from "@/app/projects/card-hover-effect";

async function getProjectList() {
  const res = await fetch(`${process.env.BACKEND_URL}/resume/projects/summary`);
  return res.json();
}
export default async function ProjectPage() {
  const data = await getProjectList();
  return (
    <div className="container pt-10">
      <div className="ml-4">
        <Badge>Member</Badge> means you need to sign up to use it
        {"'"}s functionalities.
        <br />
        <br />
        You can still enter the link to find out more about the project.
      </div>
      <HoverEffect items={data} />
    </div>
  );
}
