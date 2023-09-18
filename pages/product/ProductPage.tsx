import { FC, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { initialData } from "../../database/products";
import { ItemCounter } from "../../components/ui/ItemCounter";
import { useRouter } from "next/router";

export const ProductPage: FC = () => {
  const router = useRouter();
  const { slug } = router.query; // Obtener el slug del producto de la consulta

  // Buscar el producto correspondiente en los datos iniciales
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    // Manejar el caso en el que no se encuentre el producto
    return <div>Producto no encontrado</div>;
  }

  // Estado para rastrear la cantidad y talla seleccionadas
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cantidad, setCantidad] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );

  // Función para agregar al carrito (simplemente guarda el producto en una lista por ahora)
  const addToCart = () => {
    // Validar que se haya seleccionado una talla
    if (!selectedSize) {
      alert("Por favor, seleccione una talla antes de agregar al carrito.");
      return;
    }

    // Agregar el producto al carrito (esto es solo un ejemplo, puedes implementar tu propia lógica)
    const itemToAdd = {
      product,
      cantidad,
      selectedSize,
    };

    // Aquí puedes manejar la lógica para agregar el producto al carrito.
    // Puedes usar el estado local, una base de datos o una librería de manejo de carritos.
    // Por ahora, simplemente muestra un mensaje de confirmación.
    alert("Producto agregado al carrito");

    // Redirigir al usuario a la página del carrito
    router.push("/cart"); // Asegúrate de que la ruta coincida con la de tu carrito.
  };

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
              <ItemCounter cantidad={cantidad} setCantidad={setCantidad} />
              <SizeSelector
                sizes={product.sizes}
                onSelectSize={selectedSize}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                onSelectSize={setSelectedSize}
              />
            </Box>

            {/* Agregar al carrito */}
            <Button
              color="primary"
              className="circular-btn"
              onClick={addToCart}
            >
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
