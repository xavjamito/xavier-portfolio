import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: "frontend" | "backend" | "tools" | "languages";
}

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & DevOps" },
    { id: "languages", label: "Languages" },
  ];

  return (
    <div className='py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'
          >
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
              {category.label}
            </h3>
            <div className='space-y-4'>
              {skills
                .filter((skill) => skill.category === category.id)
                .map((skill, index) => (
                  <div key={skill.name}>
                    <div className='flex justify-between items-center mb-1'>
                      <span className='text-gray-700 dark:text-gray-300'>
                        {skill.name}
                      </span>
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5'>
                      <motion.div
                        className='bg-primary h-2.5 rounded-full'
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
