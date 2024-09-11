export default {
  logo: (
    <>
      <img src="/logo.png" className="logo" />
      <span style={{ marginLeft: "8px" }}>Day.js</span>
    </>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
  sidebar: {
    defaultMenuCollapseLevel: 0,
    autoCollapse: false,
  },
  footer: {
    text: "@d",
  },
  search: {
    placeholder: "Search",
  },
};
