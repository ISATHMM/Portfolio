"use client";

import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  image: string;
  technologies: string[];
  link?: string; // ✅ Optional link for Figma projects
}

interface ProjectsProps {
  onProjectClick?: (id: number) => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Online Dress Shop Website",
    description:
      "Developed a fully functional online dress shop website focusing on both front-end and back-end development as part of academic coursework.",
    role: "Full Stack Developer",
    image: "/dress.webp",
    technologies: ["HTML", "Tailwindcss", "JavaScript", "PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 2,
    title: "Bus Reservation System",
    description:
      "Designed and implemented a command-line bus reservation system in Java that manages seat booking, reservations, and schedule viewing.",
    role: "Java Developer",
    image: "/bus.jpg",
    technologies: ["Java", "OOP", "Command-line Interface"],
  },
  {
    id: 3,
    title: "Car Parking System (UI/UX Design)",
    description:
      "Designed the UI/UX for a car parking management system using Figma, focusing on usability and navigation for parking slot booking and management.",
    role: "UI/UX Designer",
    image: "/park.jpg",
    technologies: ["Figma", "UI/UX Design", "User-Centered Design"],
    // link: "https://www.figma.com/design/your-car-parking-link", // 🔗 Add your actual link
  },
  {
    id: 4,
    title: "OTT Platform (UI/UX Design)",
    description:
      "Created UI/UX designs for an OTT video streaming platform interface in Figma, enhancing navigation for browsing, renting, and managing videos.",
    role: "UI/UX Designer",
    image: "/ott.webp",
    technologies: ["Figma", "UI/UX Design", "Wireframing"],
    // link: "https://www.figma.com/design/your-ott-platform-link", // 🔗 Add your actual link
  },
  {
    id: 5,
    title: "Grocery Shop (UI/UX Design)",
    description:
      "Developed UI/UX designs for an online grocery shopping interface using Figma, focusing on simplicity and efficiency in browsing, cart management, and checkout.",
    role: "UI/UX Designer",
    image: "/grocer.jpg",
    technologies: ["Figma", "UI/UX Design", "Wireframing"],
    // link: "https://www.figma.com/design/your-grocery-shop-link", // 🔗 Add your actual link
  },
  {
    id: 6,
    title: "Retail POS System",
    description:
      "Developed a comprehensive Retail Point of Sale (POS) system to manage sales, inventory, and customer transactions efficiently. Integrated reporting features to track daily sales and stock levels.",
    role: "Full Stack Developer",
    image: "/posres.jpg",
    technologies: ["C#", "Windows Forms", "SQL Server", "CRUD Operations", "Inventory Management", "Guna UI"],
    link: "https://github.com/ISATHMM/Reatil_POS",
  },
  {
    id: 7,
    title: "Employee Salary Management System",
    description:
      "Created an employee salary management application using C# enabling salary calculations and employee data management.",
    role: "C# Developer",
    image: "/gri.jpg",
    technologies: ["C#", "Windows Forms", "CRUD Operations"],
  },
  {
    id: 8,
    title: "Kick Judo Sports Club Management System",
    description:
      "Developed a management system for Kick Judo Sports Club to handle member registration, class schedules, attendance tracking, and performance monitoring. Integrated reporting tools for coaches and administrators.",
    role: "Full Stack Developer",
    image: "/judo.jpg",
    technologies: ["C#", "Windows Forms", "CRUD Operations", "Database Management", "Scheduling System"],
  },
];

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visibleProjects = projects.slice(currentIndex, currentIndex + 4);
  if (visibleProjects.length < 4) {
    visibleProjects.push(...projects.slice(0, 4 - visibleProjects.length));
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-center transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto flex gap-6 overflow-hidden px-4">
        {visibleProjects.map((project) => {
          const CardContent = (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );

          return (
            <div
              key={project.id}
              className="min-w-[250px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
              onClick={() => !project.link && onProjectClick?.(project.id)}
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CardContent}
                </a>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-blue-600 dark:bg-blue-400 w-5"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
