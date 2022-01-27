const sidebar = {
  "/javascript/": [
    {
      title: "基础", // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      // sidebarDepth: 4, // 可选的, 默认值是 1
      children: [
        "/javascript/基础/简介",
        "/javascript/基础/标识符、保留字、关键字",
        "/javascript/基础/var、let、const",
        "/javascript/基础/变量、变量的解构赋值",
        "/javascript/基础/操作符",
        "/javascript/基础/语句",
        "/javascript/基础/数据类型",
      ],
    },
    {
      title: "内置对象", // 必要的
      // collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 4, // 可选的, 默认值是 1
      children: [
        {
          title: "基本包装类型",
          // collapsable: false, // 可选的, 默认值是 true,

          sidebarDepth: 2, // 可选的, 默认值是 1

          children: [
            // "/javascript/内置对象/基本包装类型",
            "/javascript/内置对象/Number",
            "/javascript/内置对象/String",
            "/javascript/内置对象/Boolean",
          ],
        },
        {
          title: "引用数据类型",
          // collapsable: false, // 可选的, 默认值是 true,

          sidebarDepth: 2, // 可选的, 默认值是 1

          children: [
            "/javascript/内置对象/Object",
            "/javascript/内置对象/Array",
            "/javascript/内置对象/Function",
            "/javascript/内置对象/Date",
            "/javascript/内置对象/RegExp",
          ],
        },
        {
          title: "单体内置对象",
          // collapsable: false, // 可选的, 默认值是 true,

          sidebarDepth: 2, // 可选的, 默认值是 1

          children: ["/javascript/内置对象/Math"],
        },
        {
          title: "其他常用内置对象",
          // collapsable: false, // 可选的, 默认值是 true,

          sidebarDepth: 2, // 可选的, 默认值是 1

          children: [
            "/javascript/内置对象/null",
            "/javascript/内置对象/undefined",
            "/javascript/内置对象/JSON",
            "/javascript/内置对象/Promise",
          ],
        },
      ],
    },
    // {
    //   title: "函数", // 必要的
    //   collapsable: false, // 可选的, 默认值是 true,
    //   // sidebarDepth: 4, // 可选的, 默认值是 1
    //   children: ["/javascript/函数/概述", "/javascript/函数/其他"],
    // },
    {
      title: "对象、类与面向对象编程", // 必要的
      // collapsable: false, // 可选的, 默认值是 true,
      // sidebarDepth: 4, // 可选的, 默认值是 1
      children: [
        "/javascript/对象、类与面向对象编程/This关键字",
        "/javascript/对象、类与面向对象编程/构造函数与new关键字",
        "/javascript/对象、类与面向对象编程/创建对象的方式",
        "/javascript/对象、类与面向对象编程/对象的继承",
        "/javascript/对象、类与面向对象编程/Class基本语法",
      ],
    },
    {
      title: "异步操作", // 必要的
      // collapsable: false, // 可选的, 默认值是 true,
      // sidebarDepth: 4, // 可选的, 默认值是 1
      children: [
        "/javascript/异步操作/概述",
        "/javascript/异步操作/定时器",
        "/javascript/异步操作/Promise",
      ],
    },
  ],
  "/JS设计模式/": [


    {
      title: "概述", // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      // sidebarDepth: 4, // 可选的, 默认值是 1
      children: [
        "/JS设计模式/概述/简介",

        "/JS设计模式/概述/设计模式总览",
      ],
    },
    {
      title: "创建型设计模式", // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      // sidebarDepth: 4, // 可选的, 默认值是 1
      children: [
        "/JS设计模式/创建型设计模式/单例模式",

        "/JS设计模式/创建型设计模式/工厂模式",
      ],
    },
    {
      title: "结构型设计模式", // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      // sidebarDepth: 4, // 可选的, 默认值是 1
      children: ["/JS设计模式/结构型设计模式/代理模式"],
    },
    {
      title: "行为型设计模式", // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      // sidebarDepth: 4, // 可选的, 默认值是 1
      children: ["/JS设计模式/行为型设计模式/备忘录模式"],
    },
  ],
};

module.exports = {
  sidebar,
};
