import Link from "next/link";

interface BlogCardProps {
    title: string;
    description: string;
    slug: string;
    date: string;
    readingTime?: number;
}

export default function BlogCard({ title, description, slug, date, readingTime }: BlogCardProps) {
    return (
        <article className="card flex flex-col h-full group p-6">
            <div className="mb-4 h-48 bg-muted rounded-lg overflow-hidden flex flex-col items-center justify-center relative transition-colors">
                <span className="absolute top-4 left-4 py-1 px-3 bg-white text-primary text-[10px] font-bold rounded-full shadow-sm">NEW</span>
                <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">{date}</p>
                {readingTime && (
                    <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mt-2">
                        {readingTime} min read
                    </p>
                )}
            </div>
            <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover-text-primary transition-colors leading-snug">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t">
                <Link href={`/blog/${slug}`} className="text-primary font-bold text-sm flex items-center gap-2 group">
                    Explore Now
                    <span className="group-hover-translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </article>
    );
}
