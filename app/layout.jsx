// app/layout.js or app/layout.tsx
import Link from "next/link";
import "./globals.css"; 
import { IBM_Plex_Serif } from "next/font/google";
import { Lusitana } from "next/font/google";
import Image from "next/image";

const imbPlexSerif = IBM_Plex_Serif({ subsets: ["latin"] , weight :["400","700"] });
const lusitana = Lusitana({ subsets: ["latin"], weight:["400","700"] });

export const metadata = {
  title: "SpiderWebNest",
  description: "My personal website",
  icons: {
    icon: "/images/spiderwebfav.png",
  },
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
      <body>
        <header>SpiderWebNest</header>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/resume">Resume</Link>
        </nav>

        <div className="layout">
          <main>{children}</main>

          <aside className="sidebar">
            <h1>Find Me On</h1>
            <a href="https://github.com/aclrians">
              <Image src="/images/github-mark.png" alt="GitHub" width={20} height={20} className="icon" />
              GitHub
            </a><br />
            <a href="https://www.linkedin.com/in/adrian-brusil-romero-527b3928b/">
              <Image src="/images/InBug-Black.png" alt="LinkedIn" width={20} height={20} className="icon" />
              LinkedIn
            </a><br />
            <a href="https://x.com/spiderwebnest">
              <Image src="/images/logo-black.png" alt="Twitter" width={20} height={20} className="icon" />
              Twitter
            </a><br />
            <h1>Contact Me</h1>
            <a href="mailto:adrian@spiderwebnest.com">
              <Image src="/images/envelope.png" alt="E-Mail" width={20} height={20} className="icon" />
              E-Mail
            </a><br />
            <a href="https://discord.com/users/288873446585270272">
              <Image src="/images/icons8-discord-100.png" alt="Discord" width={20} height={20} className="icon" />
              Discord
            </a><br />
          </aside>
        </div>
      </body>
    </html>
  );
}