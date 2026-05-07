import { c as createLucideIcon, g as useParams, u as useCart, r as reactExports, j as jsxRuntimeExports, f as LoadingSpinner, L as Link, e as Badge, B as Button, S as ShoppingCart, a as ue } from "./index-CfPY7cHp.js";
import { E as EmptyState } from "./EmptyState-BN22lz19.js";
import { a as useGetPart } from "./useBackend-D0DDGl2S.js";
import { C as CircleCheck } from "./circle-check-Dwxi1gkl.js";
import { A as ArrowLeft } from "./arrow-left-B_U8l9Fo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode);
const stockIcons = {
  InStock: {
    icon: CircleCheck,
    label: "In Stock",
    className: "text-primary"
  },
  LowStock: {
    icon: CircleAlert,
    label: "Low Stock",
    className: "text-accent-foreground"
  },
  OutOfStock: {
    icon: CircleX,
    label: "Out of Stock",
    className: "text-destructive"
  }
};
function PartDetail() {
  const { partId } = useParams({ from: "/parts/$partId" });
  const { data: part, isLoading } = useGetPart(partId);
  const addItem = useCart((s) => s.addItem);
  const [quantity, setQuantity] = reactExports.useState(1);
  const [selectedImage, setSelectedImage] = reactExports.useState(0);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center justify-center min-h-[60vh]",
        "data-ocid": "part_detail.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Loading part details..." })
      }
    );
  }
  if (!part) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        title: "Part Not Found",
        description: "This part doesn't exist or may have been removed.",
        actionLabel: "Back to Catalog",
        actionTo: "/parts"
      }
    ) });
  }
  const stockInfo = stockIcons[part.stockStatus];
  const StockIcon = stockInfo.icon;
  const isOutOfStock = part.stockStatus === "OutOfStock";
  const images = part.images.length > 0 ? part.images : ["/assets/images/placeholder.svg"];
  const handleAddToCart = () => {
    addItem(part, quantity);
    ue.success(`${quantity}× ${part.name} added to cart`, {
      duration: 3e3
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-3 flex items-center gap-2 text-xs text-muted-foreground font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/parts", className: "hover:text-primary transition-colors", children: "Parts Catalog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate max-w-[200px]", children: part.name })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/parts",
          className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-mono",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3 h-3" }),
            " Back to Catalog"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          "data-ocid": "part_detail.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-card border border-border overflow-hidden mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: images[selectedImage],
                  alt: part.name,
                  className: "w-full h-full object-cover",
                  onError: (e) => {
                    e.currentTarget.src = "/assets/images/placeholder.svg";
                  }
                }
              ) }),
              images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedImage(i),
                  className: `w-16 h-16 border overflow-hidden transition-smooth ${selectedImage === i ? "border-primary" : "border-border hover:border-primary/50"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: img,
                      alt: `${part.name} ${i + 1}`,
                      className: "w-full h-full object-cover"
                    }
                  )
                },
                img
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "rounded-none text-[10px] font-mono uppercase",
                    children: part.equipmentType
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center gap-1 text-xs font-mono ${stockInfo.className}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StockIcon, { className: "w-3.5 h-3.5" }),
                      stockInfo.label
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "font-display font-black text-2xl text-foreground uppercase tracking-tight mb-1",
                  "data-ocid": "part_detail.name",
                  children: part.name
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-sm text-primary mb-4", children: [
                "PN: ",
                part.partNumber
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: part.description }),
              part.modelCompatibility.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2", children: "Compatible Models" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: part.modelCompatibility.map((model) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "rounded-none text-xs font-mono",
                    children: model
                  },
                  model
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-black text-3xl text-foreground", children: [
                    "₹",
                    part.price.toLocaleString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: "Per unit · Excl. taxes" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth",
                        onClick: () => setQuantity(Math.max(1, quantity - 1)),
                        "data-ocid": "part_detail.quantity_decrease",
                        children: "−"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-10 text-center font-mono text-sm",
                        "data-ocid": "part_detail.quantity_value",
                        children: quantity
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth",
                        onClick: () => setQuantity(quantity + 1),
                        "data-ocid": "part_detail.quantity_increase",
                        children: "+"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-mono text-muted-foreground", children: [
                    "Total: ₹",
                    (part.price * quantity).toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "w-full rounded-none gap-2 font-display font-bold uppercase tracking-wider",
                    size: "lg",
                    disabled: isOutOfStock,
                    onClick: handleAddToCart,
                    "data-ocid": "part_detail.add_to_cart_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                      isOutOfStock ? "Out of Stock" : "Add to Cart"
                    ]
                  }
                )
              ] }),
              part.specifications.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3", children: "Specifications" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border", children: part.specifications.map(([key, value], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center justify-between px-3 py-2 text-xs ${i % 2 === 0 ? "bg-background" : "bg-card"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground uppercase tracking-wider", children: key }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: value })
                    ]
                  },
                  key
                )) })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  PartDetail as default
};
