import Image from 'next/image'
import { skills } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="container-clamp spacing-clamp-xl text-center">
      <h2 className="text-clamp-4xl font-sans font-bold margin-clamp-lg">My Skills</h2>
      
      <div className="skills-marquee-container">
        <div className="skills-marquee">
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div 
              key={`first-${index}`} 
              className="skill-item"
              style={{
                '--skill-color-light': skill.color.light,
                '--skill-color-dark': skill.color.dark,
                '--skill-color-accent': skill.color.accent,
                background: skill.color.light,
                borderColor: skill.color.accent.replace('hsl(', 'hsla(').replace(')', ', 0.3)')
              } as React.CSSProperties}
            >
              <div className="skill-icon" style={{ background: skill.color.accent.replace('hsl(', 'hsla(').replace(')', ', 0.12)') }}>
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={100}
                  height={100}
                  className="skill-svg"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {skills.map((skill, index) => (
            <div 
              key={`second-${index}`} 
              className="skill-item"
              style={{
                '--skill-color-light': skill.color.light,
                '--skill-color-dark': skill.color.dark,
                '--skill-color-accent': skill.color.accent,
                background: skill.color.light,
                borderColor: skill.color.accent.replace('hsl(', 'hsla(').replace(')', ', 0.3)')
              } as React.CSSProperties}
            >
              <div className="skill-icon" style={{ background: skill.color.accent.replace('hsl(', 'hsla(').replace(')', ', 0.12)') }}>
                <Image
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  width={100}
                  height={100}
                  className="skill-svg"
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
