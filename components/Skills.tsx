type SkillProps = {
  name: string;
  percent: number;
};

export default function Skills({ name, percent }: SkillProps) {
  return (
    <div className="flex flex-col items-center">

      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(#38bdf8 ${percent}%, #e5e7eb ${percent}%)`,
        }}
      >
        <div className="absolute w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {percent}%
        </div>
      </div>

      <p className="text-sm mt-2">{name}</p>

    </div>
  );
}