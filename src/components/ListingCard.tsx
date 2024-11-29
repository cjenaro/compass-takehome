import React, { useState } from "react";
import { ListingInfo } from "../utils/Types";
import ImageSlider from "./ImageSlider";

export const ListingCard = (props: { info: ListingInfo }) => {
  return (
    <div className="card">
      {props.info.photos ? <ImageSlider images={props.info.photos} /> : null}
      <div>
        Agent: <img src={props.info?.agent?.avatar} />
      </div>

      <div>
        {props.info.address}, {props.info.city}, {props.info.state},{" "}
        {props.info.zipCode}
      </div>
    </div>
  );
};
