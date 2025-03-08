import { TerminalCommand } from "../components/Terminal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured online store with product management, cart functionality, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-platform.example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/task-management",
      demo: "https://task-app.example.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather data for any location with interactive maps.",
      technologies: ["JavaScript", "HTML/CSS", "Weather API", "Leaflet.js"],
      github: "https://github.com/username/weather-dashboard",
      demo: "https://weather-app.example.com",
    },
    {
      id: 4,
      title: "Blog API",
      description:
        "A RESTful API for a blog platform with authentication, authorization, and CRUD operations for posts and comments.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/username/blog-api",
      demo: "https://blog-api.example.com/docs",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience with a terminal-inspired design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio.example.com",
    },
    {
      id: 6,
      title: "Movie Database App",
      description:
        "An application for browsing movies, viewing details, and saving favorites using the TMDB API.",
      technologies: ["React", "Redux", "TMDB API", "Styled Components"],
      github: "https://github.com/username/movie-database",
      demo: "https://movie-app.example.com",
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
            text='echo "More projects coming soon..."'
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
