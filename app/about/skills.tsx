"use client";
export type SkillsSection = {
  frameworks: string;
  languages: string;
  tools: string;
  others: string;
};
type SkillsProps = {
  skills: SkillsSection;
};
export function Skills({ skills }: SkillsProps) {
  return (
    <div className="space-y-4">
      <p className="text-gray-500">The lists here are non-exhaustive.</p>
      <h3 className="text-base font-bold italic">Languages</h3>
      <p>{skills.languages}</p>
      <h3 className="text-base font-bold italic">Frameworks</h3>
      <p>{skills.frameworks}</p>
      <h3 className="text-base font-bold italic">Tools</h3>
      <p>{skills.tools}</p>
      <h3 className="text-base font-bold italic">Others</h3>
      <p>{skills.others}</p>
    </div>
  );
}
