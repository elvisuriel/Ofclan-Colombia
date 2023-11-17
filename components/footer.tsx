import React from "react";
import { Typography, IconButton, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCheckCircle,
  faPhone,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#282828",
        color: "#fff",
        padding: "1rem",
        marginTop: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <FontAwesomeIcon icon={faLock} size="2x" />
            </div>
            <Typography variant="body1">Pagos seguros</Typography>
            <Typography>
              Utilizamos la plataforma MercadoPago que garantiza la seguridad en
              tus pagos.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div>
              <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            </div>
            <Typography variant="body1">Productos garantizados</Typography>
            <Typography>
              Si algo no sale bien, te enviamos una prenda nueva o devolveremos
              tu dinero.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div>
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </div>
            <Typography variant="body1">Servicio al Cliente</Typography>
            <Typography>
              Lunes a Viernes 8am - 6pm
              <br />
              Sábados 8am - 1pm
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div>
              <FontAwesomeIcon icon={faShippingFast} size="2x" />
            </div>
            <Typography variant="body1">Envíos Seguros</Typography>
            <Typography>
              Hacemos que tu paquete llegue a cualquier parte de Colombia.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Typography variant="body1">Síguenos en redes sociales:</Typography>
        <IconButton
          sx={{
            color: "#fff",
            marginX: "0.5rem",
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
            marginX: "0.5rem",
          }}
          component="a"
          href="https://www.instagram.com/ofclancolombia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
        <IconButton
          sx={{
            color: "#fff",
            marginX: "0.5rem",
          }}
          component="a"
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
