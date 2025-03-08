import { motion } from "framer-motion";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  link,
  github,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
    >
      <div className='h-48 overflow-hidden'>
        {image ? (
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover transition-transform hover:scale-105 duration-300'
          />
        ) : (
          <div className='w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 text-gray-400 dark:text-gray-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
        )}
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
          {title}
        </h3>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>{description}</p>

        <div className='mb-4 flex flex-wrap gap-2'>
          {technologies.map((tech, i) => (
            <span
              key={i}
              className='text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex space-x-3'>
          {link && (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm'
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-sm'
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
