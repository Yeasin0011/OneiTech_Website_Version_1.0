import { motion } from 'framer-motion';
import { Computer, Smartphone, Code, Server } from 'lucide-react';
import { Boxes } from '../ui/background-boxes';

const Expertise: React.FC = () => {
  const expertiseData = [
    { title: "Web Application", icon: <Code size={36} /> },
    { title: "Desktop Application", icon: <Computer size={36} /> },
    { title: "Android Application", icon: <Smartphone size={36} /> },
    { title: "iOS Application", icon: <Smartphone size={36} /> },
    { title: "C#", icon: <Code size={36} /> },
    { title: "Java", icon: <Code size={36} /> },
    { title: "Obj-C", icon: <Code size={36} /> },
    { title: "NodeJS", icon: <Server size={36} /> },
    { title: "Swift", icon: <Code size={36} /> },
    { title: "Python", icon: <Code size={36} /> },
    { title: "PhP", icon: <Code size={36} /> },
    { title: "Angular", icon: <Code size={36} /> },
    { title: "JavaScript", icon: <Code size={36} /> },
    { title: "Microsoft.NET", icon: <Code size={36} /> },
    { title: "Spring", icon: <Code size={36} /> },
    { title: "Spring Boot", icon: <Code size={36} /> },
    { title: ".NET core", icon: <Code size={36} /> },
    { title: "django", icon: <Code size={36} /> },
  ];

  return (
    <motion.div
      className="py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 relative z-50">
        <h2 className="text-3xl font-bold text-center mb-12 inline-block px-8">Our Expertise</h2>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="p-3 md:p-4 bg-gray-800 cursor-pointer shadow-md rounded-lg flex flex-col items-center justify-center text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-2 md:mb-3">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      <Boxes className='opacity-30'/>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export default Expertise;
