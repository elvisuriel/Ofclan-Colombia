import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  Menu,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
  // Número de WhatsApp del cliente
  const whatsappNumber = "573103351279";

  // Función para abrir WhatsApp en un nuevo tab
  const openWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}`);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#007bff" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <NextLink href="/" passHref>
          <Link
            display="flex"
            alignItems="center"
            sx={{
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                textDecoration: "underline",
              },
              marginRight: "2rem", // Añade margen a la derecha
            }}
          >
            <Typography variant="h4">OF-CLAN</Typography>
            <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
              Shop
            </Typography>
          </Link>
        </NextLink>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginLeft: "auto",
            "& > *": {
              marginRight: "1rem",
              marginBottom: "0.5rem", // Espaciado inferior para elementos en pantallas pequeñas
              fontSize: "24px", // Ajusta el tamaño de los íconos en pantallas pequeñas
            },
          }}
        >
          <IconButton
            sx={{
              color: "#fff",
            }}
          >
            <SearchOutlined />
          </IconButton>
          <NextLink href="/cart" passHref>
            <Link
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#ff9800",
                },
              }}
            >
              <IconButton
                sx={{
                  color: "#fff",
                }}
              >
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Link>
          </NextLink>
          <IconButton
            sx={{
              color: "#fff",
              fontSize: "28px", // Ajusta el tamaño del ícono de WhatsApp en pantallas pequeñas
            }}
            onClick={openWhatsApp}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </IconButton>
          {/* Enlaces de redes sociales */}
          <IconButton
            sx={{
              color: "#fff",
              fontSize: "28px", // Ajusta el tamaño de los íconos de redes sociales en pantallas pequeñas
            }}
            component="a"
            href="https://www.facebook.com/people/Of-clan/100076188729394/?mibextid=nW3QTL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </IconButton>
          <IconButton
            sx={{
              color: "#fff",
              marginLeft: "1rem",
              fontSize: "28px", // Ajusta el tamaño de los íconos de redes sociales en pantallas pequeñas
            }}
            component="a"
            href="https://www.instagram.com/ofclancolombia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
          <Button
            sx={{
              color: "#1ab6ef",
              border: "2px solid #fff",
              borderRadius: "2px",
              textTransform: "uppercase",
              marginLeft: "1rem",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#333",
              },
            }}
          >
            Menú
            <Menu
              sx={{
                marginLeft: "0.25rem",
              }}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
