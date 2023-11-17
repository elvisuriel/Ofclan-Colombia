import { NextPage } from "next";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"ofclancolombia - Home"}
      pageDescription={"Encuentra los mejores productos de OF-CLAN aquí"}
    >
      <Box sx={{ mb: 2, mt: -7 }} textAlign="center">
        <Image
          src="/images/LOGO OF CLAN.png"
          alt="Logo de OF-CLAN" // Agrega un texto descriptivo aquí
          width={500}
          height={100}
        />
      </Box>
      <Typography
        variant="body1" // Cambia "h6" a "body1" para hacer que el texto sea más pequeño
        sx={{
          mb: 2,
          textAlign: "center",
          fontFamily: "Montserrat, sans-serif", // Cambia "Montserrat" por el nombre de la fuente que importaste
          fontWeight: 700, // Ajusta el peso de la fuente, por ejemplo, 700 para negrita
          "&:hover": {
            color: "#1b0ced",
          },
        }}
      >
        Diseños únicos elaborados <br /> 100% algodón importado <br /> Pyma de
        150 Gr Colores vivos y duraderos. <br />
      </Typography>

      {/* Agregar margen inferior a la sección de productos */}
      <Box sx={{ marginBottom: "2rem" }}>
        <ProductList products={initialData.products as any} />
      </Box>
    </ShopLayout>
  );
};

export default Home;
