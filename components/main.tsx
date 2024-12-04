import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaLink } from "react-icons/fa";
import dev from "../components/images/dev.svg";
export default function Main() {
  return (
    <main className="maincontent">
      <article className="intro">
        <div className="introtext">
          <h1> Turning Complex Code Into Seamless Solutions</h1>
          <p>
            Welcome! I am Lade, a passionate full stack developer dedicated to
            transforming ideas into robust, scalable applications. Explore my
            journey, skills, and projects.
          </p>
          <h2>
            Let us connect <FaLink />
          </h2>
        </div>
        <div className="icons">
          <Link href="https://wa.me/+2347015890395" target="blank">
            <FaWhatsapp fill="black" id="one" size={35} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/omolade-dayo-ajayi/"
            target="blank"
          >
            <FaLinkedin fill="black" id="two" size={35} />
          </Link>
          <Link href="https://x.com/BizarroCodes" target="blank">
            <FaTwitter fill="black" id="three" size={35} />
          </Link>
        </div>
      </article>

      <Image
        className="img"
        src={dev}
        alt="Dev Image"
        width={300}
        height={300}
      />
    </main>
  );
}
