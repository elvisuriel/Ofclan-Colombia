import { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { ISize } from "../../interfaces";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
  onSelectSize: (size: ISize) => void; // Función para actualizar la talla seleccionada
}

export const SizeSelector: FC<Props> = ({
  selectedSize,
  sizes,
  onSelectSize,
}) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? "primary" : "info"}
          onClick={() => onSelectSize(size)} // Llamar a la función onSelectSize cuando se hace clic
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
