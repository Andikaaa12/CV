import Image from "next/image";


export default function Sidebar() {
  return (
    <div className="p-8">

      <div className="text-center mb-10">
        <Image
          src="/image/fotoCv.jpg"
          alt="profile"
          width={140}
          height={140}
          className="rounded-full mx-auto"
        />

        <h1 className="text-2xl font-bold mt-4">
          Andika Dwiguna
        </h1>

        <p className="text-sm text-gray-200">
          Web Developer
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Contact</h2>

        <p>Email: andikadwiguna92@Gmail.com</p>
        <p>Phone: 083825994443</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Skills</h2>

        <div className="grid grid-cols-2 gap-2">

          <div className="skill-circle">HTML</div>
          <div className="skill-circle">CSS</div>
          <div className="skill-circle">JS</div>
          <div className="skill-circle">Next.js</div>

        </div>

      </div>
    </div>
  );
}