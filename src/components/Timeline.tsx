import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

interface TimelineProps {
  items: TimelineItem[];
  type: "work" | "education";
}

const Timeline = ({ items, type }: TimelineProps) => {
  const filteredItems = items.filter((item) => item.type === type);

  return (
    <div className='py-4'>
      <div className='relative border-l-2 border-primary/30 ml-3 md:ml-6'>
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className='mb-10 ml-6'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className='absolute w-4 h-4 bg-primary rounded-full -left-2 border border-white dark:border-gray-800'></div>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-2'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  {item.title}
                </h3>
                <span className='text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mt-2 md:mt-0'>
                  {item.period}
                </span>
              </div>
              <div className='mb-4'>
                <p className='text-gray-700 dark:text-gray-300'>
                  {item.organization} • {item.location}
                </p>
              </div>
              <ul className='list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400'>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
