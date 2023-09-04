<<<<<<< HEAD
import { NextPage } from "next";
import { Typography, Box } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"ofclancolombia - Home"}
      pageDescription={"Encuentra los mejores productos de OF-CLAN aquí"}
    >
      <Box textAlign="center">
        <Typography variant="h1" component="h1" sx={{ fontSize: "3rem" }}>
          OF-CLAN
        </Typography>
      </Box>
      <Typography variant="h2" sx={{ mb: 2 }} textAlign="center">
        Diseños únicos elaborados <br /> 100% algodón importado <br /> Pyma de
        150 Gr Colores vivos y duraderos. <br />
        ⭐⭐⭐⭐⭐ 5/5
      </Typography>

      {/* Agregar margen inferior a la sección de productos */}
      <Box sx={{ marginBottom: "2rem" }}>
        <ProductList products={initialData.products as any} />
      </Box>
    </ShopLayout>
  );
};

export default Home;
=======
import { NextPage } from "next";
import { Typography, Box } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"ofclancolombia - Home"}
      pageDescription={"Encuentra los mejores productos de OF-CLAN aquí"}
    >
      <Box textAlign="center">
        <Typography variant="h1" component="h1" sx={{ fontSize: "3rem" }}>
          OF-CLAN
        </Typography>
      </Box>
      <Typography variant="h2" sx={{ mb: 2 }} textAlign="center">
        Diseños únicos elaborados <br /> 100% algodón importado <br /> Pyma de
        150 Gr Colores vivos y duraderos. <br />
        ⭐⭐⭐⭐⭐ 5/5
      </Typography>

      {/* Agregar margen inferior a la sección de productos */}
      <Box sx={{ marginBottom: "2rem" }}>
        <ProductList products={initialData.products as any} />
      </Box>
    </ShopLayout>
  );
};

export default Home;
>>>>>>> 1f6200a577589790a4dfb53472758544a7b282d1
