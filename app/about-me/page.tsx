import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="container-clamp spacing-clamp-xl">
        <h2 className="text-clamp-4xl font-sans font-bold text-center margin-clamp-lg">About Me</h2>

        <div className="flex flex-col md:flex-row items-start gap-clamp">
          {/* Profile Picture */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="rounded-3xl aspect-square overflow-hidden shadow-lg">
              <Image
                src="/about-me/profile-picture.png"
                alt="Jucal Asitok - Profile Picture"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3">
            <p className="font-mono text-clamp-base leading-relaxed">
              Hi! I am Jahakeme, but you can just call me Jucal (both names mean the same thing). I&apos;m a full-stack developer
              with a strong emphasis on backend development. I enjoy building reliable and scalable systems that address real 
              problems and enhace user experience. My background includes experience with modern frameworks such as Express.js,
              Next.js, and MongoDB, along with practical experience in REST API design, authentication, and database modeling.
              <br></br>
              <br></br>
              I believe the best way to learn is by teaching. If I can explain a concept clearly, it indicates that I have a solid
              understanding of it. As part of my growth, I create clear and accessible technical content. Although I&apos;m comfortable
              working across the entire technology stack, my true strength lies in designing efficient backend architectures and collaborating
              with teams to transform complex requirements into clean, maintainable solutions. 
            </p>
          </div>
        </div>
      </section>
  )
}

export default About
