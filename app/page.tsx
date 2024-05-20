import { TreePine } from "lucide-react";

export default function Home() {
  return (
    <div className="container my-8 flex flex-col items-center justify-center text-center">
      <h1
        className="animate-gradient bg-gradient-to-br from-orange-500 to-teal-800 bg-clip-text pb-2
          text-4xl font-bold text-transparent lg:text-5xl"
      >
        Digital Garden
      </h1>
      <TreePine className="h-48 w-48 animate-tree lg:h-64 lg:w-64" />
      <div className="mt-2 space-y-4">
        <p className="font-semibold">
          This site serves as a software experimental test bed.
        </p>
        <p>And</p>
        <p>
          Whence comes the name{" "}
          <span className="font-semibold italic">Digital Garden</span> ?
        </p>
      </div>
    </div>
  );
}
