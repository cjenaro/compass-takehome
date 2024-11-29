import React, { useState } from "react";
import IconButton from "./IconButton";
import StarIcon from "./StarIcon";

export default function StarButton({ isFavorite }: { isFavorite: boolean }) {
  const [f, setF] = useState(isFavorite);
  return (
    <IconButton onClick={() => setF((old) => !old)}>
      <StarIcon filled={f} />
    </IconButton>
  );
}

/**
Unit tests

Check that onClick toggles the fill on the star icon.

This component could be abstracted to also be reused with other icons to fill/remove fill
*/
