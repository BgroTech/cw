"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, ExternalLink, Award } from "lucide-react";
import { roadmapData } from "@/data/roadmapData";
import clsx from "clsx";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/seo/Breadcrumb";

export default function RoadmapClient() {
    const [completedTopics, setCompletedTopics] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("completedTopics");
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
        localStorage.setItem("completedTopics", JSON.stringify(newCompleted));
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
                {/* Breadcrumb Navigation */}
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Roadmaps", href: "/roadmaps" },
                    { label: "Java Developer" }
                ]} />

                {/* Progress Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="sticky top-6 z-20 mb-12 p-6 rounded-2xl shadow-xl glass-dark card"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Award className="text-accent" /> Java Developer Roadmap Progress
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
        </>
    );
}
