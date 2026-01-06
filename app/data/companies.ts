export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface Company {
  name: string;
  slug: "reinfras" | "raimnts";
  tagline: string;
  domain: string;
  status: "Active" | "Beta" | "Stealth";
  description: string;
  metrics: Metric[];
}

export const companies: Company[] = [
  {
    name: "Reinfras",
    slug: "reinfras",
    tagline: "Infrastructure for the next generation of physical computing.",
    domain: "https://reinfras.com",
    status: "Beta",
    description:
      "Reinfras provides the foundational layer for distributed physical infrastructure networks. We enable seamless deployment and management of edge computing resources.",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Active Nodes", value: "1,240" },
      { label: "Avg Latency", value: "< 25ms" },
    ],
  },
  {
    name: "Raimnts",
    slug: "raimnts",
    tagline: "Digital provenance for high-value physical assets.",
    domain: "https://raimnts.com",
    status: "Active",
    description:
      "Raimnts creates immutable digital twins for luxury fashion and collectibles, ensuring authenticity and enabling new secondary market dynamics.",
    metrics: [
      { label: "Items Indexed", value: "85,000+" },
      { label: " Verified Owners", value: "12,500" },
      { label: "Market Cap", value: "$42M" },
    ],
  },
];
