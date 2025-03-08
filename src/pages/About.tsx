import { TerminalCommand } from "../components/Terminal";

const About = () => {
  return (
    <div className='terminal-section'>
      <h1 className='terminal-title'>About</h1>

      <TerminalCommand text='cat bio.txt' isComplete={true} autoType={false} />

      <div className='terminal-result mb-6'>
        <p>
          I'm Xavier Paolo Jamito, a software engineer with a passion for
          building innovative web applications. Based in the Philippines, I
          specialize in creating responsive, user-friendly interfaces and robust
          backend systems using modern technologies like React, Next.js,
          TypeScript, and NestJS.
        </p>
        <p className='mt-2'>
          My journey in software development began during my university years at
          Lyceum of the Philippines University-Laguna, where I discovered my
          love for problem-solving and creating digital solutions. Since then,
          I've worked on various projects ranging from integrated entertainment
          systems to risk assessment tools.
        </p>
        <p className='mt-2'>
          When I'm not coding, I enjoy exploring new technologies and
          contributing to open-source projects. I'm AWS certified and
          continuously expanding my knowledge in cloud technologies and software
          architecture.
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
            Software Engineer | NCS Pte Ltd Singapore
          </div>
          <div className='terminal-text-muted'>December 2022 - Present</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>
              Developed APIs and UI using React, Next.js, Typescript, and NestJS
              for an integrated entertainment system for one of the biggest
              telco companies in Southeast Asia
            </li>
            <li>
              Worked on migrating the documentation of Ts.ED, an open-source
              Node and Typescript framework build on top of Express from
              Vuepress to Vitepress
            </li>
            <li>
              Worked on internal performance review system using Next.js,
              Typescript, Prisma, and MongoDB
            </li>
          </ul>
        </div>

        <div className='mb-4'>
          <div className='terminal-command'>Software Engineer | Deloitte</div>
          <div className='terminal-text-muted'>April 2022 - November 2022</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>
              Engaged with a client in Australia and worked on a risk assessment
              tool using React, Typescript, and Next.JS
            </li>
            <li>
              Utilized tools such as D3.js and Mapbox for data visualization
            </li>
          </ul>
        </div>

        <div className='mb-4'>
          <div className='terminal-command'>
            Senior Software Engineer | Rise-x
          </div>
          <div className='terminal-text-muted'>October 2020 - April 2022</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>
              Developed features using React and Typescript in the front-end and
              C# and .NET in the backend
            </li>
            <li>
              Worked on the proprietary DIANA Ecosystem Operating Platform that
              enables end-to-end bunkering solutions in a digital ecosystem
            </li>
          </ul>
        </div>

        <div className='mb-4'>
          <div className='terminal-command'>
            Software Engineer | Samsung Research and Development Institute
            Philippines
          </div>
          <div className='terminal-text-muted'>May 2020 - October 2020</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>
              Developed UI components in React, Typescript, and Storybook that
              were used for internal tooling by counterparts from Samsung HQ in
              Seoul
            </li>
          </ul>
        </div>

        <div>
          <div className='terminal-command'>Software Engineer | Booky</div>
          <div className='terminal-text-muted'>June 2019 - April 2020</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>
              Developed high-quality software design and architecture using
              Javascript, React (web and mobile) and Redux for the Booky website
              and Booky mobile app
            </li>
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
            Bachelor of Science in Information Technology
          </div>
          <div className='terminal-text-muted'>
            Lyceum of the Philippines University-Laguna | June 2015 - June 2019
          </div>
        </div>

        <div>
          <div className='terminal-command'>Certifications</div>
          <ul className='list-disc pl-5 mt-2'>
            <li>AWS Certified Developer - Associate (September 2023)</li>
            <li>AWS Certified Solutions Architect - Associate (March 2024)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
