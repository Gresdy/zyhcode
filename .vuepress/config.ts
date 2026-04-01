import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  base: "/zyhcode/",
  title: "张永宏 博客",
  description: "Just playing around",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "zyh",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/Agent/DeerFlow/": [
        {
          text: "阅读指南",
          children: ["appendix-a-reading-path"],
        },
        {
          text: "第 1 部分　概览",
          children: ["01-what-is-deerflow", "02-repo-overview", "03-quick-start"],
        },
        {
          text: "第 2 部分　核心架构",
          children: ["04-langgraph-engine", "05-lead-agent", "06-middleware-pipeline", "07-context-engineering"],
        },
        {
          text: "第 3 部分　子智能体",
          children: ["08-subagent-overview", "09-subagent-executor", "10-orchestration"],
        },
        {
          text: "第 4 部分　记忆系统",
          children: ["11-memory-architecture", "12-memory-pipeline"],
        },
        {
          text: "第 5 部分　沙箱隔离",
          children: ["13-sandbox-abstraction", "14-sandbox-implementations"],
        },
        {
          text: "第 6 部分　工具与扩展",
          children: ["15-builtin-tools", "16-mcp-extensions"],
        },
        {
          text: "第 7 部分　技能系统",
          children: ["17-skills-system", "18-custom-skills"],
        },
        {
          text: "第 8 部分　网关与渠道",
          children: ["19-fastapi-gateway", "20-im-channels"],
        },
        {
          text: "第 9 部分　配置与部署",
          children: ["21-config-system", "22-model-config", "23-deployment"],
        },
        {
          text: "附录",
          children: ["appendix-b-config-reference", "appendix-c-glossary"],
        },
      ],
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
      "/docs/gongju_bushu/01.Docker/": [
        {
          text: "Docker",
          children: [
            "01.kaiyuanjianjie",
            "03.Apisix",
            "04.Apollo",
            "22.Redis",
          ],
        },
      ],
      "/docs/gongju_bushu/02.Linux/": [
        {
          text: "Linux",
          children: [
            "02.CentOS7diaozhengcipanfenqu",
            "03.IOyace",
            "04.LinuxtuxinghuajiankonggongjuCockpit",
            "05.CentOS7anzhuangmysql5.7",
            "06.zaixianLinuxminglingchaxun",
          ],
        },
      ],
      "/docs/damoxing/": [
        {
          text: "大模型对比",
          children: [
            "00.damoxingduibi",
          ],
        },
        {
          text: "国内模型",
          children: [
            "01.Qwen",
            "02.MiniMax",
            "03.Deepseek",
            "04.GLM",
            "05.Step",
            "06.Kimi",
            "09.Doubao",
            "13.Yi",
          ],
        },
        {
          text: "国外模型",
          children: [
            "07.Chatgpt",
            "08.wenxinyiyan",
            "10.Claude",
            "11.Gemini",
            "12.Llama",
          ],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      {
        text: "Agent",
        children: [
          { text: "DeerFlow", link: "/docs/Agent/DeerFlow/01-what-is-deerflow" },
          { text: "Langchain", link: "/docs/Agent/Langchain/" },
        ],
      },
      {
        text: "工具&部署",
        children: [
          { text: "Docker", link: "/docs/gongju_bushu/01.Docker/01.kaiyuanjianjie" },
          { text: "Linux", link: "/docs/gongju_bushu/02.Linux/02.CentOS7diaozhengcipanfenqu" },
        ],
      },
      {
        text: "大模型",
        children: [
          { text: "模型对比", link: "/docs/damoxing/00.damoxingduibi" },
          { text: "Qwen", link: "/docs/damoxing/01.Qwen" },
          { text: "MiniMax", link: "/docs/damoxing/02.MiniMax" },
          { text: "DeepSeek", link: "/docs/damoxing/03.Deepseek" },
          { text: "GLM", link: "/docs/damoxing/04.GLM" },
          { text: "Step", link: "/docs/damoxing/05.Step" },
          { text: "Kimi", link: "/docs/damoxing/06.Kimi" },
          { text: "ChatGPT", link: "/docs/damoxing/07.Chatgpt" },
          { text: "文心一言", link: "/docs/damoxing/08.wenxinyiyan" },
          { text: "豆包", link: "/docs/damoxing/09.Doubao" },
          { text: "Claude", link: "/docs/damoxing/10.Claude" },
          { text: "Gemini", link: "/docs/damoxing/11.Gemini" },
          { text: "Llama", link: "/docs/damoxing/12.Llama" },
          { text: "Yi", link: "/docs/damoxing/13.Yi" },
        ],
      },
      { text: "文档集", link: "/docs/theme-reco/home" },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
