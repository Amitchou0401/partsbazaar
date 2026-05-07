import { Wrench } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

export default function LoadingSpinner({
  size = "md",
  label,
}: LoadingSpinnerProps) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-3"
      data-ocid="loading_state"
    >
      <div className="relative">
        <div
          className={`${sizes[size]} border-2 border-border border-t-primary animate-spin`}
          style={{ borderRadius: 0 }}
        />
        <Wrench
          className={`absolute inset-0 m-auto text-primary ${
            size === "sm" ? "w-2 h-2" : size === "md" ? "w-4 h-4" : "w-6 h-6"
          }`}
        />
      </div>
      {label && (
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}
