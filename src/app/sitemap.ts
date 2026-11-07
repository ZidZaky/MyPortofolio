import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zidzaky-portfolio.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          id: baseUrl,
          en: `${baseUrl}?lang=en`,
          "x-default": baseUrl,
        },
      },
    },
  ];
}

