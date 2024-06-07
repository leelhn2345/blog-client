import Link from "next/link";

export type TProject = {
  name: string;
  url: string;
  description?: string[];
};

type ProjectProp = {
  data: TProject[];
};
export function Projects({ data }: ProjectProp) {
  return (
    <div className="mt-4">
      {data.map((x) => (
        <div key={x.name} className="mb-8">
          <Link
            href={x.url}
            className="text-base font-semibold hover:text-blue-800 hover:underline
              hover:underline-offset-4"
          >
            {x.name}
          </Link>
          <ul className="ml-5 mr-2 mt-4 list-disc space-y-2 text-justify">
            {x.description?.map((feat, num) => (
              <li key={x.name + num}>{feat}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
