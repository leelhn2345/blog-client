"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JobExperience, TJobExperience } from "./job-experience";
import { Projects, TProject } from "./projects";
import { Skills, SkillsSection } from "./skills";

export type ResumeProps = {
  aboutMe: string[];
  jobExperiences: TJobExperience[];
  projects: TProject[];
  skills: SkillsSection;
};

export function Resume({
  aboutMe,
  jobExperiences,
  projects,
  skills,
}: ResumeProps) {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-bold">
          About Me
        </AccordionTrigger>
        <AccordionContent className="pr-2 text-justify">
          <div className="space-y-4">
            {aboutMe.map((me, i) => (
              <p key={i}>{me}</p>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-bold">
          Skills
        </AccordionTrigger>
        <AccordionContent className="pr-2 text-justify">
          <Skills skills={skills} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-bold">
          Experiences
        </AccordionTrigger>
        <AccordionContent className="pr-2">
          <JobExperience data={jobExperiences} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-bold">
          Projects
        </AccordionTrigger>
        <AccordionContent className="pr-2">
          <Projects data={projects} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
