
import { motion } from "framer-motion";

type TimelineEventProps = {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
};

const TimelineEvent = ({ year, title, description, isLeft }: TimelineEventProps) => {
  return (
    <motion.div 
      className="timeline-item mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: isLeft ? 0 : 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        {isLeft ? (
          <>
            <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:ml-auto md:mr-0 max-w-md">
                <span className="text-amber-600 font-medium">{year}</span>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </div>
            </div>
            <div className="timeline-marker"></div>
            <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
          </>
        ) : (
          <>
            <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
            <div className="timeline-marker"></div>
            <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:mr-auto md:ml-0 max-w-md">
                <span className="text-amber-600 font-medium">{year}</span>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineEvent;
