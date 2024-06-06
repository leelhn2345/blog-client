import { SparklesCore } from "../ui/sparkles";

export function SparklesBackground() {
  return (
    <div className="absolute inset-0 -z-50 h-screen w-full">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={50}
        className="h-full w-full"
        particleColor="#115e59"
      />
    </div>
  );
}
