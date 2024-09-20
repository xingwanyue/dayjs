export default {
  logo: (
    <>
      <img src="/logo.png" className="logo" />
      <span style={{ marginLeft: "8px" }}>Day.js</span>
    </>
  ),
  project: {
    link: "https://github.com/xingwanyue/dayjs",
  },
  docsRepositoryBase: "https://github.com/xingwanyue/dayjs",
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
  },
  footer: { component: () => null },
  search: {
    placeholder: "Search",
  },
  toc: { float: false },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Day.js",
    };
  },
  head: () => {
    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="2kB JavaScript date utility library"
        />
        <meta
          name="og:description"
          content="2kB JavaScript date utility library"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content="/logo.png" />
        <meta
          name="og:title"
          content="dayjs – 2kB JavaScript date utility library"
        />
        <meta name="og:image" content="/logo.png" />
        <meta name="apple-mobile-web-app-title" content="dayjs" />
      </>
    );
  },
  editLink: {
    component: null,
  },
  feedback: { content: null },
};
