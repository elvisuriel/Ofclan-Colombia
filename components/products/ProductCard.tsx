import React, { useState } from "react";
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
import { useRouter } from "next/router";

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  const defaultImage = `products/${product.images[0]}`;
  const hoverImage = `products/${product.images[1]}`;

  const productImage = isHovered ? hoverImage : defaultImage;

  const handleImageClick = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ px: 2, pb: 2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card sx={{ maxWidth: 200, mx: "auto" }}>
        <Link onClick={handleImageClick}>
          <CardActionArea>
            <CardMedia
              component="img"
              className="fadeIn"
              image={productImage}
              alt={product.title}
            />
          </CardActionArea>
        </Link>
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
