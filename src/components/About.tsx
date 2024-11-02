// components/AboutMe.tsx

import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id="about" className="bg-[#323846] w-full">
      <section className=" text-white px-10 py-10 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-full overflow-hidden border-4 border-[#00B6C3] shadow w-48 h-48 md:w-96 md:h-96">
              <Image
                src="/Mypicture02.png"
                alt="Ali Askari"
                width={800}
                height={800}
                className=""
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-extrabold">
              About{" "}
              <span className="text-[#00EEFF] text-4xl font-extrabold">Me</span>
            </h2>
            <h3 className="text-4xl font-extrabold text-[#00EEFF]">
              Frontend{" "}
              <span className="text-2xl font-extrabold text-white">
                {" "}
                Developer
              </span>
            </h3>
            <p>
              I am an enthusiastic frontend developer and UI/UX designer,
              dedicated to crafting intuitive, user-centric web applications. My
              expertise includes HTML, CSS, and TypeScript, allowing me to bring
              modern designs to life with responsive layouts and engaging user
              interfaces. While I am currently building my portfolio and honing
              my skills, I am eager to apply my knowledge to real-world
              projects.
            </p>
            <p>
              In addition to frontend development, I am expanding my expertise
              in generative AI, metaverse technologies, and custom ChatGPT
              integration. This exploration of cutting-edge fields enhances my
              versatility and helps me stay ahead of the curve in the rapidly
              evolving tech landscape. Although I&apos;m still gaining
              experience, I am committed to continual learning and growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
