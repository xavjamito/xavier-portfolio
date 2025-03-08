import { TerminalCommand } from "../components/Terminal";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My Journey to AWS Certification",
      date: "2024-03-20",
      excerpt:
        "Sharing my experience and study tips for obtaining the AWS Solutions Architect Associate certification.",
      tags: ["AWS", "Cloud", "Certification", "Career Development"],
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Building Modern Web Applications with Next.js and TypeScript",
      date: "2024-02-15",
      excerpt:
        "Exploring the benefits of using Next.js and TypeScript for building robust, type-safe web applications.",
      tags: ["Next.js", "TypeScript", "Web Development", "React"],
      readTime: "10 min read",
    },
    {
      id: 3,
      title: "Migrating Documentation from Vuepress to Vitepress",
      date: "2023-12-10",
      excerpt:
        "A detailed guide on how to migrate your documentation from Vuepress to Vitepress, based on my experience with the Ts.ED framework.",
      tags: ["Vue", "Vitepress", "Documentation", "Open Source"],
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "Data Visualization with D3.js and React",
      date: "2023-10-05",
      excerpt:
        "Learn how to integrate D3.js with React to create powerful, interactive data visualizations for your web applications.",
      tags: ["D3.js", "React", "Data Visualization", "JavaScript"],
      readTime: "9 min read",
    },
    {
      id: 5,
      title: "Working with MongoDB and Prisma in Next.js Applications",
      date: "2023-08-18",
      excerpt:
        "A comprehensive guide to setting up and using MongoDB with Prisma in your Next.js projects for efficient database operations.",
      tags: ["MongoDB", "Prisma", "Next.js", "Database"],
      readTime: "11 min read",
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
            text="echo 'Subscribe to my newsletter'"
            isComplete={true}
            autoType={false}
          />
          <div className='terminal-result'>
            <div className='terminal-newsletter'>
              <p className='mb-4'>
                Stay updated with my latest articles on web development, cloud
                technologies, and software engineering. Subscribe to my
                newsletter!
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
