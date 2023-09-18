import { FC, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

interface Props {
  cantidad: number; // Prop para la cantidad actual
  setCantidad: (cantidad: number) => void; // Función para actualizar la cantidad
}

export const ItemCounter: FC<Props> = ({ cantidad, setCantidad }) => {
  // Función para aumentar la cantidad
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  // Función para disminuir la cantidad (no puede ser menor que 1)
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={disminuirCantidad}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>
        {cantidad}
      </Typography>
      <IconButton onClick={incrementarCantidad}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
