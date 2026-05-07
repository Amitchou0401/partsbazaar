import { c as createLucideIcon, u as useCart, j as jsxRuntimeExports, L as Link, B as Button, S as ShoppingCart, a as ue, b as useSearch, r as reactExports, d as Search, I as Input, X, e as Badge, f as LoadingSpinner } from "./index-CfPY7cHp.js";
import { E as EmptyState } from "./EmptyState-BN22lz19.js";
import { u as useListParts } from "./useBackend-D0DDGl2S.js";
import { E as EQUIPMENT_CATEGORIES } from "./index-BxQsH9KQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const stockConfig = {
  InStock: {
    label: "IN STOCK",
    className: "bg-primary/10 text-primary border-primary/30"
  },
  LowStock: {
    label: "LOW STOCK",
    className: "bg-accent/10 text-accent-foreground border-accent/30"
  },
  OutOfStock: {
    label: "OUT OF STOCK",
    className: "bg-destructive/10 text-destructive border-destructive/30"
  }
};
function PartCard({ part, index = 1 }) {
  const addItem = useCart((s) => s.addItem);
  const isOutOfStock = part.stockStatus === "OutOfStock";
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!isOutOfStock) {
      addItem(part);
      ue.success(`${part.name} added to cart`, { duration: 2500 });
    }
  };
  const stock = stockConfig[part.stockStatus];
  const imageUrl = part.images[0] ?? "/assets/images/placeholder.svg";
  const formattedPrice = `₹${part.price.toLocaleString("en-IN")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/parts/$partId",
      params: { partId: part.id },
      className: "group block bg-card border border-border hover:border-primary/50 transition-smooth",
      "data-ocid": `parts.item.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] bg-secondary overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imageUrl,
              alt: part.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
              onError: (e) => {
                e.currentTarget.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-[10px] font-mono font-semibold px-1.5 py-0.5 border ${stock.className}`,
              children: stock.label
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono px-1.5 py-0.5 bg-background/80 text-muted-foreground border border-border", children: part.equipmentType }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono text-muted-foreground mb-0.5 uppercase tracking-wider", children: part.partNumber }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground leading-tight mb-1 truncate group-hover:text-primary transition-colors", children: part.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1 truncate", children: part.category }),
          part.modelCompatibility.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono text-muted-foreground truncate mb-2", children: part.modelCompatibility.slice(0, 2).join(" · ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 pt-2 border-t border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground", children: formattedPrice }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: isOutOfStock ? "outline" : "default",
                className: "rounded-none h-7 text-xs gap-1 px-2",
                onClick: handleAddToCart,
                disabled: isOutOfStock,
                "data-ocid": `parts.add_button.${index}`,
                children: isOutOfStock ? "Unavailable" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3 h-3" }),
                  "Add"
                ] })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const CATEGORIES = [
  "Engine",
  "Hydraulics",
  "Transmission",
  "Electrical",
  "Filters",
  "Brakes",
  "Cooling",
  "Suspension"
];
const STOCK_OPTIONS = [
  { value: "All", label: "All Stock" },
  { value: "InStock", label: "In Stock" },
  { value: "LowStock", label: "Low Stock" },
  { value: "OutOfStock", label: "Out of Stock" }
];
function Catalog() {
  const searchParams = useSearch({ strict: false });
  const [searchQuery, setSearchQuery] = reactExports.useState(searchParams.q ?? "");
  const [selectedEquipment, setSelectedEquipment] = reactExports.useState(searchParams.equipment ?? null);
  const [selectedCategory, setSelectedCategory] = reactExports.useState(null);
  const [selectedStock, setSelectedStock] = reactExports.useState(
    "All"
  );
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const { data: allParts, isLoading } = useListParts();
  const filteredParts = reactExports.useMemo(() => {
    let parts = allParts ?? [];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      parts = parts.filter(
        (p) => p.name.toLowerCase().includes(q) || p.partNumber.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.modelCompatibility.some((m) => m.toLowerCase().includes(q))
      );
    }
    if (selectedEquipment) {
      parts = parts.filter((p) => p.equipmentType === selectedEquipment);
    }
    if (selectedCategory) {
      parts = parts.filter((p) => p.category === selectedCategory);
    }
    if (selectedStock !== "All") {
      parts = parts.filter((p) => p.stockStatus === selectedStock);
    }
    return parts;
  }, [
    allParts,
    searchQuery,
    selectedEquipment,
    selectedCategory,
    selectedStock
  ]);
  const activeFilterCount = [
    selectedEquipment,
    selectedCategory,
    selectedStock !== "All"
  ].filter(Boolean).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-2xl text-foreground uppercase tracking-tight mb-4", children: "Parts Catalog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search by name, part number, or model...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "pl-9 bg-secondary border-border rounded-none",
              "data-ocid": "catalog.search_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            className: "rounded-none gap-2 relative",
            onClick: () => setShowFilters(!showFilters),
            type: "button",
            "data-ocid": "catalog.filter_toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
              "Filters",
              activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold", children: activeFilterCount })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSelectedEquipment(null),
            className: `px-3 py-1 text-xs font-mono uppercase tracking-wider border transition-smooth ${!selectedEquipment ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-muted-foreground border-border hover:border-primary/50"}`,
            "data-ocid": "catalog.equipment_filter.all",
            children: "All"
          }
        ),
        EQUIPMENT_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSelectedEquipment(
              cat.type === selectedEquipment ? null : cat.type
            ),
            className: `px-3 py-1 text-xs font-mono uppercase tracking-wider border transition-smooth ${selectedEquipment === cat.type ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-muted-foreground border-border hover:border-primary/50"}`,
            "data-ocid": `catalog.equipment_filter.${cat.type.toLowerCase()}`,
            children: [
              cat.icon,
              " ",
              cat.label
            ]
          },
          cat.type
        ))
      ] })
    ] }) }),
    showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-4 flex flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSelectedCategory(cat === selectedCategory ? null : cat),
            className: `px-2 py-0.5 text-xs border transition-smooth ${selectedCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-muted-foreground border-border hover:border-primary/50"}`,
            children: cat
          },
          cat
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Stock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: STOCK_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSelectedStock(opt.value),
            className: `px-2 py-0.5 text-xs border transition-smooth ${selectedStock === opt.value ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-muted-foreground border-border hover:border-primary/50"}`,
            children: opt.label
          },
          opt.value
        )) })
      ] }),
      activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setSelectedEquipment(null);
            setSelectedCategory(null);
            setSelectedStock("All");
          },
          className: "flex items-center gap-1 text-xs text-destructive hover:underline font-mono mt-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
            " Clear all"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-mono", children: isLoading ? "Loading..." : `${filteredParts.length} parts found` }),
        activeFilterCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          selectedEquipment && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "rounded-none text-[10px] gap-1 font-mono",
              children: [
                selectedEquipment,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSelectedEquipment(null),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                  }
                )
              ]
            }
          ),
          selectedCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "rounded-none text-[10px] gap-1 font-mono",
              children: [
                selectedCategory,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSelectedCategory(null),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center justify-center py-24",
          "data-ocid": "catalog.loading_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Loading parts..." })
        }
      ) : filteredParts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        EmptyState,
        {
          title: "No Parts Found",
          description: "Try adjusting your search or filters to find the parts you need.",
          actionLabel: "Clear Filters",
          actionTo: "/parts"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3",
          "data-ocid": "catalog.parts_list",
          children: filteredParts.map((part, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(PartCard, { part, index: i + 1 }, part.id))
        }
      )
    ] })
  ] });
}
export {
  Catalog as default
};
