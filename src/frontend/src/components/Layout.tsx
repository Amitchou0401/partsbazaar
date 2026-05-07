import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { Link, useRouter } from "@tanstack/react-router";
import { Menu, Search, ShoppingCart, Wrench, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = useCart((s) => s.getTotalCount());
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.navigate({ to: "/parts", search: { q: searchQuery } as never });
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/parts", label: "Parts Catalog" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        {/* Top bar */}
        <div className="border-b border-border/50 bg-card">
          <div className="container mx-auto px-4 h-12 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              data-ocid="nav.logo_link"
            >
              <div className="w-7 h-7 bg-primary flex items-center justify-center">
                <Wrench
                  className="w-4 h-4 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                MACHINA<span className="text-primary">PARTS</span>
              </span>
            </Link>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-xl mx-8"
            >
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search parts by name, model, SKU..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground rounded-none h-8 text-sm"
                  data-ocid="nav.search_input"
                />
              </div>
            </form>

            {/* Cart */}
            <div className="flex items-center gap-3">
              <Link to="/cart" data-ocid="nav.cart_link">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative rounded-none border-border gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="hidden sm:inline">Cart</span>
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground border-0">
                      {cartCount > 99 ? "99+" : cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>
              <button
                type="button"
                className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                data-ocid="nav.mobile_menu_toggle"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Nav bar */}
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex h-10 items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                activeProps={{ className: "text-primary" }}
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}_link`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-3">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search parts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-secondary border-border rounded-none h-9"
                />
              </div>
            </form>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1 uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center">
                  <Wrench className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-foreground">
                  MACHINA<span className="text-primary">PARTS</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Genuine spare parts for industrial, agricultural, and transport
                machinery. Trusted by mechanics and operators across India.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3 uppercase tracking-wider text-sm">
                Equipment
              </h3>
              <div className="grid grid-cols-2 gap-1">
                {[
                  "JCB",
                  "Tractor",
                  "Crane",
                  "Bulldozer",
                  "Car",
                  "Bike",
                  "Aeroplane",
                  "Scooty",
                  "Truck",
                ].map((e) => (
                  <Link
                    key={e}
                    to="/parts"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-0.5"
                  >
                    {e}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3 uppercase tracking-wider text-sm">
                Support
              </h3>
              <div className="flex flex-col gap-1">
                {[
                  "Parts Catalog",
                  "Track Order",
                  "Return Policy",
                  "Contact Us",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-sm text-muted-foreground py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              All parts are OEM-compatible. Prices in INR.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
