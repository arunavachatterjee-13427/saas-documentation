import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/overview"],
    },
    {
      type: "category",
      label: "Batch Processing",
      items: [
        "batch-processing/overview",
        {
          type: "category",
          label: "Insurance Flow",
          items: [
            "batch-processing/insurance-flow/overview",
            "batch-processing/insurance-flow/configuration",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "On-Demand Processing",
      items: [
        "on-demand/overview",
        {
          type: "category",
          label: "Version 1",
          items: ["on-demand/version1/overview"],
        },
      ],
    },
  ],
};

export default sidebars;
