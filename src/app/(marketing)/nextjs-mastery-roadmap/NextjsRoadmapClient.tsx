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
    id: "html-css-basics",
    title: "1. HTML5 & CSS3 Fundamentals",
    description: "Master semantic HTML and modern CSS. Learn flexbox, grid, responsive design, and CSS animations.",
    resources: [
      { title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { title: "CSS Tricks", url: "https://css-tricks.com/" },
    ],
  },
  {
    id: "javascript-basics",
    title: "2. JavaScript ES6+ Essentials",
    description: "Learn modern JavaScript: arrow functions, destructuring, async/await, promises, and DOM manipulation.",
    resources: [
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    id: "react-fundamentals",
    title: "3. React Fundamentals",
    description: "Components, JSX, hooks (useState, useEffect), props, and state management basics.",
    resources: [
      { title: "React Official Docs", url: "https://react.dev/" },
    ],
  },
  {
    id: "react-advanced",
    title: "4. Advanced React Patterns",
    description: "Custom hooks, context API, performance optimization, lazy loading, and error boundaries.",
    resources: [],
  },
  {
    id: "nextjs-basics",
    title: "5. Next.js 15 Basics",
    description: "App Router, Server Components, pages, routing, and file-based navigation system.",
    resources: [
      { title: "Next.js Documentation", url: "https://nextjs.org/docs" },
    ],
  },
  {
    id: "nextjs-advanced",
    title: "6. Advanced Next.js Patterns",
    description: "Middleware, dynamic routes, API routes, image optimization, and font loading strategies.",
    resources: [],
  },
  {
    id: "data-fetching",
    title: "7. Data Fetching & SSR",
    description: "getServerSideProps, getStaticProps, ISR (Incremental Static Regeneration), and data revalidation.",
    resources: [],
  },
  {
    id: "styling",
    title: "8. Styling Solutions",
    description: "Tailwind CSS, CSS Modules, styled-components, SASS, and utility-first CSS frameworks.",
    resources: [
      { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ],
  },
  {
    id: "seo-nextjs",
    title: "9. SEO & Metadata",
    description: "Meta tags optimization, dynamic metadata, Open Graph, structured data, and XML sitemaps.",
    resources: [],
  },
  {
    id: "animations",
    title: "10. Animations & Interactions",
    description: "Framer Motion, CSS animations, page transitions, micro-interactions, and scroll effects.",
    resources: [
      { title: "Framer Motion", url: "https://www.framer.com/motion/" },
    ],
  },
  {
    id: "testing",
    title: "11. Testing & Debugging",
    description: "Jest, React Testing Library, E2E testing with Playwright, and debugging strategies.",
    resources: [],
  },
  {
    id: "performance",
    title: "12. Performance Optimization",
    description: "Core Web Vitals, image optimization, code splitting, lazy loading, and bundle analysis.",
    resources: [],
  },
  {
    id: "state-management",
    title: "13. State Management",
    description: "Redux, Zustand, TanStack Query (React Query), and global state patterns in Next.js.",
    resources: [],
  },
  {
    id: "deployment",
    title: "14. Deployment & DevOps",
    description: "Vercel deployment, environment variables, CI/CD pipelines, monitoring, and analytics.",
    resources: [
      { title: "Vercel Docs", url: "https://vercel.com/docs" },
    ],
  },
  {
    id: "projects",
    title: "15. Real-World Projects",
    description: "Build portfolio projects, SaaS applications, e-commerce sites, and production-ready applications.",
    resources: [],
  },
];

export default function NextjsRoadmapClient() {
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("completedTopicsNextjs");
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
        localStorage.setItem("completedTopicsNextjs", JSON.stringify(newCompleted));
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
                    { label: "Next.js Mastery" }
                ]} />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="sticky top-6 z-20 mb-12 p-6 rounded-2xl shadow-xl glass-dark"
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
