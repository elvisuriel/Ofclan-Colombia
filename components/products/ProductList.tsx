<<<<<<< HEAD
import { FC } from "react";
import { Grid } from "@mui/material";
import { IProduct } from "../../interfaces";
import { ProductCard } from ".";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={8}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};
=======
import { FC } from "react";
import { Grid } from "@mui/material";
import { IProduct } from "../../interfaces";
import { ProductCard } from ".";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={8}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};
>>>>>>> 1f6200a577589790a4dfb53472758544a7b282d1
