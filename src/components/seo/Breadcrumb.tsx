import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate schema data
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.href ? `https://codingwallah.in${item.href}` : undefined,
  })).filter(item => item.item); // Only include items with href

  return (
    <>
      <SchemaMarkup 
        type="BreadcrumbList" 
        data={{
          itemListElement: schemaItems
        }}
      />
      
      <nav 
        aria-label="Breadcrumb"
        className="flex items-center gap-2 flex-wrap py-4 text-sm"
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link 
                href={item.href}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-muted-foreground font-medium">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRight size={16} className="text-muted-foreground" />
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
