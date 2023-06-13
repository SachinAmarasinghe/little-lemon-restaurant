import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, link, image }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href="http://mysite.com/example" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Google / Search Engine Tags */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={link} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
