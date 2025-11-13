/* WP-HEADER-START */
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Narasapur Lace</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/products") ? "text-primary" : "text-foreground"
              }`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Button asChild>
              <Link to="/contact">Custom Orders</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              className={`block text-base font-medium ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block text-base font-medium ${
                isActive("/products") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`block text-base font-medium ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Custom Orders
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
/* WP-HEADER-END */
