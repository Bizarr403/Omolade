import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import git from "../components/images/git.svg";

import resume from "../components/images/resume.svg";
import { FaGithub, FaFile } from "react-icons/fa";
export default function Projects() {
  return (
    <main className="projectpage">
   
      <article className="projects">
        <Image src={git} alt="git" width={200} height={200} />
        <h1>Github</h1>

        <p>Check out my projects here</p>
        <Link href="https://github.com/Bizarr403">
          <FaGithub
            fill="black"
            size={30}
            style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}
          />
        </Link>
      </article>
      <article className="projects">
        <Image src={resume} alt="resume" width={200} height={200} />
        <h1>Resume</h1>

        <p>Check out my resume here</p>
        <Link href="https://rxresu.me/omolade/my-resume">
          <FaFile
            fill="black"
            size={30}
            style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}
          />
        </Link>
      </article>
    </main>
  );
}
