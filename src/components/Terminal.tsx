import { useState, useEffect, ReactNode, KeyboardEvent, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface TerminalProps {
  children: ReactNode;
}

interface TerminalCommandProps {
  text: string;
  isCommand?: boolean;
  isComplete?: boolean;
  autoType?: boolean;
}

interface CommandHistoryItem {
  command: string;
  output: ReactNode;
}

export const TerminalCommand = ({
  text,
  isCommand = true,
  isComplete = false,
  autoType = false,
}: TerminalCommandProps) => {
  const [displayText, setDisplayText] = useState(autoType ? "" : text);
  const [isTyping, setIsTyping] = useState(autoType && !isComplete);

  useEffect(() => {
    if (!autoType || isComplete) {
      setDisplayText(text);
      setIsTyping(false);
      return;
    }

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [text, isComplete, autoType]);

  return (
    <div className='flex items-center mb-2'>
      {isCommand && <span className='text-terminal-green mr-2'>$</span>}
      <span className={isCommand ? "text-terminal-yellow" : "text-text"}>
        {displayText}
      </span>
      {isTyping && <span className='cursor-blink ml-1'>|</span>}
    </div>
  );
};

const Terminal = ({ children }: TerminalProps) => {
  const [showWelcome] = useState(true);
  const [currentPath, setCurrentPath] = useState("~");
  const [userInput, setUserInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>(
    []
  );
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandBuffer, setCommandBuffer] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Focus input when terminal is clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  }, [commandHistory]);

  // Update terminal path based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setCurrentPath("~/home");
    } else {
      setCurrentPath(`~${path}`);
    }
  }, [location]);

  // Process user commands
  const processCommand = (command: string) => {
    let output: ReactNode;

    // Process different commands
    if (command.trim() === "") {
      return; // Ignore empty commands
    } else if (command === "clear") {
      setCommandHistory([]);
      return;
    } else if (command === "help") {
      output = (
        <div className='terminal-result'>
          <p>Available commands:</p>
          <ul className='list-disc pl-5 mt-2'>
            <li>
              <span className='terminal-command'>help</span> - Show this help
              message
            </li>
            <li>
              <span className='terminal-command'>clear</span> - Clear the
              terminal
            </li>
            <li>
              <span className='terminal-command'>cd [path]</span> - Navigate to
              a page
            </li>
            <li>
              <span className='terminal-command'>ls</span> - List available
              pages
            </li>
            <li>
              <span className='terminal-command'>whoami</span> - Display
              information about me
            </li>
            <li>
              <span className='terminal-command'>contact</span> - Show contact
              information
            </li>
            <li>
              <span className='terminal-command'>projects</span> - List my
              projects
            </li>
            <li>
              <span className='terminal-command'>blog</span> - Show my blog
              posts
            </li>
          </ul>
        </div>
      );
    } else if (command === "ls") {
      output = (
        <div className='terminal-result'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <span className='terminal-command'>home</span>
            <span className='terminal-command'>about</span>
            <span className='terminal-command'>projects</span>
            <span className='terminal-command'>contact</span>
            <span className='terminal-command'>blog</span>
          </div>
        </div>
      );
    } else if (command.startsWith("cd ")) {
      const path = command.substring(3).trim();
      if (path === "~" || path === "home" || path === "~/home") {
        navigate("/");
        output = <div className='terminal-result'>Navigating to home page</div>;
      } else if (path === "~/about" || path === "about") {
        navigate("/about");
        output = (
          <div className='terminal-result'>Navigating to about page</div>
        );
      } else if (path === "~/projects" || path === "projects") {
        navigate("/projects");
        output = (
          <div className='terminal-result'>Navigating to projects page</div>
        );
      } else if (path === "~/contact" || path === "contact") {
        navigate("/contact");
        output = (
          <div className='terminal-result'>Navigating to contact page</div>
        );
      } else if (path === "~/blog" || path === "blog") {
        navigate("/blog");
        output = <div className='terminal-result'>Navigating to blog page</div>;
      } else {
        output = (
          <div className='terminal-result terminal-error'>
            Directory not found: {path}
          </div>
        );
      }
    } else if (command === "whoami") {
      output = (
        <div className='terminal-result'>
          <p>Xavier - Software Engineer</p>
          <p className='mt-2'>
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating elegant solutions to complex problems.
          </p>
        </div>
      );
    } else if (command === "contact") {
      navigate("/contact");
      output = (
        <div className='terminal-result'>Navigating to contact page</div>
      );
    } else if (command === "projects") {
      navigate("/projects");
      output = (
        <div className='terminal-result'>Navigating to projects page</div>
      );
    } else if (command === "blog") {
      navigate("/blog");
      output = <div className='terminal-result'>Navigating to blog page</div>;
    } else {
      output = (
        <div className='terminal-result terminal-error'>
          Command not found: {command}
        </div>
      );
    }

    // Add command to history
    setCommandHistory((prev) => [...prev, { command, output }]);

    // Add to command buffer for up/down navigation
    setCommandBuffer((prev) => [...prev, command]);
    setHistoryIndex(-1);
  };

  // Handle key presses
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(userInput);
      setUserInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandBuffer.length > 0) {
        const newIndex =
          historyIndex < commandBuffer.length - 1
            ? historyIndex + 1
            : historyIndex;
        setHistoryIndex(newIndex);
        setUserInput(commandBuffer[commandBuffer.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setUserInput(commandBuffer[commandBuffer.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setUserInput("");
      }
    }
  };

  return (
    <div
      className='min-h-screen bg-background text-text font-mono p-4'
      onClick={focusInput}
    >
      <div className='max-w-6xl mx-auto'>
        {/* Terminal Header */}
        <div className='bg-terminal-black rounded-t-md p-2 flex items-center'>
          <div className='flex space-x-2 mr-4'>
            <div className='w-3 h-3 rounded-full bg-terminal-red'></div>
            <div className='w-3 h-3 rounded-full bg-terminal-yellow'></div>
            <div className='w-3 h-3 rounded-full bg-terminal-green'></div>
          </div>
          <div className='text-center flex-grow text-text-secondary text-sm'>
            xavier@portfolio: {currentPath}
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalContentRef}
          className='bg-terminal-black p-4 h-[calc(100vh-10rem)] overflow-y-auto rounded-b-md'
        >
          {showWelcome && (
            <div className='mb-6'>
              <div className='text-terminal-green text-xl mb-2'>
                Welcome to Xavier's Portfolio Terminal
              </div>
              <div className='text-text-secondary mb-4'>
                Type 'help' for a list of available commands or navigate using
                the links below.
              </div>

              <div className='grid grid-cols-2 md:grid-cols-5 gap-2 mb-4'>
                <Link to='/' className='terminal-link'>
                  $ cd ~/home
                </Link>
                <Link to='/about' className='terminal-link'>
                  $ cd ~/about
                </Link>
                <Link to='/projects' className='terminal-link'>
                  $ cd ~/projects
                </Link>
                <Link to='/contact' className='terminal-link'>
                  $ cd ~/contact
                </Link>
                <Link to='/blog' className='terminal-link'>
                  $ cd ~/blog
                </Link>
              </div>

              <TerminalCommand
                text={`cd ${currentPath}`}
                isComplete={true}
                autoType={false}
              />
            </div>
          )}

          {/* Command History */}
          {commandHistory.map((item, index) => (
            <div key={index} className='mb-4'>
              <TerminalCommand
                text={item.command}
                isComplete={true}
                autoType={false}
              />
              {item.output}
            </div>
          ))}

          {/* Main Content */}
          {children}

          {/* User Input */}
          <div className='flex items-center mt-4'>
            <span className='text-terminal-green mr-2'>$</span>
            <input
              ref={inputRef}
              type='text'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className='bg-transparent border-none outline-none flex-grow text-terminal-yellow'
              autoFocus
              aria-label='Terminal input'
            />
            <span className='cursor-blink'>|</span>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className='mt-2 text-text-secondary text-sm flex justify-between'>
          <div>© {new Date().getFullYear()} Xavier</div>
          <div className='flex space-x-4'>
            <a
              href='https://github.com/username'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-terminal-cyan'
            >
              GitHub
            </a>
            <a
              href='https://linkedin.com/in/username'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-terminal-cyan'
            >
              LinkedIn
            </a>
            <a
              href='https://twitter.com/username'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-terminal-cyan'
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
