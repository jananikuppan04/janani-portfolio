import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Github,
  Linkedin,
  Mail,
  Network,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { person } from "../data/portfolioData";

function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="hero-copy animate-fade-up">
        <div className="availability"><i />SIH 2025 Winner · Available for internships & collaborations</div>
        <h1>Hi, I’m <em>Janani Kuppan.</em></h1>
        <h2>AI/ML & Full-Stack Developer</h2>
        <p>
          SIH 2025 Winner building AI/ML models, computer-vision systems, RAG assistants,
          and full-stack web applications that solve real-world problems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore My Work <ArrowRight size={17} /></a>
          <a className="button button-secondary" href="#contact">Hire Me for a Project <ArrowRight size={17} /></a>
        </div>
        <div className="hero-socials">
          <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={`mailto:${person.email}`} aria-label="Email"><Mail /></a>
          <a className="resume-link" href={person.resume} download>Download Resume</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-orbit" />
        <div className="portrait-card">
          {imageFailed ? (
            <div className="portrait-placeholder">
              <span>JK</span>
              <small>Add your image at<br />public/images/janani-professional.png</small>
            </div>
          ) : (
            <img
              src="/images/janani-professional.png"
              alt="Janani Kuppan in professional attire"
              onError={() => setImageFailed(true)}
            />
          )}
          <div className="portrait-label"><span>Building practical products</span><small>Kanchipuram · India</small></div>
        </div>

        <div className="floating-card intelligence-card">
          <div><BrainCircuit size={19} /></div>
          <span><small>Intelligence layer</small><strong>Grounded AI</strong></span>
          <i />
        </div>

        <div className="floating-card system-card">
          <p><Network size={17} />Knowledge system <Check size={16} /></p>
          <div className="signal-bars"><i /><i /><i /><i /></div>
          <div className="system-tags"><span>Web</span><span>API</span><span>Data</span></div>
        </div>

        <div className="floating-card response-card"><Bot size={17} />Ask, retrieve, respond<Sparkles size={16} /></div>
      </div>
    </section>
  );
}

export default Hero;
