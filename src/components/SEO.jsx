import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  name = "Muhammed Aslah K", 
  type = "website",
  url = "https://your-domain.com", // Replace with your actual domain when deployed
  image = "https://your-domain.com/profile.jpg" // Replace with a dedicated open-graph image later if desired
}) {
  const siteTitle = title ? `${title} | ${name}` : `Digital Engineering Workspace | ${name}`;
  const siteDescription = description || "Digital Engineering Workspace and Portfolio of Muhammed Aslah K, specializing in Cybersecurity.";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph / LinkedIn / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}