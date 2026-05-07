import type { EquipmentType } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface EquipmentCategoryCardProps {
  type: EquipmentType;
  label: string;
  icon: string;
  description: string;
  index?: number;
}

export default function EquipmentCategoryCard({
  type,
  label,
  icon,
  description,
  index = 1,
}: EquipmentCategoryCardProps) {
  return (
    <Link
      to="/parts"
      search={{ equipment: type } as never}
      className="group flex flex-col bg-card border border-border hover:border-primary/60 transition-smooth p-4 relative overflow-hidden"
      data-ocid={`categories.item.${index}`}
    >
      {/* Accent corner */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-smooth" />

      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl leading-none" role="img" aria-label={label}>
          {icon}
        </span>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors translate-x-0 group-hover:translate-x-1 transition-smooth" />
      </div>

      <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
        {label}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {description}
      </p>

      <div className="mt-3 pt-2 border-t border-border/50">
        <span className="text-[10px] font-mono text-primary uppercase tracking-wider">
          Browse Parts →
        </span>
      </div>
    </Link>
  );
}
