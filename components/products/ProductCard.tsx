import React from "react";
import NextLink from "next/link";
import {
  Grid,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
} from "@mui/material";
import { IProduct } from "../../interfaces";

interface Props {
  products: IProduct[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const defaultImage = `products/${product.images[0]}`;
  const hoverImage = `products/${product.images[1]}`;

  const [isHovered, setIsHovered] = React.useState(false);
  const productImage = isHovered ? hoverImage : defaultImage;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ px: 2, pb: 2 }} // Añade margen en cada lado de la tarjeta
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card sx={{ maxWidth: 200, mx: "auto" }}>
        {/* Ajusta el ancho máximo y centra la tarjeta */}
        <NextLink href="/product/slug" passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                className="fadeIn"
                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
        <Box p={2} textAlign="center" className="fadeIn">
          <Typography variant="subtitle1" fontWeight={700} mb={1}>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" fontWeight={300}>
            {`$${product.price}`}
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};
