import { BrainCircuit, GraduationCap, ShieldCheck, Trophy } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";

function About() {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="01 / About"
        title="Engineering with purpose, learning by shipping."
        copy="I’m building depth across product engineering and applied AI—one practical system at a time."
      />
      <div className="about-grid">
        <article className="about-story panel reveal">
          <span className="panel-label">My direction</span>
          <p>
            I’m a Computer Science Engineering undergraduate and Smart India Hackathon (SIH 2025) Winner.
            I engineer production-focused AI/ML, computer-vision, RAG, and full-stack solutions—delivering
            real-world prototypes like TenderLens AI, HexaPathAI, and assistive mobility systems.
          </p>
          <div><ShieldCheck size={20} />Proven under national hackathon pressure: building deployable, benchmark-tested software.</div>
        </article>
        <article className="about-stat panel reveal">
          <GraduationCap size={25} />
          <strong>8.85</strong>
          <span>Current B.E. CGPA</span>
          <small>Computer Science & Engineering</small>
        </article>
        <article className="about-stat panel reveal">
          <Trophy size={25} />
          <strong>6+</strong>
          <span>Hackathon Honors</span>
          <small>SIH '25 Winner · MIT Finalist</small>
        </article>
        <article className="about-focus panel reveal">
          <div><BrainCircuit size={19} />Current focus</div>
          <p><span>AI/ML & Vision</span><span>IoT & Hardware Sensors</span><span>RAG Assistants</span><span>TenderLens AI</span><span>SwachhNet</span><span>Full-Stack Web</span></p>
        </article>
      </div>
    </section>
  );
}

export default About;
