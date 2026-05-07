import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetPart } from "@/hooks/useBackend";
import { useCart } from "@/hooks/useCart";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Package,
  ShoppingCart,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const stockIcons = {
  InStock: {
    icon: CheckCircle2,
    label: "In Stock",
    className: "text-primary",
  },
  LowStock: {
    icon: AlertCircle,
    label: "Low Stock",
    className: "text-accent-foreground",
  },
  OutOfStock: {
    icon: XCircle,
    label: "Out of Stock",
    className: "text-destructive",
  },
};

export default function PartDetail() {
  const { partId } = useParams({ from: "/parts/$partId" });
  const { data: part, isLoading } = useGetPart(partId);
  const addItem = useCart((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh]"
        data-ocid="part_detail.loading_state"
      >
        <LoadingSpinner size="lg" label="Loading part details..." />
      </div>
    );
  }

  if (!part) {
    return (
      <div className="container mx-auto px-4 py-12">
        <EmptyState
          title="Part Not Found"
          description="This part doesn't exist or may have been removed."
          actionLabel="Back to Catalog"
          actionTo="/parts"
        />
      </div>
    );
  }

  const stockInfo = stockIcons[part.stockStatus];
  const StockIcon = stockInfo.icon;
  const isOutOfStock = part.stockStatus === "OutOfStock";
  const images =
    part.images.length > 0 ? part.images : ["/assets/images/placeholder.svg"];

  const handleAddToCart = () => {
    addItem(part, quantity);
    toast.success(`${quantity}× ${part.name} added to cart`, {
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/parts" className="hover:text-primary transition-colors">
            Parts Catalog
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate max-w-[200px]">
            {part.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/parts"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-mono"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Catalog
        </Link>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-ocid="part_detail.panel"
        >
          {/* Images */}
          <div>
            <div className="aspect-square bg-card border border-border overflow-hidden mb-3">
              <img
                src={images[selectedImage]}
                alt={part.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/assets/images/placeholder.svg";
                }}
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    type="button"
                    key={img}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 border overflow-hidden transition-smooth ${
                      selectedImage === i
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${part.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge
                variant="outline"
                className="rounded-none text-[10px] font-mono uppercase"
              >
                {part.equipmentType}
              </Badge>
              <div
                className={`flex items-center gap-1 text-xs font-mono ${stockInfo.className}`}
              >
                <StockIcon className="w-3.5 h-3.5" />
                {stockInfo.label}
              </div>
            </div>

            <h1
              className="font-display font-black text-2xl text-foreground uppercase tracking-tight mb-1"
              data-ocid="part_detail.name"
            >
              {part.name}
            </h1>
            <p className="font-mono text-sm text-primary mb-4">
              PN: {part.partNumber}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {part.description}
            </p>

            {part.modelCompatibility.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Compatible Models
                </p>
                <div className="flex flex-wrap gap-1">
                  {part.modelCompatibility.map((model) => (
                    <Badge
                      key={model}
                      variant="secondary"
                      className="rounded-none text-xs font-mono"
                    >
                      {model}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card border border-border p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-black text-3xl text-foreground">
                  ₹{part.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Per unit · Excl. taxes
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-border">
                  <button
                    type="button"
                    className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    data-ocid="part_detail.quantity_decrease"
                  >
                    −
                  </button>
                  <span
                    className="w-10 text-center font-mono text-sm"
                    data-ocid="part_detail.quantity_value"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
                    onClick={() => setQuantity(quantity + 1)}
                    data-ocid="part_detail.quantity_increase"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm font-mono text-muted-foreground">
                  Total: ₹{(part.price * quantity).toLocaleString("en-IN")}
                </span>
              </div>
              <Button
                className="w-full rounded-none gap-2 font-display font-bold uppercase tracking-wider"
                size="lg"
                disabled={isOutOfStock}
                onClick={handleAddToCart}
                data-ocid="part_detail.add_to_cart_button"
              >
                <ShoppingCart className="w-4 h-4" />
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}
              </Button>
            </div>

            {/* Specifications */}
            {part.specifications.length > 0 && (
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  Specifications
                </p>
                <div className="border border-border">
                  {part.specifications.map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between px-3 py-2 text-xs ${
                        i % 2 === 0 ? "bg-background" : "bg-card"
                      }`}
                    >
                      <span className="font-mono text-muted-foreground uppercase tracking-wider">
                        {key}
                      </span>
                      <span className="font-mono text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
