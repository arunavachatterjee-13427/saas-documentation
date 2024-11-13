import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      items: ["introduction/getting-started"],
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
            "batch-processing/insurance-flow/process-overview",
            "batch-processing/insurance-flow/configuration",
            "batch-processing/insurance-flow/troubleshooting",
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
          items: [
            "on-demand/v1/process-flow",
            "on-demand/v1/api-endpoints",
            "on-demand/v1/examples",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Common",
      items: ["common/authentication", "common/error-handling"],
    },
  ],
};

export default sidebars;
