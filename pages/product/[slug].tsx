import { Box, Button, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { initialData } from "../../database/products";
import { ItemCounter } from "../../components/ui/ItemCounter";
import { useRouter } from "next/router";
import { useState } from "react"; // Importa useState desde React

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Obtener el slug del producto de la consulta

  // Buscar el producto correspondiente en los datos iniciales
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    // Manejar el caso en el que no se encuentre el producto
    return <div>Producto no encontrado</div>;
  }

  // Estado para almacenar la cantidad seleccionada
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

  // Estado para almacenar el tamaño seleccionado
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tamañoSeleccionado, setTamañoSeleccionado] = useState("");

  // Función para abrir WhatsApp en un nuevo tab
  const whatsappNumber = "573103351279";
  const openWhatsApp = () => {
    // Construir el mensaje personalizado con los detalles del producto
    const mensaje = `¡Hola! Estoy interesado en comprar el producto: ${product.title}. 
    Precio: $${product.price}
    Tamaño: ${tamañoSeleccionado} 
    Cantidad: ${cantidadSeleccionada}`;

    // Codificar el mensaje para que sea parte de la URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Abrir WhatsApp con el mensaje personalizado
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${mensajeCodificado}`
    );
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
              <ItemCounter
                cantidad={cantidadSeleccionada}
                setCantidad={setCantidadSeleccionada}
              />
              <SizeSelector
                sizes={product.sizes}
                tamaño={tamañoSeleccionado}
                setTamaño={setTamañoSeleccionado}
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
