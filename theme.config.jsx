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
      titleTemplate: "%s - dayjs – Day.js",
    };
  },
};
