export interface Project {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  link: {
    url: string;
    label: string;
  };
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Checkslate",
    description: "Checkslate is a services platform that bridges the gap between clients and service providers. Money is kept in escrow until the service is completed. Once the client confirms the service requested for has been carried out properly, the money is transferred to the service provider.",
    images: [
      {
        src: "/project01/checkslate-signin.png",
        alt: "Checkslate sign-up page"
      },
      {
        src: "/project01/checkslate-discover.png", 
        alt: "Checkslate discover page"
      },
      {
        src: "/project01/checkslate-home.png",
        alt: "Checkslate homepage"
      }
    ],
    link: {
      url: "https://checkslate-project.netlify.app",
      label: "View Checkslate project"
    }
  },
  {
    id: "02", 
    title: "Learnverrse",
    description: "Learnverrse is an e-learning platform that connects students with expert instructors. It was built mainly for people in developing countries who may not have access to quality education. The platform offers a variety of courses across different subjects, allowing students to learn at their own pace.",
    images: [
      {
        src: "/project02/learnverrse-signup.png",
        alt: "Learnverrse sign-up page"
      },
      {
        src: "/project02/learnverrse-courses.png",
        alt: "Learnverrse courses page" 
      },
      {
        src: "/project02/learnverrse-home.png",
        alt: "Learnverrse home page"
      }
    ],
    link: {
      url: "https://learnverrse.github.io/learnverrse",
      label: "View Learnverrse project"
    }
  }
];
