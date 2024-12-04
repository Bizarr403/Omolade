import Link from "next/link";

import "../app/globals.css";
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Nav() {
  return (
    <nav className="navbar">
      <div className="sicons">
        <Link
          href="https://wa.me/+2347015890395"
          target="blank"
          className="navlinksi"
        >
          <FaWhatsapp fill="white" size={25} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/omolade-dayo-ajayi/"
          target="blank"
          className="navlinksi"
        >
          <FaLinkedin fill="white" size={25} />
        </Link>
        <Link
          href="https://x.com/BizarroCodes"
          target="blank"
          className="navlinksi"
        >
          <FaTwitter fill="white" size={25} />
        </Link>
        <Link
          href="https://github.com/Bizarr403"
          target="blank"
          className="navlinksi"
        >
          <FaGithub fill="white" size={25} />
        </Link>
      </div>
      <Link href="/" className="navlinks">
        Home
      </Link>
       <Link href="/resume" className="navlinks">
        Resume
      </Link>
      <Link href="/about" className="navlinks">
        About Me
      </Link>
     
    </nav>
  );
}
