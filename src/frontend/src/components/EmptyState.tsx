import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { PackageSearch } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  actionTo,
  icon,
}: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
      data-ocid="empty_state"
    >
      <div className="w-16 h-16 bg-secondary border border-border flex items-center justify-center mb-4">
        {icon ?? <PackageSearch className="w-8 h-8 text-muted-foreground" />}
      </div>
      <h3 className="font-display font-bold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
        {description}
      </p>
      {actionLabel && actionTo && (
        <Link to={actionTo}>
          <Button
            className="rounded-none"
            data-ocid="empty_state.primary_button"
          >
            {actionLabel}
          </Button>
        </Link>
      )}
    </div>
  );
}
