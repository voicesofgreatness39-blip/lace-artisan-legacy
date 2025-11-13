/* WP-FOOTER-START */
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Narasapur Lace</h3>
            <p className="text-sm text-muted-foreground">
              Preserving the traditional art of crochet lace from Narasapur, Andhra Pradesh. Handcrafted by skilled artisans.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Custom Orders
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Narasapur, West Godavari District<br />
                  Andhra Pradesh, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">info@narasapurlace.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@narasapurlace.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              <strong>Business Hours:</strong><br />
              Monday - Saturday: 9:00 AM - 6:00 PM IST<br />
              Response time: Within 24 hours
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Narasapur Lace. Handmade with care. Sustainable. Fair-trade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
/* WP-FOOTER-END */
