import Link from "next/link";

export type TJobExperience = {
  companyName: string;
  companyUrl: string;
  timeSpan: string;
  occupation: string;
  responsibilities: string[];
};

type JobExperienceProp = {
  data: TJobExperience[];
};

export function JobExperience({ data }: JobExperienceProp) {
  return (
    <ol className="relative start-1.5 border-s border-gray-200 dark:border-gray-700">
      {data.map((x) => (
        <li key={x.companyName} className="mb-8 ms-4">
          <div
            className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200
              dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <div className="my-4 flex flex-col gap-2">
            <Link
              className="text-lg font-semibold hover:text-blue-900 hover:underline
                hover:underline-offset-4"
              target="_blank"
              href={x.companyUrl}
            >
              <h2>{x.companyName}</h2>
            </Link>
            <div className="flex justify-between text-base">
              <h4 className="italic">{x.occupation}</h4>
              <time className="mb-1 mr-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {x.timeSpan}
              </time>
            </div>
            <ul className="ml-5 mr-2 list-disc space-y-2 text-justify">
              {x.responsibilities.map((desc, num) => (
                <li key={x.companyName + num}>{desc}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
