import type { MetadataRoute } from "next";
import { SITE_URL, nav, legalNav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const teraz = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: teraz, changeFrequency: "weekly", priority: 1 },
    ...nav.map((item) => ({
      url: `${SITE_URL}${item.href}`,
      lastModified: teraz,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...legalNav.map((item) => ({
      url: `${SITE_URL}${item.href}`,
      lastModified: teraz,
      changeFrequency: "yearly" as const,
      priority: 0.3
    }))
  ];
}
