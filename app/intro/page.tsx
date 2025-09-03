import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
     <main className="flex flex-col items-center justify-center spacing-clamp-xl">
        <div className="text-center max-width-clamp">
          <h1 className="text-clamp-6xl font-sans margin-clamp-lg text-balance leading-tight">
            Beyond websites - I provide <span className="font-bold">solutions</span>
          </h1>

          <p className="font-mono text-clamp-xl mx-auto leading-relaxed" style={{maxWidth: 'clamp(280px, 50vw, 600px)', marginTop: 'clamp(1.5rem, 2.5vw, 3rem)', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)'}}>
            I build responsive, functional and safe web apps.
          </p>

          <Link
            href="#contact-me"
            className="get-in-touch-btn text-white rounded-full text-clamp-lg font-medium shadow-lg hover:shadow-xl"
            style={{padding: 'clamp(0.75rem, 1.5vw, 1.25rem) clamp(1.5rem, 3vw, 3rem)'}}
          >
            <span className="btn-text">Get in Touch</span>
            <Image
              src="/contact-me/gmail.svg"
              alt="Gmail"
              width={28}
              height={28}
              className="btn-icon"
            />
          </Link>
        </div>
      </main>
  )
}

export default Hero
