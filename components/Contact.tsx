export default function Contact() {
  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <div className="contact-container">

        <a 
          href="https://wa.me/6283825994443"
          target="_blank"
          className="contact-card"
        >
          <h3>WhatsApp</h3>
          <p>Chat me directly</p>
        </a>

        <a 
          href="mailto:andikadwiguna92@gmail.com"
          className="contact-card"
        >
          <h3>Gmail</h3>
          <p>Send me an email</p>
        </a>

        <a 
          href="https://github.com/@Andikaaa12"
          target="_blank"
          className="contact-card"
        >
          <h3>GitHub</h3>
          <p>View my projects</p>
        </a>

      </div>

    </section>
  );
}