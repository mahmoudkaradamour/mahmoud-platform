import React from "react";

/**
 * Enterprise SEO Component: JSON-LD Structured Data.
 * Optimizes the platform for Google/Bing indexing with rich snippets.
 */
export default function JsonLD({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
