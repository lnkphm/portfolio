export default {
  footer: <p>{new Date().getFullYear()} © lnkphm</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme")) {
            window.localStorage.setItem("theme", "dark");
          }`,
        }}
      />;
    </>
  ),
  readMore: "Read More →",
  postFooter: null,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  navs: [
  ],
};
