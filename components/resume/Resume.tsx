import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Resume() {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold">About Me</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold">Skills</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold">Experiences</AccordionTrigger>
        <AccordionContent>
          <ol className="relative start-1.5 border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div
                className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200
                  dark:border-gray-900 dark:bg-gray-700"
              ></div>
              <div className="my-4 flex flex-col gap-2">
                <h2 className="text-lg">Company 1</h2>
                <div className="flex justify-between text-base">
                  <h4>Job occupation</h4>
                  <time className="mb-1 mr-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Feb 2022 - Present
                  </time>
                </div>
                <ul className="ml-8 mr-4 list-disc space-y-2 text-justify">
                  <li>responsibility 1</li>
                  <li>responsbility 2</li>
                  <li>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat.
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div
                className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200
                  dark:border-gray-900 dark:bg-gray-700"
              ></div>
              <div className="my-4 flex flex-col gap-2">
                <h2 className="text-lg">Company 2</h2>
                <div className="flex justify-between text-base">
                  <h4>Job occupation</h4>
                  <time className="mb-1 mr-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Feb 1922 - Jan 2022
                  </time>
                </div>
                <ul className="ml-8 mr-4 list-disc space-y-2 text-justify">
                  <li>responsibility 1</li>
                  <li>responsbility 2</li>
                  <li>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate. Culpa proident adipisicing id nulla nisi laboris
                    ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit
                    commodo ex non excepteur duis sunt velit enim. Voluptate
                    laboris sint cupidatat ullamco ut ea consectetur et est
                    culpa et culpa duis.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                    minim sint cillum sint consectetur cupidatat.
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-bold">Projects</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
