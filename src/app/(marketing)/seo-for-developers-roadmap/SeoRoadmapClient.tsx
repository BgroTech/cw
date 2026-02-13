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
    id: "seo-fundamentals",
    title: "1. SEO Fundamentals & How Google Works",
    description: "Understanding search engines, how Google crawls and indexes websites, algorithms, and E-E-A-T concept.",
    resources: [
      { title: "Google Search Central", url: "https://developers.google.com/search" },
    ],
  },
  {
    id: "keyword-research",
    title: "2. Keyword Research & Strategy",
    description: "Finding profitable keywords, search intent, keyword difficulty, and building SEO strategy.",
    resources: [],
  },
  {
    id: "technical-seo",
    title: "3. Technical SEO Basics",
    description: "Site structure, URL optimization, XML sitemaps, robots.txt, and crawlability improvements.",
    resources: [
      { title: "Google Web Vitals", url: "https://web.dev/vitals/" },
    ],
  },
  {
    id: "core-web-vitals",
    title: "4. Core Web Vitals & Performance",
    description: "LCP, FID, CLS metrics, performance optimization, and Google PageSpeed tools.",
    resources: [
      { title: "Core Web Vitals Guide", url: "https://web.dev/vitals/" },
    ],
  },
  {
    id: "page-title-meta",
    title: "5. On-Page SEO: Titles & Meta Descriptions",
    description: "Crafting SEO-friendly titles, meta descriptions, character limits, and click-through optimization.",
    resources: [],
  },
  {
    id: "headings-structure",
    title: "6. Semantic HTML & Heading Structure",
    description: "H1/H2/H3 hierarchy, semantic tags, accessibility, and content structure for SEO.",
    resources: [],
  },
  {
    id: "schema-markup",
    title: "7. Schema Markup & Structured Data",
    description: "JSON-LD, Organization schema, Product schema, FAQPage, BreadcrumbList, and rich snippets.",
    resources: [
      { title: "Schema.org Reference", url: "https://schema.org/" },
    ],
  },
  {
    id: "ograph-twitter",
    title: "8. Open Graph & Social Meta Tags",
    description: "Open Graph protocol, Twitter Cards, and social sharing optimization.",
    resources: [],
  },
  {
    id: "content-optimization",
    title: "9. Content Optimization & Strategy",
    description: "Keyword placement, content length, readability, internal linking, and content gaps.",
    resources: [],
  },
  {
    id: "internal-linking",
    title: "10. Internal Linking Strategy",
    description: "Link building best practices, anchor text optimization, site authority distribution.",
    resources: [],
  },
  {
    id: "mobile-seo",
    title: "11. Mobile SEO & Responsive Design",
    description: "Mobile-first indexing, responsive design, AMP, and mobile user experience.",
    resources: [],
  },
  {
    id: "ssr-rendering",
    title: "12. Server-Side Rendering (SSR) & Static Generation",
    description: "Next.js SSR/SSG, crawlability of dynamic content, and rendering strategies.",
    resources: [
      { title: "Next.js SEO Guide", url: "https://nextjs.org/learn/seo/introduction-to-seo" },
    ],
  },
  {
    id: "image-optimization",
    title: "13. Image Optimization & Image SEO",
    description: "Image compression, alt text optimization, lazy loading, WebP format, and image indexing.",
    resources: [],
  },
  {
    id: "analytics-tracking",
    title: "14. Analytics & Tracking",
    description: "Google Analytics 4, Google Search Console, tracking conversions, and data interpretation.",
    resources: [
      { title: "Google Analytics", url: "https://analytics.google.com/" },
      { title: "Google Search Console", url: "https://search.google.com/search-console/" },
    ],
  },
  {
    id: "backlinks-authority",
    title: "15. Backlinks & Domain Authority",
    description: "Link building strategies, checking backlinks, anchor text diversity, and authority building.",
    resources: [],
  },
  {
    id: "seo-advanced",
    title: "16. Advanced SEO & Monitoring",
    description: "SEO audits, competitive analysis, ranking tracking, updates handling, and long-term strategy.",
    resources: [],
  },
];

export default function SeoRoadmapClient() {
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("completedTopicsSeo");
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
        localStorage.setItem("completedTopicsSeo", JSON.stringify(newCompleted));
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
                    { label: "SEO for Developers" }
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
