import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { person } from "../../data/portfolioData";

const suggestions = [
  "What can Janani build?",
  "What are her strongest skills?",
  "Is she available for internships?",
];

function answerQuestion(question) {
  const text = question.toLowerCase();
  if (text.includes("available") || text.includes("intern")) return person.availability;
  if (text.includes("achievement") || text.includes("hackathon") || text.includes("win") || text.includes("award") || text.includes("sih")) {
    return "Janani is an SIH 2025 Winner (Smart India Hackathon), 2nd Place Winner at HackHustle National Hackathon, 3rd Place at SA Hackathon 2026, MIT Hackathon Finalist, Quantum Hackathon PPT Qualifier, and TNWISE State Qualifier!";
  }
  if (text.includes("freelance") || text.includes("client") || text.includes("moto") || text.includes("m square") || text.includes("msquare")) {
    return "Janani delivered M Square Moto Parts as a real-world freelance client project—a high-conversion e-commerce platform with 1-click WhatsApp order routing, product catalog search, and 5.0 Google review integration.";
  }
  if (text.includes("hardware") || text.includes("iot") || text.includes("sensor")) {
    return "Janani possesses hands-on hardware and IoT expertise, integrating ultrasonic sensors, microcontroller nodes, and real-time Firebase telemetry into smart platforms like SwachhNet.";
  }
  if (text.includes("swachhnet") || text.includes("swatchhnet") || text.includes("tenderlens") || text.includes("vision") || text.includes("project")) {
    return "Janani’s featured projects include TenderLens AI (multimodal RFP tender intelligence), SwachhNet (smart waste IoT hardware network), M Square Moto Parts (freelance client e-commerce platform), ClientPilot AI, AgriConnect AI, and a Java Task System.";
  }
  if (text.includes("skill") || text.includes("technology")) {
    return "Janani specializes in Python, Computer Vision, OpenCV, IoT & Hardware Sensors, RAG systems, LLMs, React, Node.js, Java, Spring Boot, and PostgreSQL.";
  }
  if (text.includes("build") || text.includes("service")) {
    return "Janani builds AI/ML and computer-vision prototypes, IoT hardware sensor networks, RAG assistants, responsive full-stack applications, and robust backends.";
  }
  return "Ask me about Janani’s skills, projects (like TenderLens AI & SwachhNet), achievements (like SIH 2025), or availability.";
}

function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "assistant", text: "Hi — what would you like to know about Janani’s work?" },
  ]);

  function send(question) {
    const clean = question.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { type: "user", text: clean },
      { type: "assistant", text: answerQuestion(clean) },
    ]);
    setInput("");
  }

  return (
    <>
      <button
        className="assistant-launcher"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        {open ? <X size={19} /> : <MessageCircle size={19} />}
        <span>{open ? "Close" : "Ask Janani AI"}</span>
      </button>

      <aside className={`assistant-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <header>
          <div className="assistant-avatar"><Sparkles size={18} /></div>
          <div><strong>Ask Janani AI</strong><small>Portfolio assistant</small></div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant"><X /></button>
        </header>
        <div className="assistant-messages">
          {messages.map((message, index) => (
            <p className={message.type} key={`${message.text}-${index}`}>{message.text}</p>
          ))}
          {messages.length === 1 && (
            <div className="assistant-suggestions">
              {suggestions.map((item) => (
                <button type="button" onClick={() => send(item)} key={item}>{item}</button>
              ))}
            </div>
          )}
        </div>
        <form onSubmit={(event) => { event.preventDefault(); send(input); }}>
          <label className="sr-only" htmlFor="assistant-question">Ask about Janani</label>
          <input
            id="assistant-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about skills or projects…"
          />
          <button type="submit" aria-label="Send question"><Send size={17} /></button>
        </form>
      </aside>
    </>
  );
}

export default PortfolioAssistant;
