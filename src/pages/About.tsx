import { TerminalCommand } from "../components/Terminal";

const About = () => {
  return (
    <div className='terminal-section'>
      <h1 className='terminal-title'>About</h1>

      <TerminalCommand text='cat bio.txt' isComplete={true} autoType={false} />

      <div className='terminal-result mb-6'>
        <p>
          I'm Xavier, a software engineer with a passion for building innovative
          web applications. With over 5 years of experience in full-stack
          development, I specialize in creating responsive, user-friendly
          interfaces and robust backend systems.
        </p>
        <p className='mt-2'>
          My journey in software development began during my university years,
          where I discovered my love for problem-solving and creating digital
          solutions. Since then, I've worked on various projects ranging from
          e-commerce platforms to data visualization tools.
        </p>
        <p className='mt-2'>
          When I'm not coding, you can find me hiking, reading science fiction,
          or experimenting with new technologies. I believe in continuous
          learning and staying updated with the latest industry trends.
        </p>
      </div>

      <TerminalCommand
        text='cat experience.json'
        isComplete={true}
        autoType={false}
      />

      <div className='terminal-result mb-6'>
        <div className='mb-4'>
          <div className='terminal-command'>
            Senior Frontend Developer | TechCorp
          </div>
          <div className='terminal-text-muted'>2021 - Present</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>Lead development of the company's flagship SaaS product</li>
            <li>
              Implemented responsive design principles, improving mobile usage
              by 40%
            </li>
            <li>Mentored junior developers and conducted code reviews</li>
            <li>Introduced TypeScript, reducing production bugs by 25%</li>
          </ul>
        </div>

        <div className='mb-4'>
          <div className='terminal-command'>
            Full Stack Developer | WebSolutions Inc.
          </div>
          <div className='terminal-text-muted'>2018 - 2021</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>
              Developed and maintained client websites and web applications
            </li>
            <li>Created RESTful APIs using Node.js and Express</li>
            <li>Implemented authentication systems using JWT</li>
            <li>
              Optimized database queries, improving application performance by
              30%
            </li>
          </ul>
        </div>

        <div>
          <div className='terminal-command'>Junior Developer | StartupX</div>
          <div className='terminal-text-muted'>2016 - 2018</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>Assisted in developing the company's MVP</li>
            <li>Built interactive UI components using React</li>
            <li>
              Collaborated with designers to implement pixel-perfect interfaces
            </li>
            <li>Participated in daily stand-ups and sprint planning</li>
          </ul>
        </div>
      </div>

      <TerminalCommand
        text='cat education.json'
        isComplete={true}
        autoType={false}
      />

      <div className='terminal-result'>
        <div className='mb-4'>
          <div className='terminal-command'>
            Bachelor of Science in Computer Science
          </div>
          <div className='terminal-text-muted'>
            University of Technology | 2012 - 2016
          </div>
          <p className='mt-2'>
            Graduated with honors. Specialized in web development and software
            engineering. Relevant coursework: Data Structures, Algorithms,
            Database Systems, Web Development.
          </p>
        </div>

        <div>
          <div className='terminal-command'>Certifications</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>AWS Certified Developer - Associate</li>
            <li>MongoDB Certified Developer</li>
            <li>React Advanced Patterns - Frontend Masters</li>
            <li>TypeScript Professional - Udemy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
