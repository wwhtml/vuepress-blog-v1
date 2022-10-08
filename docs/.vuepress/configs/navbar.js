const navbar = [
  { text: "Guide", link: "/javascript/" },
  {
    text: "前端",
    items: [
      {
        text: "基础",
        items: [
          /*  */
          { text: "html&css", link: "/html&css/" },
          { text: "JavaScript", link: "/javascript/基础/简介" },
          { text: "TypeScript", link: "/ts/" },
        ],
      },

      {
        text: "框架",
        items: [
          /*  */
          { text: "vue.js", link: "/vue/" },
          { text: "react.js", link: "/react/" },
        ],
      },
    ],
  },
  {
    text: "后端",
    items: [
      /*  */
      { text: "node.js", link: "/guide/" },
      { text: "php", link: "/guide/" },
    ],
  },
  {
    text: "进阶",
    items: [
      /*  */
      { text: "JS设计模式", link: "/JS设计模式/概述/简介" },
      { text: "JS算法与数据结构", link: "/js-shu/" },
      { text: "Ajax&Axios", link: "/ajax/" },
      { text: "HTTP&HTTPS", link: "/http/" },
    ],
  },
  { text: "UI相关", link: "/guide/" },
  { text: "项目实战", link: "/guide/" },

  {
    text: "Languages",
    ariaLabel: "Language Menu",
    items: [
      { text: "中文", link: "/language/chinese/" },
      { text: "英文", link: "/language/english/" },
    ],
  },
  { text: "External", link: "https://google.com" },
];

module.exports = {
  navbar,
};
