import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DuyCode",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "DuyCode",
      logo: {
        alt: "DuyCode Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          label: "Language",
          position: "left",
          to: "docs/category/language/",
          activeBasePath: "docs/category/language",
          items: [
            {
              label: "Design Pattern",
              to: "/docs/category/design-pattern",
            },
            {
              label: "Javascript",
              to: "/docs/category/javascript",
            },
            {
              label: "HTML-CSS",
              to: "/docs/category/html-css",
            },
          ],
        },
        {
          label: "Database",
          position: "left",
          to: "docs/category/database/",
          activeBasePath: "docs/category/database",
          items: [
            {
              label: "MongoDB",
              to: "/docs/category/mongodb",
            },
            {
              label: "SQL",
              to: "/docs/category/sql",
            },
          ],
        },
        {
          label: "Framework",
          position: "left",
          to: "docs/category/framework/",
          activeBasePath: "docs/category/framework",
          items: [
            {
              label: "VueJS",
              to: "/docs/category/vuejs",
            },
            {
              label: "Google Project",
              to: "/docs/category/google-project",
            },
          ],
        },
        {
          label: "Operating Systems",
          position: "left",
          to: "docs/category/operating-systems/",
          activeBasePath: "docs/category/operating-systems",
          items: [
            {
              label: "Windows",
              to: "/docs/category/windows",
            },
          ],
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "defaultSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        {
          href: "/html/editor.3.0.html",
          label: "HTMLEditor.3.0",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
