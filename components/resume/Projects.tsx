import Link from "next/link";

export type TProject = {
  name: string;
  url: string;
  features: string[];
};

type ProjectProp = {
  data: TProject[];
};
export function Projects({ data }: ProjectProp) {
  return (
    <>
      {data.map((x) => (
        <div key={x.name} className="mb-8">
          <Link
            href={x.url}
            className="text-base underline underline-offset-4 hover:text-emerald-800"
          >
            {x.name}
          </Link>
          <ul className="ml-5 mr-2 mt-4 list-disc space-y-2 text-justify">
            {x.features.map((feat, num) => (
              <li key={x.name + num}>{feat}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
  // return (
  //   <ul>
  //     {data.map((x) => (
  //       <div key={x.name} className="space-y-6">
  //         <li className="mb-8">
  //           <Link
  //             href="#"
  //             className="text-base underline underline-offset-4 hover:text-green-800"
  //           >
  //             {x.name}
  //           </Link>
  //           <ul className="ml-5 mr-2 list-disc space-y-2 text-justify">
  //             {x.features.map((feat, num) => (
  //               <li key={x.name + num}>{feat}</li>
  //             ))}
  //           </ul>
  //         </li>
  //       </div>
  //     ))}
  //   </ul>
  // );
}
