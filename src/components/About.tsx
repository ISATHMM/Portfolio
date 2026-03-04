import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Professional Profile
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            An overview of my qualifications, expertise, and professional
            journey in software development and research.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="md:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Academic Credentials
              </h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-blue-600 dark:text-blue-400">
                    2023 - 2025
                  </p>
                  <p className="font-bold text-gray-800 dark:text-white">
                    HND in Software Engineering
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Esoft Metro Campus
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 hidden">
                    Graduated with Distinction
                  </p>
                </li>
                <li className='hidden'>
                  <p className="font-medium text-blue-600 dark:text-blue-400">
                    2022 - 2022
                  </p>
                  <p className="font-bold text-gray-800 dark:text-white">
                    Diploma in English
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    CMT Campus
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 hidden">
                    Graduated with Distinction
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="md:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
               As a web developer, I specialize in creating responsive, user-friendly
               applications that combine clean design with robust functionality, using 
               C#, PHP, JavaScript, Bootstrap, MySQL, and Figma to deliver high-quality 
               solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I excel in translating complex business requirements into
                elegant technical solutions, with particular expertise in
                scalable database design, secure authentication systems, and
                performance optimization for high-traffic applications.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="md:w-1/3">

           <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border-l-4 border-blue-500">
  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
    Experience
  </h3>

  {/* Marazin Academy */}
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
      Academic Administrator
    </h4>
    <p className="text-sm text-blue-500 font-medium">
      Marazin Academy · Full-time
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
      Jan 2026 – Present · Kalmunai, Sri Lanka (On-site)
    </p>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      Responsible for educational administration and systems management, 
      coordinating academic operations, maintaining records, and supporting 
      institutional processes to ensure smooth daily operations.
    </p>
  </div>

  {/* Government */}
  <div>
    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
      Data Collector
    </h4>
    <p className="text-sm text-blue-500 font-medium">
      Government of Sri Lanka · Seasonal
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
      Apr 2023 – Jun 2023 · Kalmunai, Sri Lanka (On-site)
    </p>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      Collected and verified household data for the national welfare program, 
      conducted field surveys, accurately entered beneficiary information, and 
      collaborated with local officers to ensure data accuracy and confidentiality.
    </p>
  </div>
</div>


          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;