import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scissors, Users, Globe, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-secondary to-accent/20 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Timeless Elegance from Narasapur
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Discover the exquisite art of traditional crochet lace, handcrafted by skilled artisans in Andhra Pradesh
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link to="/products">View Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Custom Orders</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage & History Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  A Rich Heritage of Craftsmanship
                </h2>
                <p className="text-lg text-muted-foreground">
                  The story of Narasapur lace spans generations
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  Narasapur, a small town in the West Godavari District of Andhra Pradesh, is renowned worldwide for its 
                  intricate crochet lace work. This centuries-old craft was introduced to the region in the late 19th century 
                  and has since become an integral part of the town's cultural identity.
                </p>
                
                <p className="text-foreground leading-relaxed mt-6">
                  The delicate art of lace-making in Narasapur represents more than just beautiful craftsmanship—it embodies 
                  the dedication, skill, and cultural heritage of countless artisan families. Each piece tells a story of 
                  patience, precision, and passion passed down through generations.
                </p>

                <p className="text-foreground leading-relaxed mt-6">
                  Today, Narasapur lace is exported globally, adorning homes and fashion collections across continents. 
                  The craft provides livelihood to thousands of families, particularly empowering women artisans in the region. 
                  Despite modern challenges, the tradition continues to thrive, adapting contemporary designs while preserving 
                  traditional techniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crafting Process Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              The Traditional Craft Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Scissors className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>1. Material Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Fine cotton threads are carefully selected for their quality, strength, and ability to hold intricate patterns.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>2. Pattern Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Traditional and contemporary patterns are sketched, combining age-old motifs with modern aesthetics.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>3. Handcrafting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Skilled artisans use crochet hooks to create intricate patterns, often spending days or weeks on a single piece.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>4. Finishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Each piece is carefully washed, starched, and pressed to perfection before reaching you.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Artisans Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Empowering Women Artisans
                </h2>
                <p className="text-lg text-muted-foreground">
                  Behind every lace creation is a skilled woman artisan
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 space-y-6">
                <p className="text-foreground leading-relaxed">
                  The heart of Narasapur's lace industry beats with the dedication of thousands of women artisans. 
                  For many families, lace-making is not just a craft—it's a source of economic independence and 
                  community pride.
                </p>

                <p className="text-foreground leading-relaxed">
                  These skilled craftswomen learn the art from their mothers and grandmothers, preserving techniques 
                  that have been refined over generations. Their work provides crucial income for their families while 
                  keeping this beautiful tradition alive.
                </p>

                <p className="text-foreground leading-relaxed">
                  By choosing Narasapur lace, you're not just purchasing a beautiful product—you're supporting fair 
                  trade practices, sustainable craftsmanship, and the livelihoods of artisan families in rural India.
                </p>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-4xl font-bold text-primary">1000+</p>
                    <p className="text-sm text-muted-foreground">Active Artisans</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-4xl font-bold text-primary">100+</p>
                    <p className="text-sm text-muted-foreground">Years of Heritage</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-4xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Our Creations
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <span className="text-muted-foreground text-sm">Lace Image {i}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Create Something Unique
              </h2>
              <p className="text-xl opacity-90">
                Looking for custom lace work? Our artisans can bring your vision to life with bespoke designs.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Request Custom Order</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
