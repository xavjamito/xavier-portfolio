import { TerminalCommand } from "../components/Terminal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Vaccine Reservation System",
      description:
        "A web application for users to schedule vaccinations in Singapore.",
      technologies: ["Javascript", "React", "Express", "MongoDB", "Netlify"],
      github: "https://github.com/xavjamito/vaccine-reservation-system",
      demo: "https://vaccine-reservation-system.netlify.app",
    },
    {
      id: 2,
      title: "Integrated Entertainment System",
      description:
        "Developed APIs and UI for an integrated entertainment system for one of the biggest telco companies in Southeast Asia.",
      technologies: ["React", "Next.js", "Typescript", "NestJS"],
      github: "https://github.com/xavjamito/entertainment-system",
      demo: "https://entertainment-system-demo.vercel.app",
    },
    {
      id: 3,
      title: "Risk Assessment Tool",
      description:
        "A tool for risk assessment with data visualization capabilities for a client in Australia.",
      technologies: ["React", "Typescript", "Next.JS", "D3.js", "Mapbox"],
      github: "https://github.com/xavjamito/risk-assessment-tool",
      demo: "https://risk-assessment-demo.vercel.app",
    },
    {
      id: 4,
      title: "DIANA Ecosystem Operating Platform",
      description:
        "A proprietary platform that enables end-to-end bunkering solutions in a digital ecosystem.",
      technologies: ["React", "Typescript", "C#", ".NET"],
      github: "https://github.com/xavjamito/diana-platform",
      demo: "https://diana-platform-demo.vercel.app",
    },
    {
      id: 5,
      title: "Performance Review System",
      description:
        "An internal performance review system for managing employee evaluations and feedback.",
      technologies: ["Next.js", "Typescript", "Prisma", "MongoDB"],
      github: "https://github.com/xavjamito/performance-review",
      demo: "https://performance-review-demo.vercel.app",
    },
    {
      id: 6,
      title: "Ts.ED Documentation Migration",
      description:
        "Migration of documentation for Ts.ED, an open-source Node and Typescript framework from Vuepress to Vitepress.",
      technologies: ["Vue", "Vitepress", "Typescript", "Node.js"],
      github: "https://github.com/tsedio/tsed",
      demo: "https://tsed.io",
    },
  ];

  return (
    <div className='terminal-section'>
      <h1 className='terminal-title'>Projects</h1>

      <TerminalCommand
        text='ls -la projects/'
        isComplete={true}
        autoType={false}
      />

      <div className='terminal-result'>
        <div className='grid grid-cols-1 gap-6'>
          {projects.map((project) => (
            <div key={project.id} className='terminal-project'>
              <div className='flex justify-between items-start'>
                <div className='terminal-command text-lg'>{project.title}</div>
              </div>

              <p className='mt-2'>{project.description}</p>

              <div className='mt-3'>
                <span className='terminal-text-muted'>Technologies: </span>
                <span>{project.technologies.join(", ")}</span>
              </div>

              <div className='mt-3 flex space-x-4'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='terminal-link'
                >
                  $ git clone {project.github.split("github.com/")[1]}
                </a>

                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='terminal-link'
                >
                  $ open {project.demo.split("//")[1]}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-8'>
          <TerminalCommand
            text="echo 'More projects coming soon...'"
            isComplete={true}
            autoType={false}
          />
          <div className='terminal-result'>More projects coming soon...</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
