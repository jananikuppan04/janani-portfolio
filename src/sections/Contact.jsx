import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { person } from "../data/portfolioData";

function Contact() {
  const [status, setStatus] = useState("idle");

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const description = String(data.get("description") || "").trim();
    if (!name || !email || !description) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${data.get("service") || "Not selected"}\n\nProject details:\n${description}`,
    );
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-shell reveal">
        <div className="contact-copy">
          <p className="section-eyebrow">08 / Start a conversation</p>
          <h2>Have an idea worth <em>building?</em></h2>
          <p>Let’s turn it into a reliable web product or an intelligent AI experience.</p>
          <div className="contact-details">
            <a href={`mailto:${person.email}`}><Mail size={18} /><span><small>Email</small>{person.email}</span></a>
            <a href={person.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LinkedIn</small>/in/jananikuppan</span></a>
            <a href={person.github} target="_blank" rel="noreferrer"><Github size={18} /><span><small>GitHub</small>/jananikuppan04</span></a>
            <div><MapPin size={18} /><span><small>Location</small>{person.location}</span></div>
          </div>
          <div className="contact-availability"><i />{person.availability}</div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-grid">
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
            <label>Required service
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>AI Chatbot / RAG Assistant</option><option>Full-Stack Application</option>
                <option>Java / Spring Boot Backend</option><option>MVP Development</option>
              </select>
            </label>
            <label className="full-field">Project description
              <textarea name="description" required rows="6" placeholder="Tell me about the problem, users and expected result." />
            </label>
          </div>
          <button className="button button-accent form-submit" type="submit">Send project enquiry <Send size={17} /></button>
          {status === "success" && <p className="form-message success"><CheckCircle2 size={16} />Your email application has been opened.</p>}
          {status === "error" && <p className="form-message error">Complete your name, email and project description.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
