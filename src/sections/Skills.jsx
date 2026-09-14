import { BrainCircuit, Code2, Cpu, Database, Server, Wrench } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { skillGroups } from "../data/portfolioData";

const icons = [BrainCircuit, Cpu, Code2, Server, Database, Wrench];

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        eyebrow="05 / Technical capabilities"
        title="A modern stack, organised by evidence."
        copy="No fake percentage bars—just the tools I use, learn and apply."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] || Code2;
          return (
            <article className="skill-card panel reveal" key={group.name}>
              <header><Icon size={20} /><div><h3>{group.name}</h3><span>{group.level}</span></div></header>
              <div className="chip-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
