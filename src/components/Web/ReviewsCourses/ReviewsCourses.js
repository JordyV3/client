import React from "react";
// import { SkillsList } from "./assets/Skills.js";
import Section from "../Section/index.js";
import "./style.css";

export default function Skills({ skill }) {
  return (
    <Section title="Habilidades">
      <div className="main__skills__container">
        {skill.map((item, index) => (
          <article
            className="skills"
            style={{
              backgroundColor: item.background,
              color: item.color ? item.color : "white",
            }}
            key={index}
          >
            {item.name}
          </article>
        ))}
      </div>
    </Section>
  );
}
