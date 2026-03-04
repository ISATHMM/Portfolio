import { motion } from "framer-motion";

const Hero = () => {
  return (
  <section
  id="home"
  className="flex items-center justify-center min-h-[100svh] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden"
>


      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* LEFT SIDE - TEXT */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 👇 IMAGE + NAME IN SAME ROW FOR MOBILE */}
          <div className="flex items-center gap-3 mb-4 md:hidden">
            {/* Small profile image */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-full opacity-20 blur-md"></div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-gray-700 shadow-lg overflow-hidden relative z-10">
                <img
                  src="./dp.JPG"
                  alt="Mohamed Isath"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text next to image */}
            <div>
              <h2 className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium tracking-wide leading-tight">
                Hello, I'm
              </h2>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white tracking-tight leading-tight">
                Mohamed Isath
              </h1>
            </div>
          </div>

          {/* 👇 Original heading for desktop */}
          <div className="hidden md:block mb-4">
            <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 tracking-tight leading-tight">
              Mohamed Isath
            </h1>
          </div>

          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mb-4"></div>

          <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-5 font-light leading-snug">
            <span className="font-semibold">Front End Developer</span> & Ui Ux Designer
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-lg leading-relaxed text-sm sm:text-base">
            A skilled web developer with experience in front-end and back-end development, including C#,
            PHP, JavaScript, HTML, CSS, Bootstrap, and MySQL. Experienced in UI/UX design with Figma and
            proficient with Visual Studio, VS Code, XAMPP, and Git. Passionate about creating responsive,
            user-friendly, and visually appealing web applications, with strong problem-solving,
            communication, and teamwork skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md dark:bg-blue-500 dark:hover:bg-blue-600 font-medium tracking-wide text-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-500 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 font-medium tracking-wide text-center"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE (DESKTOP ONLY) */}
        <motion.div
          className="hidden md:flex md:w-1/2 justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-full opacity-20 blur-xl"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-700 shadow-2xl overflow-hidden relative z-10">
              <img
                src="./dp.JPG"
                alt="Mohamed Isath"
                className="w-90 h-90  object-cover"
              />
            </div>
          </div>


          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
