import About from "./about-me/page";
import Contact from "./contact-me/page";
import Footer from "./footer/page";
import Hero from "./intro/page";
import Navbar from "./navbar/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Testimonials from "./testimonial/page";

export default function Home() {
  return ( 
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
    );
}
