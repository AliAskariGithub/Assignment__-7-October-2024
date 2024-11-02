// components/Hero.tsx

import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiTwitter, FiGithub, FiFacebook } from "react-icons/fi";
import About from "./About";
import Services from "./Services";
import Projects from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white px-10 py-10 md:px-20">
        <div className="container mx-auto flex flex-col-reverse items-center justify-center md:flex-row md:justify-between">
          <div className="space-y-4 text-center md:text-left md:w-1/2">
            <h1 className="text-xl font-extrabold md:text-2xl mt-5">
              Hello, It&apos;s Me <br />
              <span className="text-4xl md:text-6xl font-extrabold">
                Ali Askari
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl font-bold">
              And I&apos;m a{" "}
              <span className="text-[#00EEFF]">Full-Stack Developer</span>
            </h2>
            <p className="text-sm md:text-base">
              Ali Askari is an aspiring web developer with a strong foundation
              in Next.js & TypeScript. He is actively building skills through
              personal projects, including portfolios and tools like calculators
              and timers. With a keen interest in leveraging Gen-AI and Meta,
              Ali is committed to continuous learning.
            </p>
            <div className="flex justify-center md:justify-start space-x-10">
              <Link href="https://www.linkedin.com/in/ali-askari-355257308/">
                <FiLinkedin
                  className="text-white hover:text-cyan-500 duration-300"
                  size={24}
                />
              </Link>
              <Link href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09">
                <FiTwitter
                  className="text-white hover:text-cyan-500 duration-300"
                  size={24}
                />
              </Link>
              <Link href="https://github.com/AliAskariGithub">
                <FiGithub
                  className="text-white hover:text-cyan-500 duration-300"
                  size={24}
                />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61564881342854">
                <FiFacebook
                  className="text-white hover:text-cyan-500 duration-300"
                  size={24}
                />
              </Link>
            </div>
            <div>
              <Link href="/resumeCV.pdf">
                <p className="bg-[#00EEFF] text-white mt-5 px-6 py-2 rounded-full hover:bg-[#00B6C3] transition duration-300 inline-block">
                  Download CV
                </p>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-full overflow-hidden border-4 border-[#00B6C3] shadow w-48 h-48 md:w-96 md:h-96">
              <Image
                src="/Mypicture01.png"
                alt="Ali Askari"
                width={400}
                height={400}
                className="-mt-5 md:-mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Hero;
