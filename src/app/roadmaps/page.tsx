import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Career Paths & Learning Topics",
    description: "Explore our professional coding roadmaps. From Frontend Mastery to Full-stack SEO Experts.",
};

const paths = [
    {
        title: "Java Development",
        icon: "🎨",
        topics: ["Core Java & Java 8 ", "Spring Boot & Spring MVC", "Spring Security", "MySQL & MongoDB"],
        description: "Build production-ready applications using Java and Spring Boot.",
        link: "/java-developer-roadmap"
    },
    {
        title: "Next.js Mastery",
        icon: "🚀",
        topics: ["HTML5 & CSS3 Architecture", "Modern JavaScript (ES6+)", "React.js & Next.js", "Tailwind CSS Utility Design"],
        description: "Start your journey by building beautiful, responsive user interfaces.",
        link: "/nextjs-mastery-roadmap"
    },
    {
        title: "Full-Stack Development",
        icon: "⚙️",
        topics: ["Next.js App Router", "Node.js & Express API", "PostgreSQL & MongoDB", "Authentication & Security"],
        description: "Master the complete web stack and build production-ready applications.",
        link: "/full-stack-roadmap"
    },
    {
        title: "SEO for Developers",
        icon: "📈",
        topics: ["Core Web Vitals Optimization", "JSON-LD Schema Implementation", "Semantic HTML Structure", "Server-Side Rendering (SSR)"],
        description: "Learn how to make your projects rank on the first page of Google.",
        link: "/seo-for-developers-roadmap"
    }

];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="py-20 bg-muted-20">
                <Container>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 underline decoration-primary decoration-4 underline-offset-8">
                            Curated Learning Paths
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Hamare step-by-step roadmaps aapko industry-ready banane ke liye design kiye gaye hain.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {paths.map((path) => (
                            <div key={path.title} className="card flex flex-col items-center text-center p-8 hover-border-primary transition-all">
                                <span className="text-5xl mb-6">{path.icon}</span>
                                <h2 className="text-2xl font-bold mb-4">{path.title}</h2>
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{path.description}</p>
                                <ul className="flex flex-col gap-2 text-left w-full mb-8 font-medium text-xs">
                                    {path.topics.map((topic) => (
                                        <li key={topic} className="flex gap-2">
                                            <span className="text-primary">•</span> {topic}
                                        </li>
                                    ))}
                                </ul>
                                {path.link ? (
                                    <Button variant="primary" className="w-full" href={path.link}>Explore Roadmap</Button>
                                ) : (
                                    <Button variant="primary" className="w-full" href="/contact">Coming Soon</Button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="bg-primary text-white p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold mb-4 text-white">Need a custom roadmap?</h2>
                            <p className="opacity-90 text-white">Aapke career goals alag ho sakte hain. Humse contact karein, hum aapke liye specific path suggest karenge.</p>
                        </div>
                        <Button href="/contact" variant="secondary" className="btn-white border-none whitespace-nowrap">Contact Consultant</Button>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
