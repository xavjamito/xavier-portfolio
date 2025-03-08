import { TerminalCommand } from "../components/Terminal";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    // In a real application, you would send the form data to a server here
    console.log({ name, email, message });

    // Reset form and show success message
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setSubmitted(true);
  };

  return (
    <div className='terminal-section'>
      <h1 className='terminal-title'>Contact</h1>

      <TerminalCommand
        text='cat contact_info.txt'
        isComplete={true}
        autoType={false}
      />

      <div className='terminal-result mb-6'>
        <div className='mb-4'>
          <div className='terminal-command'>Email</div>
          <a href='mailto:xavier@example.com' className='terminal-link'>
            xavier@example.com
          </a>
        </div>

        <div className='mb-4'>
          <div className='terminal-command'>Social</div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-2'>
            <a
              href='https://github.com/username'
              target='_blank'
              rel='noopener noreferrer'
              className='terminal-link'
            >
              GitHub: github.com/username
            </a>
            <a
              href='https://linkedin.com/in/username'
              target='_blank'
              rel='noopener noreferrer'
              className='terminal-link'
            >
              LinkedIn: linkedin.com/in/username
            </a>
            <a
              href='https://twitter.com/username'
              target='_blank'
              rel='noopener noreferrer'
              className='terminal-link'
            >
              Twitter: twitter.com/username
            </a>
            <a
              href='https://dev.to/username'
              target='_blank'
              rel='noopener noreferrer'
              className='terminal-link'
            >
              Dev.to: dev.to/username
            </a>
          </div>
        </div>

        <div>
          <div className='terminal-command'>Location</div>
          <p>San Francisco, CA</p>
        </div>
      </div>

      <TerminalCommand
        text='./contact_form.sh'
        isComplete={true}
        autoType={false}
      />

      <div className='terminal-result'>
        {!submitted ? (
          <form onSubmit={handleSubmit} className='terminal-form'>
            {error && <div className='terminal-error mb-4'>Error: {error}</div>}

            <div className='mb-4'>
              <label htmlFor='name' className='terminal-command block mb-2'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='terminal-input w-full'
                placeholder='Enter your name'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='terminal-command block mb-2'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='terminal-input w-full'
                placeholder='Enter your email'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='message' className='terminal-command block mb-2'>
                Message:
              </label>
              <textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='terminal-input w-full h-32'
                placeholder='Enter your message'
              ></textarea>
            </div>

            <button type='submit' className='terminal-button'>
              $ send_message.sh
            </button>
          </form>
        ) : (
          <div className='terminal-success'>
            <TerminalCommand
              text='Message sent successfully!'
              isCommand={false}
              isComplete={true}
              autoType={false}
            />
            <p className='mt-2'>
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className='terminal-button mt-4'
            >
              $ send_another_message.sh
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
