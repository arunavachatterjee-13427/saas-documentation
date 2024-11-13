import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";

const config: Config = {
  title: "SaaS Documentation",
  tagline: "System Documentation Portal",
  url: "https://placeholder.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "arunavachatterjee-13427",
  projectName: "saas-documentation",

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
          editUrl:
            "https://github.com/arunavachatterjee-13427/saas-documentation/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "SaaS Documentation",
      logo: {
        alt: "SaaS Documentation Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "dropdown",
          label: "Flows",
          position: "left",
          items: [
            {
              label: "Batch Processing",
              to: "/docs/batch-processing/overview",
            },
            {
              label: "On-Demand",
              to: "/docs/on-demand/overview",
            },
          ],
        },
        {
          href: "https://github.com/arunavachatterjee-13427/saas-documentation",
          label: "GitHub",
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
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Batch Processing",
              to: "/docs/batch-processing/overview",
            },
            {
              label: "On-Demand Processing",
              to: "/docs/on-demand/overview",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Company Name. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
