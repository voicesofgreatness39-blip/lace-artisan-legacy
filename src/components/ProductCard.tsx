import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  imageAlt: string;
}

const ProductCard = ({ name, description, price, category, imageAlt }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-muted relative">
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <span className="text-sm">{imageAlt}</span>
        </div>
        <Badge className="absolute top-2 right-2">{category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">{price}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1" variant="default">
          Add to Cart
        </Button>
        <Button variant="outline" className="flex-1">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
