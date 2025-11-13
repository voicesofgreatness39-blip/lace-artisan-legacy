import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const ProductCard = ({ name, description, category, imageUrl, imageAlt }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-muted relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm">{category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground italic">
          Contact us for pricing and availability
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
