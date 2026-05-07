import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import type { Part } from "@/types";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Zap } from "lucide-react";
import { toast } from "sonner";

interface PartCardProps {
  part: Part;
  index?: number;
}

const stockConfig = {
  InStock: {
    label: "IN STOCK",
    className: "bg-primary/10 text-primary border-primary/30",
  },
  LowStock: {
    label: "LOW STOCK",
    className: "bg-accent/10 text-accent-foreground border-accent/30",
  },
  OutOfStock: {
    label: "OUT OF STOCK",
    className: "bg-destructive/10 text-destructive border-destructive/30",
  },
};

export default function PartCard({ part, index = 1 }: PartCardProps) {
  const addItem = useCart((s) => s.addItem);
  const isOutOfStock = part.stockStatus === "OutOfStock";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isOutOfStock) {
      addItem(part);
      toast.success(`${part.name} added to cart`, { duration: 2500 });
    }
  };

  const stock = stockConfig[part.stockStatus];
  const imageUrl = part.images[0] ?? "/assets/images/placeholder.svg";
  const formattedPrice = `₹${part.price.toLocaleString("en-IN")}`;

  return (
    <Link
      to="/parts/$partId"
      params={{ partId: part.id }}
      className="group block bg-card border border-border hover:border-primary/50 transition-smooth"
      data-ocid={`parts.item.${index}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
        <img
          src={imageUrl}
          alt={part.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/assets/images/placeholder.svg";
          }}
        />
        <div className="absolute top-2 left-2">
          <span
            className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 border ${stock.className}`}
          >
            {stock.label}
          </span>
        </div>
        <div className="absolute top-2 right-2">
          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-background/80 text-muted-foreground border border-border">
            {part.equipmentType}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] font-mono text-muted-foreground mb-0.5 uppercase tracking-wider">
          {part.partNumber}
        </p>
        <h3 className="font-display font-semibold text-sm text-foreground leading-tight mb-1 truncate group-hover:text-primary transition-colors">
          {part.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-1 truncate">
          {part.category}
        </p>
        {part.modelCompatibility.length > 0 && (
          <p className="text-[10px] font-mono text-muted-foreground truncate mb-2">
            {part.modelCompatibility.slice(0, 2).join(" · ")}
          </p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/50">
          <span className="font-display font-bold text-foreground">
            {formattedPrice}
          </span>
          <Button
            size="sm"
            variant={isOutOfStock ? "outline" : "default"}
            className="rounded-none h-7 text-xs gap-1 px-2"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            data-ocid={`parts.add_button.${index}`}
          >
            {isOutOfStock ? (
              "Unavailable"
            ) : (
              <>
                <ShoppingCart className="w-3 h-3" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
}
