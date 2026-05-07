import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePlaceOrder } from "@/hooks/useBackend";
import { useCart } from "@/hooks/useCart";
import type { ShippingInfo } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const emptyShipping: ShippingInfo = {
  name: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
  phone: "",
};

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const [shipping, setShipping] = useState<ShippingInfo>(emptyShipping);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout">("cart");
  const navigate = useNavigate();
  const placeOrder = usePlaceOrder();

  const subtotal = items.reduce((sum, item) => {
    const price = item.part?.price ?? 0;
    return sum + price * item.quantity;
  }, 0);

  const handleFieldChange =
    (field: keyof ShippingInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setShipping((s) => ({ ...s, [field]: e.target.value }));
    };

  const isShippingComplete = Object.entries(shipping)
    .filter(([k]) => k !== "addressLine2")
    .every(([, v]) => v.trim().length > 0);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isShippingComplete) return;
    try {
      const orderId = await placeOrder.mutateAsync({
        items,
        shippingInfo: shipping,
      });
      clearCart();
      navigate({ to: "/order-confirmation/$orderId", params: { orderId } });
    } catch {
      toast.error("Failed to place order. Please try again.");
    }
  };

  if (items.length === 0 && checkoutStep === "cart") {
    return (
      <div className="container mx-auto px-4 py-12">
        <EmptyState
          title="Your Cart is Empty"
          description="Browse our catalog to find the spare parts you need."
          actionLabel="Browse Parts"
          actionTo="/parts"
          icon={<ShoppingCart className="w-8 h-8 text-muted-foreground" />}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-display font-black text-2xl text-foreground uppercase tracking-tight">
            {checkoutStep === "cart" ? "Shopping Cart" : "Checkout"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1 font-mono">
            {items.length} items
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items or Checkout Form */}
          <div className="lg:col-span-2">
            {checkoutStep === "cart" ? (
              <div className="space-y-3" data-ocid="cart.items_list">
                {items.map((item, i) => {
                  const part = item.part;
                  if (!part) return null;
                  return (
                    <div
                      key={item.partId}
                      className="bg-card border border-border flex gap-4 p-4"
                      data-ocid={`cart.item.${i + 1}`}
                    >
                      <div className="w-20 h-20 bg-secondary border border-border flex-shrink-0 overflow-hidden">
                        <img
                          src={
                            part.images[0] ?? "/assets/images/placeholder.svg"
                          }
                          alt={part.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              "/assets/images/placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono text-muted-foreground mb-0.5">
                          {part.partNumber}
                        </p>
                        <h3 className="font-display font-bold text-sm text-foreground truncate">
                          {part.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {part.equipmentType} · {part.category}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-border">
                            <button
                              type="button"
                              className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary text-sm"
                              onClick={() =>
                                updateQuantity(item.partId, item.quantity - 1)
                              }
                              data-ocid={`cart.quantity_decrease.${i + 1}`}
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-mono text-xs">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary text-sm"
                              onClick={() =>
                                updateQuantity(item.partId, item.quantity + 1)
                              }
                              data-ocid={`cart.quantity_increase.${i + 1}`}
                            >
                              +
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-display font-bold text-sm">
                              ₹
                              {(part.price * item.quantity).toLocaleString(
                                "en-IN",
                              )}
                            </span>
                            <button
                              type="button"
                              className="text-muted-foreground hover:text-destructive transition-colors"
                              onClick={() => removeItem(item.partId)}
                              data-ocid={`cart.delete_button.${i + 1}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="bg-card border border-border p-6">
                  <h2 className="font-display font-bold text-foreground uppercase mb-4">
                    Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Full Name
                      </Label>
                      <Input
                        value={shipping.name}
                        onChange={handleFieldChange("name")}
                        className="rounded-none mt-1"
                        required
                        data-ocid="checkout.name_input"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Address Line 1
                      </Label>
                      <Input
                        value={shipping.addressLine1}
                        onChange={handleFieldChange("addressLine1")}
                        className="rounded-none mt-1"
                        required
                        data-ocid="checkout.address1_input"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Address Line 2 (Optional)
                      </Label>
                      <Input
                        value={shipping.addressLine2}
                        onChange={handleFieldChange("addressLine2")}
                        className="rounded-none mt-1"
                        data-ocid="checkout.address2_input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        City
                      </Label>
                      <Input
                        value={shipping.city}
                        onChange={handleFieldChange("city")}
                        className="rounded-none mt-1"
                        required
                        data-ocid="checkout.city_input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        State
                      </Label>
                      <Input
                        value={shipping.state}
                        onChange={handleFieldChange("state")}
                        className="rounded-none mt-1"
                        required
                        data-ocid="checkout.state_input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Pincode
                      </Label>
                      <Input
                        value={shipping.pincode}
                        onChange={handleFieldChange("pincode")}
                        className="rounded-none mt-1"
                        required
                        data-ocid="checkout.pincode_input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Phone
                      </Label>
                      <Input
                        value={shipping.phone}
                        onChange={handleFieldChange("phone")}
                        className="rounded-none mt-1"
                        required
                        data-ocid="checkout.phone_input"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-none gap-2"
                    onClick={() => setCheckoutStep("cart")}
                    data-ocid="checkout.back_button"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 rounded-none gap-2 font-display font-bold uppercase"
                    disabled={!isShippingComplete || placeOrder.isPending}
                    data-ocid="checkout.place_order_button"
                  >
                    {placeOrder.isPending ? "Placing Order..." : "Place Order"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card border border-border p-5 sticky top-24">
              <h2 className="font-display font-bold text-foreground uppercase mb-4">
                Order Summary
              </h2>
              <div className="space-y-2 mb-4">
                {items.map((item) => {
                  const price = item.part?.price ?? 0;
                  return (
                    <div
                      key={item.partId}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground truncate max-w-[160px] font-mono text-xs">
                        {item.part?.name ?? item.partId} ×{item.quantity}
                      </span>
                      <span className="font-mono text-xs text-foreground">
                        ₹{(price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-border pt-3 mb-4">
                <div className="flex justify-between">
                  <span className="font-display font-bold uppercase text-sm">
                    Subtotal
                  </span>
                  <span className="font-display font-bold text-primary">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-[10px] font-mono text-muted-foreground mt-1">
                  +Taxes & shipping at checkout
                </p>
              </div>
              {checkoutStep === "cart" && (
                <Button
                  className="w-full rounded-none gap-2 font-display font-bold uppercase"
                  onClick={() => setCheckoutStep("checkout")}
                  type="button"
                  data-ocid="cart.proceed_checkout_button"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
