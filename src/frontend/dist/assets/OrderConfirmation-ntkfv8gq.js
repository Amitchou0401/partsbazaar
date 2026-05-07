import { c as createLucideIcon, g as useParams, j as jsxRuntimeExports, f as LoadingSpinner, L as Link, B as Button } from "./index-CfPY7cHp.js";
import { c as useGetOrder } from "./useBackend-D0DDGl2S.js";
import { C as CircleCheck } from "./circle-check-Dwxi1gkl.js";
import { A as ArrowRight } from "./arrow-right-iFO5RdYC.js";
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
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode);
function OrderConfirmation() {
  const { orderId } = useParams({ from: "/order-confirmation/$orderId" });
  const { data: order, isLoading } = useGetOrder(orderId);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center justify-center min-h-[60vh]",
        "data-ocid": "order_confirmation.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg", label: "Confirming order..." })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border p-8 text-center mb-8",
        "data-ocid": "order_confirmation.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl text-foreground uppercase tracking-tight mb-2", children: "Order Confirmed!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Your order has been placed successfully. You'll receive updates as your order is processed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-foreground", children: "Order ID:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-mono text-sm text-primary font-bold",
                "data-ocid": "order_confirmation.order_id",
                children: orderId
              }
            )
          ] })
        ]
      }
    ),
    order && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-6 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold uppercase text-sm text-muted-foreground mb-4 tracking-widest", children: "Order Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex justify-between text-sm font-mono",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "Part ID: ",
            item.partId,
            " ×",
            item.quantity
          ] })
        },
        item.partId
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold uppercase", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-primary", children: [
          "₹",
          order.total.toLocaleString("en-IN")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2", children: "Shipping To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: order.shippingInfo.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: order.shippingInfo.addressLine1 }),
        order.shippingInfo.addressLine2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: order.shippingInfo.addressLine2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          order.shippingInfo.city,
          ", ",
          order.shippingInfo.state,
          " —",
          " ",
          order.shippingInfo.pincode
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: order.shippingInfo.phone })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", "data-ocid": "order_confirmation.actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/parts", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          className: "w-full rounded-none gap-2 font-display uppercase",
          "data-ocid": "order_confirmation.continue_shopping_button",
          children: "Continue Shopping"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full rounded-none gap-2 font-display uppercase",
          "data-ocid": "order_confirmation.home_button",
          children: [
            "Back to Home",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      ) })
    ] })
  ] }) });
}
export {
  OrderConfirmation as default
};
