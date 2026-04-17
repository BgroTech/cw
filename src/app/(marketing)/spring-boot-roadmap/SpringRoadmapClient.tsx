"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, ExternalLink, Award } from "lucide-react";
import clsx from "clsx";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/seo/Breadcrumb";

const roadmapData = [
  {
    id: "spring-boot-fundamentals",
    title: "1. Spring Boot Fundamentals",
    description: "Begin your journey by understanding how Spring Boot simplifies backend development. Learn how to create projects using Spring Initializr, explore project structure, and understand how auto-configuration and starter dependencies eliminate boilerplate code and speed up development.",
    resources: [
      { title: "Complete Spring Boot Tutorial (Video)", url: "https://youtu.be/Ga5kRSu-W5Y?si=HU74l2R7vFQ88Q8p" },
      { title: "What is Spring Boot", url: "#" },
      { title: "Spring vs Spring Boot", url: "#" },
      { title: "Spring Initializr Setup", url: "https://start.spring.io/" },
      { title: "Project Structure (main/resources)", url: "#" },
    ],
  },
  {
    id: "spring-core-internals",
    title: "2. Spring Core Internals (Must Know)",
    description: "Master the internal working of Spring Boot — a critical area for interviews. Understand Inversion of Control, Dependency Injection, bean lifecycle, and how Spring Boot applications actually start and manage objects behind the scenes.",
    resources: [
      { title: "Complete Spring Boot Tutorial (Video)", url: "https://youtu.be/Ga5kRSu-W5Y?si=HU74l2R7vFQ88Q8p" },
      { title: "Inversion of Control (IoC)", url: "#" },
      { title: "Dependency Injection (Constructor vs Setter)", url: "#" },
      { title: "Bean Lifecycle (init, destroy)", url: "#" },
      { title: "ApplicationContext vs BeanFactory", url: "#" },
      { title: "How Spring Boot App Starts Internally", url: "#" },
      { title: "Auto Configuration Explained", url: "#" },
      { title: "Component Scanning", url: "#" },
    ],
  },
  {
    id: "core-annotations",
    title: "3. Core Annotations & DI",
    description: "Learn how Spring uses annotations to manage application components. Understand how objects are created, wired, and managed automatically using Dependency Injection to build loosely coupled and scalable systems.",
    resources: [
      { title: "@SpringBootApplication", url: "#" },
      { title: "@Component, @Service, @Repository", url: "#" },
      { title: "@Autowired", url: "#" },
      { title: "@Configuration & @Bean", url: "#" },
    ],
  },
  {
    id: "rest-api",
    title: "4. Building REST APIs",
    description: "Design and build RESTful APIs used in real-world applications. Learn how to handle HTTP requests, send structured JSON responses, and follow best practices for scalable API design.",
    resources: [
      { title: "Complete Spring Boot Tutorial (Video)", url: "https://youtu.be/Ga5kRSu-W5Y?si=HU74l2R7vFQ88Q8p" },
      { title: "@RestController", url: "#" },
      { title: "@GetMapping, @PostMapping", url: "#" },
      { title: "@RequestBody", url: "#" },
      { title: "HTTP Methods (GET, POST, PUT, DELETE)", url: "#" },
    ],
  },
  {
    id: "spring-data-jpa",
    title: "5. Spring Data JPA",
    description: "Integrate your application with a database using Spring Data JPA. Learn ORM concepts, map Java objects to database tables, and perform efficient CRUD operations without writing complex SQL queries.",
    resources: [
      { title: "Complete Spring Boot Tutorial (Video)", url: "https://youtu.be/Ga5kRSu-W5Y?si=HU74l2R7vFQ88Q8p" },
      { title: "JPA & Hibernate Basics", url: "#" },
      { title: "@Entity Mapping", url: "#" },
      { title: "JpaRepository", url: "#" },
      { title: "CRUD Operations", url: "#" },
    ],
  },
  {
    id: "entity-relationships",
    title: "6. Entity Relationships",
    description: "Handle complex real-world database relationships by designing proper entity mappings. Learn how to manage associations and avoid performance issues like infinite loops and excessive queries.",
    resources: [
      { title: "OneToOne Mapping", url: "#" },
      { title: "OneToMany & ManyToOne", url: "#" },
      { title: "ManyToMany", url: "#" },
      { title: "Fetch Types (EAGER vs LAZY)", url: "#" },
      { title: "DTO Pattern", url: "#" },
    ],
  },
  {
    id: "validation-exception",
    title: "7. Validation & Exception Handling",
    description: "Make your APIs production-ready by validating user input and handling errors gracefully. Learn how to create consistent error responses and improve API reliability and user experience.",
    resources: [
      { title: "@Valid Annotation", url: "#" },
      { title: "Custom Validation", url: "#" },
      { title: "@ControllerAdvice", url: "#" },
    ],
  },
  {
    id: "config-env",
    title: "8. Configuration & Environment",
    description: "Manage application configuration across environments like development and production. Learn how to externalize configs, use profiles, and secure sensitive information using environment variables.",
    resources: [
      { title: "application.properties vs yml", url: "#" },
      { title: "Profiles (dev, prod)", url: "#" },
      { title: "Environment Variables", url: "#" },
      { title: "@Value & @ConfigurationProperties", url: "#" },
    ],
  },
  {
    id: "security-jwt",
    title: "9. Spring Security + JWT",
    description: "Secure your backend APIs using authentication and authorization. Implement JWT-based login systems, protect endpoints, and control access using roles and permissions.",
    resources: [
      { title: "Complete Spring Boot Tutorial (Video)", url: "https://youtu.be/Ga5kRSu-W5Y?si=HU74l2R7vFQ88Q8p" },
      { title: "Spring Security Basics", url: "#" },
      { title: "JWT Token Flow", url: "#" },
      { title: "Login API", url: "#" },
      { title: "Role-Based Access", url: "#" },
    ],
  },
  {
    id: "testing",
    title: "10. Testing & Debugging",
    description: "Ensure your application is reliable by writing unit and integration tests. Learn debugging techniques to quickly identify and fix issues in real-world projects.",
    resources: [
      { title: "JUnit Basics", url: "#" },
      { title: "Mockito", url: "#" },
      { title: "Integration Testing", url: "#" },
    ],
  },
  {
    id: "build-jar",
    title: "11. Build & Package",
    description: "Prepare your application for deployment by building executable JAR files. Understand the Maven build lifecycle and how to run your application in production environments.",
    resources: [
      { title: "Maven Lifecycle", url: "#" },
      { title: "Generate JAR", url: "#" },
      { title: "Run JAR (java -jar)", url: "#" },
    ],
  },
  {
    id: "dockerizing",
    title: "12. Dockerizing Spring Boot",
    description: "Containerize your application using Docker to ensure consistent environments across development and production. Learn how to build images and run containers efficiently.",
    resources: [
      { title: "Complete Spring Boot Tutorial (Video)", url: "https://youtu.be/Ga5kRSu-W5Y?si=HU74l2R7vFQ88Q8p" },
      { title: "Dockerfile for Spring Boot", url: "#" },
      { title: "Build Docker Image", url: "#" },
      { title: "Run Container", url: "#" },
      { title: "Port Mapping", url: "#" },
    ],
  },
  {
    id: "deploy-render",
    title: "13. Deploy on Render (Free)",
    description: "Deploy your Spring Boot application live using Render. Learn how to connect your GitHub repository, configure environment variables, deploy using Docker, and get a publicly accessible backend URL.",
    resources: [
      { title: "Complete Spring Boot Tutorial (Video)", url: "https://youtu.be/Ga5kRSu-W5Y?si=HU74l2R7vFQ88Q8p" },
      { title: "Push Code to GitHub", url: "#" },
      { title: "Create Render Service", url: "https://render.com/" },
      { title: "Deploy using Docker", url: "#" },
    ],
  },
];

export default function SpringBootRoadmapClient() {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("completedTopicsSpringBoot");
    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  const toggleTopic = (id: string) => {
    const newCompleted = completedTopics.includes(id)
      ? completedTopics.filter((t) => t !== id)
      : [...completedTopics, id];

    setCompletedTopics(newCompleted);
    localStorage.setItem("completedTopicsSpringBoot", JSON.stringify(newCompleted));
  };

  const calculateProgress = () => {
    if (roadmapData.length === 0) return 0;
    return Math.round((completedTopics.length / roadmapData.length) * 100);
  };

  if (!isLoaded) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 animate-pulse text-muted-foreground">
        Loading roadmap...
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Roadmaps", href: "/roadmaps" },
          { label: "Spring Boot Mastery" }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-6 z-20 mb-12 p-6 rounded-2xl shadow-xl glass-dark card"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Award className="text-accent" /> Spring Boot Roadmap Progress
            </h2>
            <span className="text-2xl font-bold text-primary">{calculateProgress()}%</span>
          </div>
          <div className="w-full bg-muted-50 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-primary h-3"
              initial={{ width: 0 }}
              animate={{ width: `${calculateProgress()}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 relative">
          <AnimatePresence>
            {roadmapData.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={clsx(
                  "relative p-6 rounded-2xl border-2 transition-all duration-300 backdrop-blur-sm group",
                  completedTopics.includes(topic.id)
                    ? "glass-dark border-primary shadow-[0_0_20px_-5px_rgba(var(--primary),0.2)]"
                    : "glass-dark border-transparent hover-border-primary hover-bg-muted-20"
                )}
              >
                <div className="flex items-start gap-6">
                  <button
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    className="mt-1 shrink-0 bg-transparent border-none p-0 transition-transform active:scale-95 focus:outline-none"
                    aria-label={completedTopics.includes(topic.id) ? "Mark as incomplete" : "Mark as complete"}
                  >
                    {completedTopics.includes(topic.id) ? (
                      <CheckCircle2 className="h-8 w-8 text-white fill-success drop-shadow-success" />
                    ) : (
                      <Circle className="h-8 w-8 text-muted-foreground transition-colors" />
                    )}
                  </button>

                  <div className="flex-1">
                    <h3 className={clsx(
                      "text-xl md:text-2xl font-bold mb-3 transition-colors",
                      completedTopics.includes(topic.id) ? "text-muted-foreground line-through decoration-2 decoration-slate-600" : "group-hover-text-primary"
                    )}>
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{topic.description}</p>

                    {topic.resources.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="flex flex-col gap-3 bg-muted rounded-lg p-4"
                      >
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                          Recommended Resources
                        </p>
                        <ul className="flex flex-col gap-2 list-none">
                          {topic.resources.map((resource, i) => (
                            <li key={i}>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary hover-underline transition-colors gap-1"
                              >
                                <ExternalLink className="h-3 w-3" />
                                {resource.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}
