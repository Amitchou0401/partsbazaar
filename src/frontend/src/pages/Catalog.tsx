import EmptyState from "@/components/EmptyState";
import LoadingSpinner from "@/components/LoadingSpinner";
import PartCard from "@/components/PartCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useListParts } from "@/hooks/useBackend";
import {
  EQUIPMENT_CATEGORIES,
  type EquipmentType,
  type StockStatus,
} from "@/types";
import { useSearch } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

const CATEGORIES = [
  "Engine",
  "Hydraulics",
  "Transmission",
  "Electrical",
  "Filters",
  "Brakes",
  "Cooling",
  "Suspension",
];
const STOCK_OPTIONS: { value: StockStatus | "All"; label: string }[] = [
  { value: "All", label: "All Stock" },
  { value: "InStock", label: "In Stock" },
  { value: "LowStock", label: "Low Stock" },
  { value: "OutOfStock", label: "Out of Stock" },
];

export default function Catalog() {
  const searchParams = useSearch({ strict: false }) as {
    q?: string;
    equipment?: EquipmentType;
  };
  const [searchQuery, setSearchQuery] = useState(searchParams.q ?? "");
  const [selectedEquipment, setSelectedEquipment] =
    useState<EquipmentType | null>(searchParams.equipment ?? null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStock, setSelectedStock] = useState<StockStatus | "All">(
    "All",
  );
  const [showFilters, setShowFilters] = useState(false);

  const { data: allParts, isLoading } = useListParts();

  const filteredParts = useMemo(() => {
    let parts = allParts ?? [];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      parts = parts.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.partNumber.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.modelCompatibility.some((m) => m.toLowerCase().includes(q)),
      );
    }
    if (selectedEquipment) {
      parts = parts.filter((p) => p.equipmentType === selectedEquipment);
    }
    if (selectedCategory) {
      parts = parts.filter((p) => p.category === selectedCategory);
    }
    if (selectedStock !== "All") {
      parts = parts.filter((p) => p.stockStatus === selectedStock);
    }
    return parts;
  }, [
    allParts,
    searchQuery,
    selectedEquipment,
    selectedCategory,
    selectedStock,
  ]);

  const activeFilterCount = [
    selectedEquipment,
    selectedCategory,
    selectedStock !== "All",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen">
      {/* Catalog Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <h1 className="font-display font-black text-2xl text-foreground uppercase tracking-tight mb-4">
            Parts Catalog
          </h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, part number, or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-secondary border-border rounded-none"
                data-ocid="catalog.search_input"
              />
            </div>
            <Button
              variant="outline"
              className="rounded-none gap-2 relative"
              onClick={() => setShowFilters(!showFilters)}
              type="button"
              data-ocid="catalog.filter_toggle"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </Button>
          </div>

          {/* Equipment type pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              type="button"
              onClick={() => setSelectedEquipment(null)}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider border transition-smooth ${
                !selectedEquipment
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-muted-foreground border-border hover:border-primary/50"
              }`}
              data-ocid="catalog.equipment_filter.all"
            >
              All
            </button>
            {EQUIPMENT_CATEGORIES.map((cat) => (
              <button
                key={cat.type}
                type="button"
                onClick={() =>
                  setSelectedEquipment(
                    cat.type === selectedEquipment ? null : cat.type,
                  )
                }
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider border transition-smooth ${
                  selectedEquipment === cat.type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-muted-foreground border-border hover:border-primary/50"
                }`}
                data-ocid={`catalog.equipment_filter.${cat.type.toLowerCase()}`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="bg-muted/20 border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-wrap gap-6">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Category
              </p>
              <div className="flex flex-wrap gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(cat === selectedCategory ? null : cat)
                    }
                    className={`px-2 py-0.5 text-xs border transition-smooth ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Stock
              </p>
              <div className="flex flex-wrap gap-1">
                {STOCK_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedStock(opt.value)}
                    className={`px-2 py-0.5 text-xs border transition-smooth ${
                      selectedStock === opt.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSelectedEquipment(null);
                  setSelectedCategory(null);
                  setSelectedStock("All");
                }}
                className="flex items-center gap-1 text-xs text-destructive hover:underline font-mono mt-auto"
              >
                <X className="w-3 h-3" /> Clear all
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground font-mono">
            {isLoading ? "Loading..." : `${filteredParts.length} parts found`}
          </p>
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2">
              {selectedEquipment && (
                <Badge
                  variant="secondary"
                  className="rounded-none text-[10px] gap-1 font-mono"
                >
                  {selectedEquipment}
                  <button
                    type="button"
                    onClick={() => setSelectedEquipment(null)}
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </Badge>
              )}
              {selectedCategory && (
                <Badge
                  variant="secondary"
                  className="rounded-none text-[10px] gap-1 font-mono"
                >
                  {selectedCategory}
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(null)}
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {isLoading ? (
          <div
            className="flex items-center justify-center py-24"
            data-ocid="catalog.loading_state"
          >
            <LoadingSpinner size="lg" label="Loading parts..." />
          </div>
        ) : filteredParts.length === 0 ? (
          <EmptyState
            title="No Parts Found"
            description="Try adjusting your search or filters to find the parts you need."
            actionLabel="Clear Filters"
            actionTo="/parts"
          />
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            data-ocid="catalog.parts_list"
          >
            {filteredParts.map((part, i) => (
              <PartCard key={part.id} part={part} index={i + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
