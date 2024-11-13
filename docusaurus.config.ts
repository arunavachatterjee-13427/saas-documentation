import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "SaaS System Documentation",
  tagline: "Complete documentation for our SaaS platform",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://arunavachatterjee-13427.github.io",
  baseUrl: "/saas-documentation/",
  organizationName: "arunavachatterjee-13427",
  projectName: "saas-documentation",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang
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
          routeBasePath: "/", // Set docs as the root
          editUrl:
            "https://github.com/arunavachatterjee-13427/saas-documentation/tree/main/",
        },
        blog: false, // Disable blog
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
      title: "SaaS Documentation",
      logo: {
        alt: "SaaS Logo",
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
              to: "/introduction/getting-started",
            },
            {
              label: "Batch Processing",
              to: "/batch-processing/overview",
            },
            {
              label: "On-Demand Processing",
              to: "/on-demand/overview",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Company Name`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
