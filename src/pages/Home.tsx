import { Link } from "react-router-dom";
import { TerminalCommand } from "../components/Terminal";

const Home = () => {
  return (
    <div className='terminal-section'>
      <h1 className='terminal-title'>Home</h1>

      <TerminalCommand text='whoami' isComplete={true} autoType={false} />

      <>
        <TerminalCommand
          text='Xavier - Software Engineer'
          isCommand={false}
          isComplete={true}
          autoType={false}
        />

        <div className='terminal-text'>
          I build exceptional and accessible digital experiences for the web.
          Passionate about creating elegant solutions to complex problems.
        </div>

        <TerminalCommand
          text='cat skills.txt'
          isComplete={true}
          autoType={false}
        />
      </>

      <>
        <div className='terminal-result'>
          <span className='terminal-command'>Frontend:</span> React, TypeScript,
          JavaScript, HTML/CSS, Tailwind CSS, Next.js
          <br />
          <span className='terminal-command'>Backend:</span> Node.js, Express,
          MongoDB, PostgreSQL, GraphQL, REST API
          <br />
          <span className='terminal-command'>Tools:</span> Git, Docker, CI/CD,
          Jest
          <br />
          <span className='terminal-command'>Languages:</span> JavaScript,
          TypeScript, Python, Java, C#, SQL
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
              <span className='terminal-command'>E-commerce Platform</span>
              <br />
              React, Node.js, MongoDB, Express, Stripe
            </div>
            <div>
              <span className='terminal-command'>Task Management App</span>
              <br />
              React, TypeScript, Firebase, Tailwind CSS
            </div>
            <div>
              <span className='terminal-command'>Weather Dashboard</span>
              <br />
              JavaScript, HTML/CSS, Weather API
            </div>
            <div>
              <span className='terminal-command'>Blog API</span>
              <br />
              Node.js, Express, MongoDB, JWT
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
