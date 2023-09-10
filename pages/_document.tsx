import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "lnkphm",
    description: "lnkphm Porfolio",
    image: "https://lnkphm.github.io/static/img/social-share.png",
  };

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon16.png" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
