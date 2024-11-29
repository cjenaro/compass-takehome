import React from "react";

export interface ListingPropertiesProps {
  bedrooms?: number;
  bathrooms?: number;
}

export default function ListingProperties({
  bedrooms,
  bathrooms,
}: ListingPropertiesProps) {
  if (!bedrooms || !bathrooms) return null;

  return (
    <p className="listing-properties">
      {bedrooms ? (
        <>
          <span>{bedrooms} bed</span> |
        </>
      ) : null}
      {bathrooms ? <span>{bathrooms} bath</span> : null}
    </p>
  );
}
