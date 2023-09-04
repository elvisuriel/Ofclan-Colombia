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
      <Toolbar>
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
            }}
          >
            <Typography variant="h4" sx={{ marginRight: "1rem" }}>
              OF-CLAN
            </Typography>
            <Typography variant="h6">Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            "& > *": {
              marginRight: "1rem",
            },
          }}
        >
          <NextLink href="/category/men" passHref>
            <Link
              sx={{
                textDecoration: "none",
                color: "#fff",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Button variant="outlined">Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link
              sx={{
                textDecoration: "none",
                color: "#fff",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Button variant="outlined">Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link
              sx={{
                textDecoration: "none",
                color: "#fff",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Button variant="outlined">Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

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
            marginLeft: "1rem",
          }}
          onClick={openWhatsApp}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </IconButton>

        {/* Enlaces de redes sociales */}
        <IconButton
          sx={{
            color: "#fff",
            marginLeft: "1rem",
          }}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </IconButton>
        <IconButton
          sx={{
            color: "#fff",
            marginLeft: "1rem",
          }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
        <IconButton
          sx={{
            color: "#fff",
            marginLeft: "1rem",
          }}
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
      </Toolbar>
    </AppBar>
  );
};
