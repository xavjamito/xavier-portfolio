import { Link } from "react-router-dom";
import { TerminalCommand } from "../components/Terminal";

const Home = () => {
  return (
    <div className='terminal-section'>
      <h1 className='terminal-title'>Home</h1>

      <TerminalCommand text='whoami' isComplete={true} autoType={false} />

      <>
        <TerminalCommand
          text='Xavier Paolo Jamito - Software Engineer'
          isCommand={false}
          isComplete={true}
          autoType={false}
        />

        <div className='terminal-text'>
          I build exceptional and accessible digital experiences for the web.
          Currently working at NCS Pte Ltd Singapore, developing APIs and UI
          using React, Next.js, Typescript, and NestJS.
        </div>

        <TerminalCommand
          text='cat skills.txt'
          isComplete={true}
          autoType={false}
        />
      </>

      <>
        <div className='terminal-result'>
          <span className='terminal-command'>Languages:</span> Typescript,
          Javascript, HTML/CSS, C#, SQL, Ruby
          <br />
          <span className='terminal-command'>Frameworks:</span> React, React
          Native, Vue (Vue2/Vue3), Next.js, Express, NestJS, Ruby on Rails
          <br />
          <span className='terminal-command'>Tools:</span> Git, AWS (EC2, S3,
          VPC, DynamoDB), Docker
          <br />
          <span className='terminal-command'>Certifications:</span> AWS
          Certified Developer - Associate, AWS Certified Solutions Architect -
          Associate
        </div>

        <TerminalCommand
          text='ls projects/'
          isComplete={true}
          autoType={false}
        />
      </>

      <>
        <div className='terminal-result'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <span className='terminal-command'>
                Vaccine Reservation System
              </span>
              <br />
              Javascript, React, Express, MongoDB, Netlify
            </div>
            <div>
              <span className='terminal-command'>
                Integrated Entertainment System
              </span>
              <br />
              React, Next.js, Typescript, NestJS
            </div>
            <div>
              <span className='terminal-command'>Risk Assessment Tool</span>
              <br />
              React, Typescript, Next.JS, D3.js, Mapbox
            </div>
            <div>
              <span className='terminal-command'>
                DIANA Ecosystem Operating Platform
              </span>
              <br />
              React, Typescript, C#, .NET
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <TerminalCommand
            text='cd projects'
            isComplete={true}
            autoType={false}
          />
          <div className='terminal-result'>
            <Link to='/projects' className='terminal-link'>
              View all projects →
            </Link>
          </div>
        </div>

        <div className='mt-6'>
          <TerminalCommand text='cd about' isComplete={true} autoType={false} />
          <div className='terminal-result'>
            <Link to='/about' className='terminal-link'>
              Learn more about me →
            </Link>
          </div>
        </div>

        <div className='mt-6'>
          <TerminalCommand
            text='cd contact'
            isComplete={true}
            autoType={false}
          />
          <div className='terminal-result'>
            <Link to='/contact' className='terminal-link'>
              Get in touch →
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
