import Image from "next/image";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-900 text-white md:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-extrabold pt-10 md:pt-0 mb-8">
          <span className="text-[#00EEFF] text-5xl font-extrabold">Our</span>{" "}
          Services
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6  md:gap-3">
          {/* Card 1: UX UI Designer */}
          <div className="bg-[#323846] p-6 text-xs md:py-8 md:px-4 duration-300 w-4/5 md:w-1/2 space-y-3 h-full rounded-xl hover:shadow-custom text-center">
            <Image
              src={"/paint3d.png"}
              alt="UI UX Design"
              width={60}
              height={60}
              className="text-cyan-500 text-4xl mx-auto"
            />
            <h3 className="text-xl font-semibold">UX UI Designer</h3>
            <p>
              I offer professional UX/UI design services focused on creating
              user-centered digital experiences. From user research and
              wireframing to visual design and prototyping, I create intuitive,
              aesthetically pleasing interfaces that ensure usability. I also
              provide responsive design for seamless experiences across devices,
              and usability testing to optimize the product based on real user
              feedback.
            </p>
            <br />
            <br />
            <br />
          </div>

          {/* Card 2: Web Development */}
          <div className="bg-[#323846] p-6 text-xs md:py-8 md:px-4 duration-300 shadow-xl w-4/5 md:w-1/2 space-y-3 h-full rounded-xl hover:shadow-custom text-center">
            <Image
              src={"/code.png"}
              alt="Coder"
              width={60}
              height={60}
              className="text-cyan-500 text-4xl mx-auto"
            />
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p>
              I provide web development services specializing in responsive,
              high-performance websites using modern technologies like HTML,
              CSS, JavaScript, and TypeScript. From building custom workflows to
              integrating APIs, I ensure fast, secure, and scalable solutions. I
              also offer SEO-friendly development for optimized, user-friendly
              web applications.
            </p>
            <br />
            <br />
            <br />
          </div>

          {/* Card 3: Next.js & React.js */}
          <div className="bg-[#323846] p-6 text-xs md:py-8 md:px-4 duration-300 shadow-xl w-4/5 mb-10 md:mb-0 md:w-1/2 space-y-3 h-full rounded-xl hover:shadow-custom text-center">
            <Image
              src={"/next.png"}
              alt="NextJS & ReactJS"
              width={130}
              height={60}
              className="text-cyan-500 text-4xl mx-auto"
            />
            <h3 className="text-xl font-semibold">Next.js & React.js</h3>
            <p>
              I offer expert Next.js and React.js development services to build
              dynamic, high-performance web applications. With in-depth
              server-side rendering (SSR) and API integration, I create
              SEO-friendly, scalable solutions. My focus is on delivering fast,
              interactive user interfaces using the power of React&apos;s
              component-based architecture and Next.js optimization
              capabilities.
            </p>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
