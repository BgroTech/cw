import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
    return (
        <footer className="mt-auto">
            {/* PRE-FOOTER MISSION SECTION */}
            <div className="py-16 text-white text-center">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-extrabold mb-4 text-white">Shaping the Future of Indian Developers</h2>
                        <p className="text-white/90 text-xl mb-8 leading-relaxed">
                            Join thousands of students who are learning to build high-performance,
                            SEO-ready websites from scratch.
                        </p>
                        <Link href="/blog" className="btn btn-white font-bold px-10 py-4 rounded-full transition-all text-lg">
                            Start Learning for Free
                        </Link>
                    </div>
                </Container>
            </div>

            {/* MAIN FOOTER CONTENT - PREMIUM DARK LOOK */}
            {/* <div className="py-20 bg-[#0a0a0a] text-white border-t border-white/5"> */}
            <div className="py-20 bg-[#0a0a0a] text-white mt-20">
                <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* BRAND COLUMN */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="text-3xl font-extrabold tracking-tight mb-6 block">
                            <span className="text-primary">Coding</span>
                            <span className="text-white ml-1">Wallah</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Official learning platform by Coding Wallah. Humara mission hai technology
                            aur coding ko har Indian student ke liye aasaan aur accessible banana.
                            Real projects, Real SEO, Real Results.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover-bg-primary hover-text-white transition-colors text-white/50">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover-bg-primary hover-text-white transition-colors text-white/50">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover-bg-primary hover-text-white transition-colors text-white/50">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 relative inline-block text-white">
                            Resources
                            <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary"></span>
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60 group">
                            <li><Link href="/blog" className="hover-text-primary transition-colors hover-translate-x-1 inline-block">Latest Tutorials</Link></li>
                            <li><Link href="/services" className="hover-text-primary transition-colors hover-translate-x-1 inline-block">Career Roadmaps</Link></li>
                            <li><Link href="/about" className="hover-text-primary transition-colors hover-translate-x-1 inline-block">About Our Mission</Link></li>
                            <li><Link href="/contact" className="hover-text-primary transition-colors hover-translate-x-1 inline-block">1-on-1 Mentorship</Link></li>
                        </ul>
                    </div>

                    {/* POPULAR TOPICS (SEO HUB) */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 relative inline-block text-white">
                            Explore Topics
                            <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary"></span>
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            <li><Link href="/blog?category=nextjs" className="hover-text-primary transition-colors flex items-center gap-2"><span>Next.js Mastery</span> <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold">HOT</span></Link></li>
                            <li><Link href="/blog?category=seo" className="hover-text-primary transition-colors">SEO for Beginners</Link></li>
                            <li><Link href="/blog?category=react" className="hover-text-primary transition-colors">React Patterns</Link></li>
                            <li><Link href="/blog?category=deployment" className="hover-text-primary transition-colors">Vercel & Cloud</Link></li>
                        </ul>
                    </div>

                    {/* SUPPORT / NEWSLETTER */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 relative inline-block text-white">
                            Stay in Loop
                            <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary"></span>
                        </h4>
                        <p className="text-xs text-white/50 mb-4 font-medium">Naye tutorials aur updates ke liye subscribe karein.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Apna Email Likhein"
                                className=" w-full
                                            max-w-md
                                            px-4 py-3
                                            bg-white/5
                                            border border-white/10
                                            rounded-xl
                                            text-sm md:text-base
                                            placeholder:text-white/                                       
                                            focus:ring-2 focus:ring-primary focus:border-primary
                                            outline-none
                                            rounded-lg
                                            transition-all
                                        " />

                            <button className="btn btn-primary w-full text-sm py-3 font-bold rounded-lg">Join Knowledge Base</button>
                        </div>
                    </div>
                </Container>

                {/* BOTTOM BAR */}
                <Container className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <div className="order-2 md:order-1 text-center md:text-left font-medium">
                        &copy; {new Date().getFullYear()} Coding Wallah. Built with 🧡 and Precision for India.
                    </div>
                    <div className="flex gap-6 order-1 md:order-2">
                        <Link href="/privacy" className="hover-text-primary transition-colors font-medium">Privacy Policy</Link>
                        <Link href="/terms" className="hover-text-primary transition-colors font-medium">Terms of Use</Link>
                        <Link href="/sitemap.xml" className="hover-text-primary transition-colors font-medium">Sitemap</Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
