import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Sample product data
const products = [
  {
    id: 1,
    name: "Elegant Table Runner",
    description: "Handcrafted table runner with traditional floral motifs, perfect for dining rooms",
    price: "₹2,500",
    category: "Home Décor",
    imageAlt: "White lace table runner"
  },
  {
    id: 2,
    name: "Decorative Doilies Set",
    description: "Set of 6 intricate doilies, ideal for home decoration and gifting",
    price: "₹1,800",
    category: "Home Décor",
    imageAlt: "Circular lace doilies"
  },
  {
    id: 3,
    name: "Lace Curtain Panel",
    description: "Beautiful window curtain with delicate patterns, adds elegance to any room",
    price: "₹4,500",
    category: "Home Décor",
    imageAlt: "Lace curtain with floral design"
  },
  {
    id: 4,
    name: "Decorative Cushion Cover",
    description: "Premium cushion cover with traditional crochet work on fine cotton",
    price: "₹1,200",
    category: "Home Décor",
    imageAlt: "Lace cushion cover"
  },
  {
    id: 5,
    name: "Lace Collar",
    description: "Detachable lace collar to enhance any outfit with vintage charm",
    price: "₹800",
    category: "Fashion Accessories",
    imageAlt: "White lace collar"
  },
  {
    id: 6,
    name: "Bridal Veil Edging",
    description: "Exquisite lace edging for bridal veils, customizable length",
    price: "₹3,500",
    category: "Fashion Accessories",
    imageAlt: "Delicate bridal lace"
  },
  {
    id: 7,
    name: "Shawl with Lace Border",
    description: "Elegant shawl featuring hand-crocheted lace border",
    price: "₹2,800",
    category: "Fashion Accessories",
    imageAlt: "Lace-bordered shawl"
  },
  {
    id: 8,
    name: "Decorative Hand Fans",
    description: "Traditional hand fans adorned with intricate lace work",
    price: "₹650",
    category: "Fashion Accessories",
    imageAlt: "Lace decorative fan"
  },
  {
    id: 9,
    name: "Custom Wall Hanging",
    description: "Personalized wall art featuring your choice of patterns and size",
    price: "Custom Quote",
    category: "Custom Creations",
    imageAlt: "Custom lace wall art"
  },
  {
    id: 10,
    name: "Bespoke Table Cloth",
    description: "Made-to-order tablecloth with your preferred dimensions and design",
    price: "Custom Quote",
    category: "Custom Creations",
    imageAlt: "Custom tablecloth design"
  },
  {
    id: 11,
    name: "Personalized Gift Items",
    description: "Custom lace work for special occasions - weddings, anniversaries, celebrations",
    price: "Custom Quote",
    category: "Custom Creations",
    imageAlt: "Custom gift items"
  },
  {
    id: 12,
    name: "Custom Fashion Piece",
    description: "Unique lace accessories designed specifically for your style",
    price: "Custom Quote",
    category: "Custom Creations",
    imageAlt: "Custom fashion lace"
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of handcrafted crochet lace pieces, each telling a story of tradition and artistry
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search Products</Label>
                <Input
                  id="search"
                  placeholder="Search by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Home Décor">Home Décor</SelectItem>
                    <SelectItem value="Fashion Accessories">Fashion Accessories</SelectItem>
                    <SelectItem value="Custom Creations">Custom Creations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sort">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}

          {/* Custom Order Section */}
          <section className="bg-secondary rounded-lg p-8 md:p-12">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Need Something Unique?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Request a custom order and our artisans will create a bespoke piece just for you
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-name">Your Name</Label>
                    <Input id="custom-name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-email">Email</Label>
                    <Input id="custom-email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-phone">Phone Number</Label>
                  <Input id="custom-phone" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-type">Product Type</Label>
                  <Select>
                    <SelectTrigger id="custom-type">
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Décor</SelectItem>
                      <SelectItem value="fashion">Fashion Accessory</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-description">Describe Your Requirement</Label>
                  <Textarea
                    id="custom-description"
                    placeholder="Tell us about your custom order - dimensions, colors, patterns, special requirements..."
                    rows={5}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    Submit Inquiry
                  </Button>
                  <Button type="button" variant="outline" className="flex-1" asChild>
                    <Link to="/contact">Contact Us Directly</Link>
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
