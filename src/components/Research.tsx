import React from 'react';
import { motion } from 'framer-motion';
const Research = () => {
  return <section id="research" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            Research & Innovation
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Advancing the intersection of technology and education through
            data-driven research and innovative methodologies.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
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
          delay: 0.2
        }} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Big Data Research" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Advanced Big Data Technologies for Educational System
                  Optimization
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Esoft Metro Campus | 2023 - 2025
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  This research initiative focuses on implementing sophisticated
                  Big Data frameworks to enhance enrollment processes and
                  optimize operational efficiency at CMT Campus in Kalmunai,
                  establishing a scalable model for educational institutions.
                </p>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                  Research Objectives:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  <li>
                    Develop advanced analytics models for enrollment pattern
                    identification and strategic recruitment optimization
                  </li>
                  <li>
                    Implement machine learning algorithms for predictive
                    analytics focused on student success metrics and retention
                  </li>
                  <li>
                    Design comprehensive data-driven decision frameworks for
                    administrative operations and resource allocation
                  </li>
                  <li>
                    Architect scalable data infrastructure specifically tailored
                    for educational institution requirements
                  </li>
                </ul>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                  Methodology:
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  The research employs an integrated methodology combining
                  quantitative data analysis with qualitative assessment of
                  institutional processes. Advanced Big Data technologies
                  including Apache Hadoop ecosystem, Apache Spark, and custom
                  ETL pipelines are utilized for data processing, visualization,
                  and predictive analytics.
                </p>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                  Impact & Outcomes:
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Initial implementation has demonstrated a 15% improvement in
                  enrollment processing efficiency, 20% enhancement in resource
                  allocation precision, and establishment of a predictive model
                  for student success with 78% accuracy. The research is ongoing
                  with plans to extend the framework to additional educational
                  institutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Research;