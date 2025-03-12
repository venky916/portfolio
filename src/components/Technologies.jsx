import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiDjango,
  SiPrisma,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from 'react-icons/si';
import { FaNodeJs, FaAws } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  const technologies = [
    {
      icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
      name: 'React JS',
    },
    {
      icon: <SiNextdotjs className="text-7xl text-gray-500" />,
      name: 'Next JS',
    },
    {
      icon: <SiExpress className="text-7xl text-gray-300" />,
      name: 'Express JS',
    },
    {
      icon: <SiMongodb className="text-7xl text-green-500" />,
      name: 'MongoDB',
    },
    { icon: <SiMysql className="text-7xl text-cyan-600" />, name: 'MySQL' },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: 'Node JS' },
    {
      icon: <SiTailwindcss className="text-7xl text-cyan-400" />,
      name: 'Tailwind CSS',
    },
    { icon: <SiDjango className="text-7xl text-white" />, name: 'Django' },
    { icon: <FaAws className="text-7xl text-orange-400" />, name: 'AWS' },
    { icon: <SiDocker className="text-7xl text-blue-500" />, name: 'Docker' },
    { icon: <SiGit className="text-7xl text-orange-600" />, name: 'Git' },
    { icon: <SiPrisma className="text-7xl text-blue-700" />, name: 'Prisma' },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24 mx-auto max-w-5xl">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2.5 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id="tech-tooltip"
            data-tooltip-content={tech.name}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
      <Tooltip id="tech-tooltip" />
    </div>
  );
};

export default Technologies;
