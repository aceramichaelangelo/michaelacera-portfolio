import { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "web developer",
      "mobile developer",
      "Flutter",
      "Next.js",
      "UI/UX",
      "computer vision",
      "Philippines IT student",
      "Michael Angelo Acera"
    ],
    authors: [{ name: "Michael Angelo Acera" }],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
