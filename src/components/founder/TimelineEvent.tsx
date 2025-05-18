
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
      {/* Desktop version (hidden on mobile) */}
      <div className="hidden md:flex flex-row items-center">
        {isLeft ? (
          <>
            <div className="w-1/2 pr-12 text-right">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ml-auto mr-0 max-w-md">
                <span className="text-amber-600 font-medium">{year}</span>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </div>
            </div>
            <div className="timeline-marker"></div>
            <div className="w-1/2 pl-12 hidden md:block"></div>
          </>
        ) : (
          <>
            <div className="w-1/2 pr-12 hidden md:block"></div>
            <div className="timeline-marker"></div>
            <div className="w-1/2 pl-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mr-auto ml-0 max-w-md">
                <span className="text-amber-600 font-medium">{year}</span>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Mobile version (hidden on desktop) */}
      <div className="flex md:hidden items-start">
        <div className="flex-shrink-0 mt-2">
          <div className="timeline-marker-mobile w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-md"></div>
        </div>
        <div className="ml-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <span className="text-amber-600 font-medium text-sm">{year}</span>
          </div>
          <p className="text-slate-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineEvent;
