import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Thank you for your inquiry! We will respond within 24 hours.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for inquiries, custom orders, or just to learn more about our craft
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                      <Select required>
                        <SelectTrigger id="inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product">Product Inquiry</SelectItem>
                          <SelectItem value="custom">Custom Order</SelectItem>
                          <SelectItem value="wholesale">Wholesale/Bulk Order</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>Our Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <address className="not-italic text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">Narasapur Lace Center</p>
                    <p>Main Street, Narasapur</p>
                    <p>West Godavari District</p>
                    <p>Andhra Pradesh 534275</p>
                    <p>India</p>
                  </address>
                </CardContent>
              </Card>

              {/* Phone & Email */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>Phone & Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <a href="tel:+91XXXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 (XXX) XXX-XXXX
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <a href="mailto:info@narasapurlace.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@narasapurlace.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle>Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <p className="text-sm pt-2 border-t border-border">
                    All times are in Indian Standard Time (IST)
                  </p>
                  <p className="text-sm font-medium text-foreground pt-2">
                    ⏱️ Response Time: Within 24 hours
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Maps Section */}
          <section className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Find Us on the Map</CardTitle>
                <CardDescription>
                  Visit our workshop in Narasapur, Andhra Pradesh
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  {/* Placeholder for Google Maps iframe */}
                  <div className="text-center space-y-2">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      Google Maps Embed Placeholder
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Replace this with actual Google Maps iframe code:<br />
                      <code className="bg-muted-foreground/10 px-2 py-1 rounded text-xs">
                        &lt;iframe src="https://maps.google.com/..."&gt;&lt;/iframe&gt;
                      </code>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
