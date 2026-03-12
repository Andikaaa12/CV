import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="p-6 md:p-8">

      <div className="text-center mb-8">
       <Image
  src="/image/fotoCv.jpg"
  alt="profile"
  width={140}
  height={140}
  className="mx-auto rounded-lg object-cover"
/>

        <h1 className="text-xl md:text-2xl font-bold mt-4">
          Andika Dwiguna
        </h1>

        <p className="text-sm text-gray-200">
          Web Developer
        </p>
      </div>

      {/* CONTACT */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-lg font-semibold mb-2">Contact</h2>

        <a
          href="mailto:andikadwiguna92@gmail.com"
          className="block hover:text-blue-300"
        >
          Email: andikadwiguna92@gmail.com
        </a>

        <a
          href="https://wa.me/6283825994443"
          target="_blank"
          className="block hover:text-green-400"
        >
          Phone: 083825994443
        </a>

      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 justify-items-center md:justify-items-start">

          <div className="skill-circle">HTML</div>
          <div className="skill-circle">CSS</div>
          <div className="skill-circle">JS</div>
          <div className="skill-circle">Next.js</div>

        </div>

      </div>
    </div>
  );
}