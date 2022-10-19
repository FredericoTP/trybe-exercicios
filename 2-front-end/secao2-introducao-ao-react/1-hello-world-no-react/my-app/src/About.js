import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Frederico Tavares Pessoa</h1>
        <p className="text">Gosto muito de jogos, tecnologia, engenharia, fotografia, programação e astronomia. No momento estou migrando de área como estudante de Desenvolvimento Web Full Stack na Trybe.</p>
        <h2 className="title">Minhas Habilidades</h2>
        <ul className="text">
          <li>Unix & Bash</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    )
  }
}

export default About;