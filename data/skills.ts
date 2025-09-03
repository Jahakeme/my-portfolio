export interface Skill {
  name: string;
  icon: string;
  color: {
    light: string;
    dark: string;
    accent: string;
  };
}

export const skills: Skill[] = [
  { 
    name: 'React', 
    icon: '/skills/react.svg',
    color: {
      light: 'hsla(193, 95%, 68%, 0.15)', // Light blue with transparency
      dark: 'hsla(193, 95%, 68%, 0.2)',
      accent: 'hsl(193, 95%, 68%)' // #61DAFB
    }
  },
  { 
    name: 'Next.js', 
    icon: '/skills/next.svg',
    color: {
      light: 'hsla(210, 15%, 85%, 0.6)', // Light grayish-blue
      dark: 'hsla(210, 15%, 25%, 0.4)', // Dark grayish-blue
      accent: 'hsl(210, 15%, 35%)' // Medium gray-blue for better contrast
    }
  },
  { 
    name: 'TypeScript', 
    icon: '/skills/typescript.svg',
    color: {
      light: 'hsla(211, 60%, 48%, 0.15)', // TypeScript blue
      dark: 'hsla(211, 60%, 48%, 0.2)',
      accent: 'hsl(211, 60%, 48%)' // #3178C6
    }
  },
  { 
    name: 'JavaScript', 
    icon: '/skills/javascript.svg',
    color: {
      light: 'hsla(54, 85%, 63%, 0.2)', // JS yellow
      dark: 'hsla(54, 85%, 63%, 0.25)',
      accent: 'hsl(54, 85%, 63%)' // #F0DB4F
    }
  },
  { 
    name: 'Node.js', 
    icon: '/skills/nodejs.svg',
    color: {
      light: 'hsla(114, 24%, 51%, 0.15)', // Node green
      dark: 'hsla(114, 24%, 51%, 0.2)',
      accent: 'hsl(114, 24%, 51%)' // #68A063
    }
  },
  { 
    name: 'MongoDB', 
    icon: '/skills/mongodb.svg',
    color: {
      light: 'hsla(122, 39%, 49%, 0.15)', // MongoDB green
      dark: 'hsla(122, 39%, 49%, 0.2)',
      accent: 'hsl(122, 39%, 49%)' // #47A248
    }
  },
  { 
    name: 'Tailwind CSS', 
    icon: '/skills/tailwind-css.svg',
    color: {
      light: 'hsla(178, 49%, 46%, 0.15)', // Tailwind teal
      dark: 'hsla(178, 49%, 46%, 0.2)',
      accent: 'hsl(178, 49%, 46%)' // #38B2AC
    }
  },
  { 
    name: 'CSS', 
    icon: '/skills/css.svg',
    color: {
      light: 'hsla(204, 79%, 40%, 0.15)', // CSS blue
      dark: 'hsla(204, 79%, 40%, 0.2)',
      accent: 'hsl(204, 79%, 40%)' // #1572B6
    }
  },
  { 
    name: 'Git', 
    icon: '/skills/git.svg',
    color: {
      light: 'hsla(9, 86%, 57%, 0.15)', // Git orange-red
      dark: 'hsla(9, 86%, 57%, 0.2)',
      accent: 'hsl(9, 86%, 57%)' // #F05032
    }
  },
  { 
    name: 'GitHub', 
    icon: '/skills/github.svg',
    color: {
      light: 'hsla(210, 13%, 25%, 0.1)', // GitHub dark
      dark: 'hsla(0, 0%, 100%, 0.15)',
      accent: 'hsl(210, 13%, 25%)' // #24292F
    }
  },
  { 
    name: 'Postman', 
    icon: '/skills/postman.svg',
    color: {
      light: 'hsla(16, 100%, 61%, 0.15)', // Postman orange
      dark: 'hsla(16, 100%, 61%, 0.2)',
      accent: 'hsl(16, 100%, 61%)' // #FF6C37
    }
  }
];
