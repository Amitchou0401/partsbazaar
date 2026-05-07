import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, h as createSlot, i as cn, u as useCart, k as useNavigate, S as ShoppingCart, I as Input, B as Button, a as ue } from "./index-CfPY7cHp.js";
import { E as EmptyState } from "./EmptyState-BN22lz19.js";
import { b as usePlaceOrder } from "./useBackend-D0DDGl2S.js";
import { A as ArrowLeft } from "./arrow-left-B_U8l9Fo.js";
import { A as ArrowRight } from "./arrow-right-iFO5RdYC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
const emptyShipping = {
  name: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
  phone: ""
};
function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [shipping, setShipping] = reactExports.useState(emptyShipping);
  const [checkoutStep, setCheckoutStep] = reactExports.useState("cart");
  const navigate = useNavigate();
  const placeOrder = usePlaceOrder();
  const subtotal = items.reduce((sum, item) => {
    var _a;
    const price = ((_a = item.part) == null ? void 0 : _a.price) ?? 0;
    return sum + price * item.quantity;
  }, 0);
  const handleFieldChange = (field) => (e) => {
    setShipping((s) => ({ ...s, [field]: e.target.value }));
  };
  const isShippingComplete = Object.entries(shipping).filter(([k]) => k !== "addressLine2").every(([, v]) => v.trim().length > 0);
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!isShippingComplete) return;
    try {
      const orderId = await placeOrder.mutateAsync({
        items,
        shippingInfo: shipping
      });
      clearCart();
      navigate({ to: "/order-confirmation/$orderId", params: { orderId } });
    } catch {
      ue.error("Failed to place order. Please try again.");
    }
  };
  if (items.length === 0 && checkoutStep === "cart") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmptyState,
      {
        title: "Your Cart is Empty",
        description: "Browse our catalog to find the spare parts you need.",
        actionLabel: "Browse Parts",
        actionTo: "/parts",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-8 h-8 text-muted-foreground" })
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-2xl text-foreground uppercase tracking-tight", children: checkoutStep === "cart" ? "Shopping Cart" : "Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1 font-mono", children: [
        items.length,
        " items"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: checkoutStep === "cart" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "cart.items_list", children: items.map((item, i) => {
        const part = item.part;
        if (!part) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border flex gap-4 p-4",
            "data-ocid": `cart.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-secondary border border-border flex-shrink-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: part.images[0] ?? "/assets/images/placeholder.svg",
                  alt: part.name,
                  className: "w-full h-full object-cover",
                  onError: (e) => {
                    e.currentTarget.src = "/assets/images/placeholder.svg";
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono text-muted-foreground mb-0.5", children: part.partNumber }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground truncate", children: part.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  part.equipmentType,
                  " · ",
                  part.category
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary text-sm",
                        onClick: () => updateQuantity(item.partId, item.quantity - 1),
                        "data-ocid": `cart.quantity_decrease.${i + 1}`,
                        children: "−"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center font-mono text-xs", children: item.quantity }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary text-sm",
                        onClick: () => updateQuantity(item.partId, item.quantity + 1),
                        "data-ocid": `cart.quantity_increase.${i + 1}`,
                        children: "+"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-sm", children: [
                      "₹",
                      (part.price * item.quantity).toLocaleString(
                        "en-IN"
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "text-muted-foreground hover:text-destructive transition-colors",
                        onClick: () => removeItem(item.partId),
                        "data-ocid": `cart.delete_button.${i + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              ] })
            ]
          },
          item.partId
        );
      }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePlaceOrder, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground uppercase mb-4", children: "Shipping Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: shipping.name,
                  onChange: handleFieldChange("name"),
                  className: "rounded-none mt-1",
                  required: true,
                  "data-ocid": "checkout.name_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Address Line 1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: shipping.addressLine1,
                  onChange: handleFieldChange("addressLine1"),
                  className: "rounded-none mt-1",
                  required: true,
                  "data-ocid": "checkout.address1_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Address Line 2 (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: shipping.addressLine2,
                  onChange: handleFieldChange("addressLine2"),
                  className: "rounded-none mt-1",
                  "data-ocid": "checkout.address2_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: shipping.city,
                  onChange: handleFieldChange("city"),
                  className: "rounded-none mt-1",
                  required: true,
                  "data-ocid": "checkout.city_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "State" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: shipping.state,
                  onChange: handleFieldChange("state"),
                  className: "rounded-none mt-1",
                  required: true,
                  "data-ocid": "checkout.state_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Pincode" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: shipping.pincode,
                  onChange: handleFieldChange("pincode"),
                  className: "rounded-none mt-1",
                  required: true,
                  "data-ocid": "checkout.pincode_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: shipping.phone,
                  onChange: handleFieldChange("phone"),
                  className: "rounded-none mt-1",
                  required: true,
                  "data-ocid": "checkout.phone_input"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              className: "rounded-none gap-2",
              onClick: () => setCheckoutStep("cart"),
              "data-ocid": "checkout.back_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "submit",
              className: "flex-1 rounded-none gap-2 font-display font-bold uppercase",
              disabled: !isShippingComplete || placeOrder.isPending,
              "data-ocid": "checkout.place_order_button",
              children: [
                placeOrder.isPending ? "Placing Order..." : "Place Order",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-5 sticky top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground uppercase mb-4", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: items.map((item) => {
          var _a, _b;
          const price = ((_a = item.part) == null ? void 0 : _a.price) ?? 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground truncate max-w-[160px] font-mono text-xs", children: [
                  ((_b = item.part) == null ? void 0 : _b.name) ?? item.partId,
                  " ×",
                  item.quantity
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-foreground", children: [
                  "₹",
                  (price * item.quantity).toLocaleString("en-IN")
                ] })
              ]
            },
            item.partId
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold uppercase text-sm", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-primary", children: [
              "₹",
              subtotal.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono text-muted-foreground mt-1", children: "+Taxes & shipping at checkout" })
        ] }),
        checkoutStep === "cart" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full rounded-none gap-2 font-display font-bold uppercase",
            onClick: () => setCheckoutStep("checkout"),
            type: "button",
            "data-ocid": "cart.proceed_checkout_button",
            children: [
              "Proceed to Checkout",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }) })
    ] }) })
  ] });
}
export {
  Cart as default
};
