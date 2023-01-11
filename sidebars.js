/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      label: "Getting Started",
      type: "category",
      collapsed: false,
      link: {
        type: "doc",
        id: "getting-started/README",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started",
        },
      ],
    },
    {
      label: "Core Protocol",
      type: "category",
      link: {
        type: "doc",
        id: "core-protocol/README",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "core-protocol",
        },
      ],
    },
    {
      label: "Tools",
      type: "category",
      link: { //added link tag to display sidebar on tools page
        type: "doc",
        id: "tools/README",
      },
      items: [
        "tools/dashboard",
        {
          type: "category",
          label: "Sign in with ethereum",
          link: {
            type: "doc",
            id: "tools/sign-in-with-ethereum/README",
          },
          items: ["tools/sign-in-with-ethereum/unlock-accounts"],
        },
        {
          type: "category",
          label: "Checkout",
          link: {
            type: "doc",
            id: "tools/checkout/README",
          },
          items: ["tools/checkout/configuration", "tools/checkout/collecting-metadata"],
        },
        "tools/unlock.js",
        "tools/paywall",

        {
          type: "category",
          label: "Locksmith",
          link: {
            type: "doc",
            id: "tools/locksmith/README",
          },
          items: [
            {
              type: "link",
              href: "/api/locksmith",
              label: "API",
            },
            "tools/locksmith/webhooks",
          ],
        },
        {
          type: "category",
          label: "Subgraph",
          link: {
            type: "doc",
            id: "tools/subgraph/README",
          },
          items: ["tools/subgraph/entities","tools/subgraph/queries"],
        },
        "tools/hardhat-plugin",
        "tools/rpc-provider",
      ],
    },
    {
      label: "Tutorials",
      type: "category",
      link: {
        type: "doc",
        id: "tutorials/README",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials",
        },
      ],
    },
    {
      label: "Governance",
      type: "category",
      link: {
        type: "doc",
        id: "governance/README",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "governance",
        },
      ],
    },
  ],
};

module.exports = sidebars;
