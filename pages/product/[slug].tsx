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

  // Estado para rastrear la cantidad y talla seleccionadas
  const [cantidad, setCantidad] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );

  // Función para abrir WhatsApp en un nuevo tab
  const whatsappNumber = "573103351279";
  const openWhatsApp = () => {
    // Construye el mensaje de WhatsApp con la información seleccionada
    const message = `¡Hola! Estoy interesado en comprar ${cantidad} ${
      product.title
    } en talla ${selectedSize || "sin seleccionar"}.`;

    // Codifica el mensaje para que sea parte de la URL
    const encodedMessage = encodeURIComponent(message);

    // Construye la URL completa con el mensaje codificado
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Abre la URL en una nueva ventana o pestaña
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
