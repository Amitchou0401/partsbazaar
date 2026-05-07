import LoadingSpinner from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useGetOrder } from "@/hooks/useBackend";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Package } from "lucide-react";

export default function OrderConfirmation() {
  const { orderId } = useParams({ from: "/order-confirmation/$orderId" });
  const { data: order, isLoading } = useGetOrder(orderId);

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        data-ocid="order_confirmation.loading_state"
      >
        <LoadingSpinner size="lg" label="Confirming order..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Success banner */}
        <div
          className="bg-card border border-border p-8 text-center mb-8"
          data-ocid="order_confirmation.panel"
        >
          <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display font-black text-3xl text-foreground uppercase tracking-tight mb-2">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mb-4">
            Your order has been placed successfully. You'll receive updates as
            your order is processed.
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2">
            <Package className="w-4 h-4 text-muted-foreground" />
            <span className="font-mono text-sm text-foreground">Order ID:</span>
            <span
              className="font-mono text-sm text-primary font-bold"
              data-ocid="order_confirmation.order_id"
            >
              {orderId}
            </span>
          </div>
        </div>

        {/* Order details */}
        {order && (
          <div className="bg-card border border-border p-6 mb-6">
            <h2 className="font-display font-bold uppercase text-sm text-muted-foreground mb-4 tracking-widest">
              Order Details
            </h2>
            <div className="space-y-2 mb-4">
              {order.items.map((item) => (
                <div
                  key={item.partId}
                  className="flex justify-between text-sm font-mono"
                >
                  <span className="text-muted-foreground">
                    Part ID: {item.partId} ×{item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-display font-bold uppercase">Total</span>
              <span className="font-display font-bold text-primary">
                ₹{order.total.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
                Shipping To
              </p>
              <p className="text-sm text-foreground">
                {order.shippingInfo.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {order.shippingInfo.addressLine1}
              </p>
              {order.shippingInfo.addressLine2 && (
                <p className="text-xs text-muted-foreground">
                  {order.shippingInfo.addressLine2}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                {order.shippingInfo.city}, {order.shippingInfo.state} —{" "}
                {order.shippingInfo.pincode}
              </p>
              <p className="text-xs text-muted-foreground">
                {order.shippingInfo.phone}
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3" data-ocid="order_confirmation.actions">
          <Link to="/parts" className="flex-1">
            <Button
              variant="outline"
              className="w-full rounded-none gap-2 font-display uppercase"
              data-ocid="order_confirmation.continue_shopping_button"
            >
              Continue Shopping
            </Button>
          </Link>
          <Link to="/" className="flex-1">
            <Button
              className="w-full rounded-none gap-2 font-display uppercase"
              data-ocid="order_confirmation.home_button"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
