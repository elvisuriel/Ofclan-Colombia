import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { initialData } from "../../database/products";
import { ItemCounter } from "../../components/ui/ItemCounter";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Obtener el slug del producto de la consulta

  // Buscar el producto correspondiente en los datos iniciales
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    // Manejar el caso en el que no se encuentre el producto
    return <div>Producto no encontrado</div>;
  }

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* titulos */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
            >{`$${product.price}`}</Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
              <SizeSelector sizes={product.sizes} />
            </Box>

            {/* Agregar al carrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/* Descripción */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
