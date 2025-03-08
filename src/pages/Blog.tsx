import { TerminalCommand } from "../components/Terminal";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building a Terminal-Themed Portfolio with React",
      date: "2023-06-15",
      excerpt:
        "Learn how to create a unique terminal-themed portfolio website using React, TypeScript, and Tailwind CSS.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Portfolio"],
      readTime: "8 min read",
    },
    {
      id: 2,
      title:
        "The Power of TypeScript: Why You Should Use It in Your Next Project",
      date: "2023-05-20",
      excerpt:
        "Discover the benefits of TypeScript and how it can improve your development workflow and code quality.",
      tags: ["TypeScript", "JavaScript", "Web Development"],
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Optimizing React Applications for Performance",
      date: "2023-04-10",
      excerpt:
        "Explore techniques and best practices for optimizing your React applications to deliver a better user experience.",
      tags: ["React", "Performance", "Optimization"],
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Creating Accessible Web Applications",
      date: "2023-03-05",
      excerpt:
        "Learn how to build web applications that are accessible to all users, including those with disabilities.",
      tags: ["Accessibility", "Web Development", "HTML", "CSS"],
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Introduction to GraphQL: A Better Way to API",
      date: "2023-02-18",
      excerpt:
        "Discover how GraphQL can revolutionize your API development and provide a more efficient way to fetch data.",
      tags: ["GraphQL", "API", "Backend", "JavaScript"],
      readTime: "9 min read",
    },
  ];

  return (
    <div className='terminal-section'>
      <h1 className='terminal-title'>Blog</h1>

      <TerminalCommand
        text='ls -la blog_posts/'
        isComplete={true}
        autoType={false}
      />

      <div className='terminal-result'>
        <div className='grid grid-cols-1 gap-6'>
          {blogPosts.map((post) => (
            <div key={post.id} className='terminal-blog-post'>
              <div className='flex justify-between items-start'>
                <div className='terminal-command text-lg'>{post.title}</div>
                <div className='terminal-text-muted text-sm'>{post.date}</div>
              </div>

              <p className='mt-2'>{post.excerpt}</p>

              <div className='mt-3 flex flex-wrap gap-2'>
                {post.tags.map((tag, index) => (
                  <span key={index} className='terminal-tag'>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='mt-3 flex justify-between items-center'>
                <span className='terminal-text-muted'>{post.readTime}</span>
                <a href={`/blog/${post.id}`} className='terminal-link'>
                  $ cat blog_posts/{post.id}.md
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-8'>
          <TerminalCommand
            text='echo "Subscribe to my newsletter"'
            isComplete={true}
            autoType={false}
          />
          <div className='terminal-result'>
            <div className='terminal-newsletter'>
              <p className='mb-4'>
                Stay updated with my latest articles and projects. Subscribe to
                my newsletter!
              </p>
              <div className='flex'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='terminal-input flex-grow'
                />
                <button className='terminal-button ml-2'>$ subscribe.sh</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
