import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, B as Button } from "./index-CfPY7cHp.js";
import { A as ArrowRight } from "./arrow-right-iFO5RdYC.js";
import { E as EQUIPMENT_CATEGORIES } from "./index-BxQsH9KQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function EquipmentCategoryCard({
  type,
  label,
  icon,
  description,
  index = 1
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/parts",
      search: { equipment: type },
      className: "group flex flex-col bg-card border border-border hover:border-primary/60 transition-smooth p-4 relative overflow-hidden",
      "data-ocid": `categories.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-smooth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none", role: "img", "aria-label": label, children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors translate-x-0 group-hover:translate-x-1 transition-smooth" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-2 border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-primary uppercase tracking-wider", children: "Browse Parts →" }) })
      ]
    }
  );
}
const trustPoints = [
  {
    icon: Shield,
    label: "OEM Certified",
    desc: "Genuine and compatible parts with quality guarantee"
  },
  {
    icon: Truck,
    label: "Pan-India Delivery",
    desc: "Fast dispatch to all 28 states, 3–7 day delivery"
  },
  {
    icon: Headphones,
    label: "Expert Support",
    desc: "Parts specialists available Mon–Sat, 9 AM to 6 PM"
  },
  {
    icon: Zap,
    label: "Same-Day Dispatch",
    desc: "Orders placed before 2 PM dispatched same day"
  }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-card border-b border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-5",
          style: {
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, oklch(0.55 0.22 35) 39px, oklch(0.55 0.22 35) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, oklch(0.55 0.22 35) 39px, oklch(0.55 0.22 35) 40px)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-16 md:py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-primary uppercase tracking-widest", children: "50,000+ Parts In Stock" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-black text-4xl md:text-6xl text-foreground leading-none mb-4 uppercase tracking-tight", children: [
          "Industrial",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Spare Parts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Marketplace"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl", children: "Genuine and compatible parts for JCB, tractors, cranes, bulldozers, cars, bikes, aircraft, scooties, and trucks. Delivered across India." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/parts", "data-ocid": "hero.browse_catalog_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "rounded-none gap-2 font-display font-bold uppercase tracking-wider",
              children: [
                "Browse Catalog",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/parts",
              search: { q: "hydraulic" },
              "data-ocid": "hero.popular_parts_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "rounded-none gap-2 font-display uppercase tracking-wider",
                  children: "Popular Parts"
                }
              )
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block absolute right-0 top-0 bottom-0 w-2/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/hero-parts.dim_1200x700.jpg",
            alt: "Industrial spare parts",
            className: "w-full h-full object-cover opacity-40",
            onError: (e) => {
              e.currentTarget.style.display = "none";
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-card to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground uppercase tracking-tight", children: "Equipment Types" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Select your equipment to find compatible parts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/parts",
            className: "hidden md:flex items-center gap-1 text-sm text-primary font-mono hover:underline",
            "data-ocid": "categories.view_all_link",
            children: [
              "View all ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3",
          "data-ocid": "categories.list",
          children: EQUIPMENT_CATEGORIES.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            EquipmentCategoryCard,
            {
              type: cat.type,
              label: cat.label,
              icon: cat.icon,
              description: cat.description,
              index: i + 1
            },
            cat.type
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: trustPoints.map(({ icon: Icon, label, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col gap-2 p-4 border-l border-border first:border-l-0 first:pl-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: desc })
        ]
      },
      label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-primary uppercase tracking-widest mb-2", children: "NEED HELP?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground uppercase", children: "Can't find your part?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Search by part number, model, or equipment type to find exactly what you need." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/parts", "data-ocid": "home.search_cta_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-none gap-2 font-display uppercase tracking-wider whitespace-nowrap", children: [
        "Search Parts Catalog",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] }) }) })
  ] });
}
export {
  Home as default
};
