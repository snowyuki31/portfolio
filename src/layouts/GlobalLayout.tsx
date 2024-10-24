import React from "react";
import "@/styles/global.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type GlobalLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonicalURL?: string;
  image?: string;
  ogUrl?: string;
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  title = "",
  description = "",
  canonicalURL = "",
  image = "",
  ogUrl = "",
}) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="canonical" href={canonicalURL} />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ogUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </head>
      <body>
        <div className="min-h-screen flex flex-col dark">
          <Header />
          <main className="flex-grow dark:bg-gray-900">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default GlobalLayout;
