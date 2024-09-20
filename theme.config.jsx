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
      titleTemplate: "%s - Day.js - 2kB JavaScript date utility library",
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
        <meta name="baidu-site-verification" content="codeva-WNHKjLTZih" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R37B1J42C1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R37B1J42C1');
          `,
          }}
        />
      </>
    );
  },
  editLink: {
    component: null,
  },
  feedback: { content: null },
};
