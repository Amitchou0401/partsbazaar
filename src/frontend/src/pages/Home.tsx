import EquipmentCategoryCard from "@/components/EquipmentCategoryCard";
import { Button } from "@/components/ui/button";
import { EQUIPMENT_CATEGORIES } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Shield, Truck, Zap } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    label: "OEM Certified",
    desc: "Genuine and compatible parts with quality guarantee",
  },
  {
    icon: Truck,
    label: "Pan-India Delivery",
    desc: "Fast dispatch to all 28 states, 3–7 day delivery",
  },
  {
    icon: Headphones,
    label: "Expert Support",
    desc: "Parts specialists available Mon–Sat, 9 AM to 6 PM",
  },
  {
    icon: Zap,
    label: "Same-Day Dispatch",
    desc: "Orders placed before 2 PM dispatched same day",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-card border-b border-border overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, oklch(0.55 0.22 35) 39px, oklch(0.55 0.22 35) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, oklch(0.55 0.22 35) 39px, oklch(0.55 0.22 35) 40px)",
          }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                50,000+ Parts In Stock
              </span>
            </div>
            <h1 className="font-display font-black text-4xl md:text-6xl text-foreground leading-none mb-4 uppercase tracking-tight">
              Industrial
              <br />
              <span className="text-primary">Spare Parts</span>
              <br />
              Marketplace
            </h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
              Genuine and compatible parts for JCB, tractors, cranes,
              bulldozers, cars, bikes, aircraft, scooties, and trucks. Delivered
              across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/parts" data-ocid="hero.browse_catalog_button">
                <Button
                  size="lg"
                  className="rounded-none gap-2 font-display font-bold uppercase tracking-wider"
                >
                  Browse Catalog
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                to="/parts"
                search={{ q: "hydraulic" } as never}
                data-ocid="hero.popular_parts_button"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none gap-2 font-display uppercase tracking-wider"
                >
                  Popular Parts
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Hero image band */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-2/5">
          <img
            src="/assets/generated/hero-parts.dim_1200x700.jpg"
            alt="Industrial spare parts"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent" />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-background py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground uppercase tracking-tight">
                Equipment Types
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Select your equipment to find compatible parts
              </p>
            </div>
            <Link
              to="/parts"
              className="hidden md:flex items-center gap-1 text-sm text-primary font-mono hover:underline"
              data-ocid="categories.view_all_link"
            >
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            data-ocid="categories.list"
          >
            {EQUIPMENT_CATEGORIES.map((cat, i) => (
              <EquipmentCategoryCard
                key={cat.type}
                type={cat.type}
                label={cat.label}
                icon={cat.icon}
                description={cat.description}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted/30 py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustPoints.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex flex-col gap-2 p-4 border-l border-border first:border-l-0 first:pl-0"
              >
                <Icon className="w-5 h-5 text-primary" />
                <p className="font-display font-bold text-sm text-foreground">
                  {label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands CTA */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                NEED HELP?
              </p>
              <h3 className="font-display font-bold text-xl text-foreground uppercase">
                Can't find your part?
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Search by part number, model, or equipment type to find exactly
                what you need.
              </p>
            </div>
            <Link to="/parts" data-ocid="home.search_cta_button">
              <Button className="rounded-none gap-2 font-display uppercase tracking-wider whitespace-nowrap">
                Search Parts Catalog
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
