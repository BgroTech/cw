import React from "react";
import { SITE_CONFIG } from "@/lib/metadata/config";

interface SchemaMarkupProps {
    type: "WebSite" | "Organization" | "Article" | "FAQPage" | "Course" | "BreadcrumbList";
    data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
    const baseData = {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
    };

    if (type === "WebSite") {
        Object.assign(baseData, {
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        });
    }

    if (type === "Organization") {
        Object.assign(baseData, {
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            logo: SITE_CONFIG.ogImage,
            sameAs: [
                SITE_CONFIG.links.twitter,
                SITE_CONFIG.links.github,
            ],
        });
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
        />
    );
}
