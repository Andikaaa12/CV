import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-image">
        <Image
          src="/image/fotoCv.jpg"
          alt="profile"
          width={180}
          height={180}
        />
      </div>

      <h1>Hi, I'm Andika</h1>

      <h2>Frontend Developer</h2>

      <p>
        I build modern web applications using React and Next.js
      </p>
    </section>
  );
}