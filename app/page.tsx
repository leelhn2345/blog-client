import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TreePine } from "lucide-react";

const testimonials = [
  {
    quote: "Alaladin is so charming! I think I'm finally in love. 😍",
    name: "Juliet",
    title: "Romeo's Lover",
  },
  {
    quote: "Welcome to my garden! 😊 I hope you can find solace here.",
    name: "Alaladin",
    title: "Garden Owner 🧔🏿‍♂️",
  },
  {
    quote: "This place is filled with legendary Pokémon.",
    name: "Monkey D Luffy",
    title: "Super Saiyan",
  },
  {
    quote:
      "Contrary to popular beliefs, I know everything. I am actually omniscient!",
    name: "Jon Snow",
    title: "King in the north",
  },
  {
    quote: "What is a digital garden?",
    name: "Dobby",
    title: "Lost Elf",
  },
];
export default function Home() {
  return (
    <div className="container my-8 flex flex-col items-center justify-center gap-y-4 text-center">
      <div className="flex items-center">
        <TreePine className="h-24 w-24 animate-tree md:h-48 md:w-48" />
        <h1
          className="animate-gradient bg-gradient-to-br from-orange-500 to-teal-800 bg-clip-text pb-2
            text-4xl font-bold text-transparent md:text-6xl"
        >
          Digital Garden
        </h1>
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <div className="mt-2 space-y-4">
        <p className="font-semibold">This is a hobby experimental site.</p>
      </div>
    </div>
  );
}
