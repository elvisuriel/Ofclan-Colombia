import react from "react";
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

export const ProductCard: react.FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = react.useState(false);

  const productImage = react.useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card sx={{ maxWidth: "250px" }}>
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

        <Box sx={{ p: 2, textAlign: "center" }} className="fadeIn">
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
