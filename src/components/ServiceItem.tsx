import { motion } from 'framer-motion';

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="p-4 shadow-md rounded-lg bg-gray-800 cursor-pointer"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h3 className="sm:text-sm md:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 md:text-sm">{description}</p>
    </motion.div>
  );
};

export default ServiceItem;
