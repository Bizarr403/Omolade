import Image from "next/image";
import "../app/globals.css";
import coding from "./images/coding.svg";
import chilling from "./images/chilling.svg";
import tech from "./images/technologies used.svg";
export default function About() {
  return (
    <main className="about">
      <article className="text">
        <h1>INTRODUCTION</h1>
        <p>
          My name is Omolade and I am a fullstack developer. I just graduated
          from Babcock University with a second class upper degree in Software
          Engineering. I am all about hardwork and committment to seeing that
          the best is delievered always
        </p>
      </article>
      <Image src={coding} alt="dev" width={300} height={300} id="imgone" />
      <Image src={chilling} alt="dev" width={300} height={300} id="imgtwo" />
      <article className="text">
        <h1>Interests and Hobbies</h1>
        <p>
          When I am not writing code, I enjoy listening to music, watching
          movies, playing football and I love my fair share of Anime
        </p>
      </article>
      <article className="text">
        <h1>Technologies Used</h1>
        <p>
          I am well versed in HTML and CSS, Python(Django), JavaScript(NodeJS,
          ReactJS, NextJS). With this I look forward to working with you on your
          fuutre projects.
        </p>
      </article>
      <Image src={tech} alt="tech" width={300} height={300} id="imgthree" />
    </main>
  );
}
