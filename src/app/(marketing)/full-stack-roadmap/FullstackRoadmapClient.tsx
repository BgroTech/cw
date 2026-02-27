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
    id: "frontend-html-css",
    title: "1. Frontend Fundamentals (HTML5 & CSS3)",
    description: "Semantic HTML, modern CSS, flexbox, grid, responsive design, and CSS preprocessors.",
    resources: [
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/" },
    ],
  },
  {
    id: "frontend-javascript",
    title: "2. JavaScript & ES6+",
    description: "Modern JavaScript, async programming, DOM manipulation, fetch API, and event handling.",
    resources: [
      { title: "JavaScript.info", url: "https://javascript.info/" },
    ],
  },
  {
    id: "frontend-react",
    title: "3. React & Frontend Architecture",
    description: "Components, hooks, state management, context API, and React best practices.",
    resources: [
      { title: "React Official Docs", url: "https://react.dev/" },
    ],
  },
  {
    id: "frontend-nextjs",
    title: "4. Next.js & Modern Frontend",
    description: "Next.js 15, App Router, SSR/SSG, API routes, and frontend optimization.",
    resources: [
      { title: "Next.js Documentation", url: "https://nextjs.org/docs" },
    ],
  },
  {
    id: "backend-nodejs",
    title: "5. Node.js Fundamentals",
    description: "Node.js runtime, npm/yarn, module system, file handling, and event-driven architecture.",
    resources: [
      { title: "Node.js Official Docs", url: "https://nodejs.org/docs/" },
    ],
  },
  {
    id: "backend-express",
    title: "6. Express.js & REST APIs",
    description: "Express framework, routing, middleware, request/response handling, and RESTful principles.",
    resources: [
      { title: "Express.js Guide", url: "https://expressjs.com/" },
    ],
  },
  {
    id: "database-sql",
    title: "7. SQL & PostgreSQL",
    description: "SQL fundamentals, database design, queries, joins, transactions, and PostgreSQL setup.",
    resources: [
      { title: "PostgreSQL Documentation", url: "https://www.postgresql.org/docs/" },
    ],
  },
  {
    id: "database-mongodb",
    title: "8. MongoDB & NoSQL",
    description: "MongoDB basics, document model, aggregation pipeline, indexing, and schema design.",
    resources: [
      { title: "MongoDB University", url: "https://university.mongodb.com/" },
    ],
  },
  {
    id: "backend-orm",
    title: "9. ORMs & Database Tools",
    description: "Prisma, TypeORM, migrations, query building, and database abstraction layers.",
    resources: [
      { title: "Prisma Documentation", url: "https://www.prisma.io/docs/" },
    ],
  },
  {
    id: "authentication",
    title: "10. Authentication & Security",
    description: "JWT, OAuth2, password hashing, CORS, HTTPS, and security best practices.",
    resources: [],
  },
  {
    id: "api-design",
    title: "11. API Design & GraphQL",
    description: "RESTful API design patterns, versioning, GraphQL basics, and API documentation.",
    resources: [],
  },
  {
    id: "testing-backend",
    title: "12. Backend Testing",
    description: "Unit testing, integration testing, Jest, Supertest, and test coverage.",
    resources: [],
  },
  {
    id: "deployment",
    title: "13. Deployment & DevOps",
    description: "Docker, containerization, CI/CD pipelines, cloud platforms (AWS, Vercel, Heroku).",
    resources: [],
  },
  {
    id: "databases-scaling",
    title: "14. Database Optimization & Scaling",
    description: "Indexing strategies, query optimization, caching, database scaling, and sharding.",
    resources: [],
  },
  {
    id: "microservices",
    title: "15. Microservices Architecture",
    description: "Service-oriented design, message queues, load balancing, and distributed systems.",
    resources: [],
  },
  {
    id: "monitoring",
    title: "16. Monitoring & Logging",
    description: "Application monitoring, error tracking (Sentry), logging, and analytics.",
    resources: [],
  },
  {
    id: "fullstack-projects",
    title: "17. Real-World Full-Stack Projects",
    description: "Build SaaS applications, e-commerce platforms, real-time applications, and production systems.",
    resources: [],
  },
];

export default function FullstackRoadmapClient() {
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("completedTopicsFullstack");
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
        localStorage.setItem("completedTopicsFullstack", JSON.stringify(newCompleted));
    };

    const calculateProgress = () => {
        if (roadmapData.length === 0) return 0;
        return Math.round((completedTopics.length / roadmapData.length) * 100);
    };

    if (!isLoaded) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse text-muted-foreground">
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
                    { label: "Full-Stack Development" }
                ]} />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="sticky top-6 z-20 mb-12 p-6 rounded-2xl shadow-xl glass-dark card"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Award className="text-accent" /> Your Progress
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
