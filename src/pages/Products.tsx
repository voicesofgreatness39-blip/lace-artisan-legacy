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

// Import product images
import colorfulBag from "@/assets/products/colorful-granny-square-bag.jpg";
import whiteElephant from "@/assets/products/white-elephant-piece.jpg";
import childrenDress from "@/assets/products/green-children-dress.jpg";
import childrenOutfit from "@/assets/products/children-outfit-cream-pink.jpg";
import blackGrannyTop from "@/assets/products/black-colorful-granny-square-top.jpg";
import mintTop from "@/assets/products/mint-crochet-top.jpg";
import mintTopFringe from "@/assets/products/mint-crochet-top-fringe.jpg";

// Product showcase data
const products = [
  {
    id: 1,
    name: "Colorful Granny Square Bag",
    description: "Vibrant handmade crochet bag featuring traditional granny square pattern in bright colors. Perfect for everyday use or as a statement accessory.",
    category: "Fashion Accessories",
    imageUrl: colorfulBag,
    imageAlt: "Colorful crochet bag with granny square pattern on natural lace doily"
  },
  {
    id: 2,
    name: "Decorative Elephant Piece",
    description: "Unique white crochet elephant design, perfect for nursery decoration or as a special gift. Showcases intricate lacework and cultural motifs.",
    category: "Home Décor",
    imageUrl: whiteElephant,
    imageAlt: "White crochet elephant decorative piece"
  },
  {
    id: 3,
    name: "Children's Crochet Dress",
    description: "Beautiful handcrafted dress for children in lime green and grey tones. Delicate pattern work perfect for special occasions or everyday elegance.",
    category: "Fashion Accessories",
    imageUrl: childrenDress,
    imageAlt: "Green and grey children's crochet dress"
  },
  {
    id: 4,
    name: "Children's Designer Outfit",
    description: "Handmade children's outfit featuring cream ruffled top with decorative pink flower and matching pink pants with floral accents.",
    category: "Fashion Accessories",
    imageUrl: childrenOutfit,
    imageAlt: "Cream and pink children's crochet outfit"
  },
  {
    id: 5,
    name: "Black Granny Square Top",
    description: "Stunning black top adorned with vibrant multicolored granny square motifs. Contemporary design meets traditional craft technique.",
    category: "Fashion Accessories",
    imageUrl: blackGrannyTop,
    imageAlt: "Black top with colorful granny square crochet pattern"
  },
  {
    id: 6,
    name: "Mint Crochet Top",
    description: "Light mint-colored crochet top with delicate open-weave pattern. Perfect for warm weather, combining comfort with elegant style.",
    category: "Fashion Accessories",
    imageUrl: mintTop,
    imageAlt: "Mint colored crochet top with intricate pattern"
  },
  {
    id: 7,
    name: "Mint Fringe Crochet Top",
    description: "Beautiful mint crochet top featuring circular mandala design with decorative fringe detail. Bohemian style meets traditional craftsmanship.",
    category: "Fashion Accessories",
    imageUrl: mintTopFringe,
    imageAlt: "Mint crochet top with fringe detail and circular pattern"
  },
  {
    id: 8,
    name: "Custom Wall Hanging",
    description: "Personalized wall art featuring your choice of patterns, colors, and size. Perfect for adding handmade charm to any space.",
    category: "Custom Creations",
    imageUrl: colorfulBag,
    imageAlt: "Custom lace wall art example"
  },
  {
    id: 9,
    name: "Bespoke Table Décor",
    description: "Made-to-order table runners, placemats, and centerpieces with your preferred dimensions, colors, and traditional or contemporary designs.",
    category: "Custom Creations",
    imageUrl: whiteElephant,
    imageAlt: "Custom table décor design"
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
