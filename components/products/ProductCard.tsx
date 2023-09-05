import React, { useState } from "react";
import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
} from "@mui/material";

import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = isHovered
    ? `products/${product.images[1]}`
    : `products/${product.images[0]}`;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      sx={{ px: 2, pb: 2 }} // Añade margen en cada lado de la tarjeta
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card sx={{ maxWidth: 200, mx: "auto" }}>
        {" "}
        {/* Ajusta el ancho máximo y centra la tarjeta */}
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
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
