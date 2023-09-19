import { FC, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { initialData } from "../../database/products";
import { ItemCounter } from "../../components/ui/ItemCounter";
import { useRouter } from "next/router";

const ProductPage: FC = () => {
  const router = useRouter();
  const { slug } = router.query; // Obtener el slug del producto de la consulta

  // Buscar el producto correspondiente en los datos iniciales
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    // Manejar el caso en el que no se encuentre el producto
    return <div>Producto no encontrado</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cantidad, setCantidad] = useState(1);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );
  const whatsappNumber = "573103351279";
  const openWhatsApp = () => {
    // Construye el mensaje de WhatsApp con la información seleccionada
    const message = `
¡Hola! Estoy interesado en comprar:

Detalles del producto:
- Nombre: ${product.title}
- Precio por unidad: $${product.price.toLocaleString()}
- Cantidad: ${cantidad}
- Talla: ${selectedSize || "sin seleccionar"}
`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  // Función para agregar al carrito
  const addToCart = () => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    // Puedes usar una librería de manejo de carritos o implementar tu propia lógica de carrito
    // Por ejemplo, puedes almacenar los productos en el estado local o en una base de datos.
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
            >{`$${product.price.toLocaleString()}`}</Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter cantidad={cantidad} setCantidad={setCantidad} />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSelectSize={setSelectedSize}
              />
            </Box>

            {/* Agregar al carrito */}
            <Button
              color="primary"
              className="circular-btn"
              onClick={openWhatsApp}
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

export default ProductPage;
