import React, { useState } from "react";
import { ListingInfo } from "../utils/Types";
import ImageSlider from "./ImageSlider";
import DislikeIcon from "./DislikeIcon";
import ListingProperties from "./ListingProperties";
import ShareButton from "./ShareButton";
import IconButton from "./IconButton";
import StarButton from "./StarButton";
import Badge from "./Badge";

export const ListingCard = (props: { info: ListingInfo }) => {
  return (
    <div
      className={`listing-card ${props.info.photos && props.info.photos.length > 0 ? "" : "no-image"}`}
    >
      <ShareButton />
      {props.info.photos ? (
        <ImageSlider agent={props.info.agent} images={props.info.photos} />
      ) : null}
      <div className="details-container">
        <div className="price-container">
          <span className="price">
            {props.info.price ? `$${props.info.price.toLocaleString()}` : null}
          </span>
          <Badge>New match</Badge>
          <div className="actions">
            <IconButton>
              <DislikeIcon />
            </IconButton>
            <StarButton isFavorite={!!props.info.isFavorite} />
          </div>
        </div>
        <ListingProperties bedrooms={5} bathrooms={2} />
        <div className="address">
          {props.info.address}, {props.info.city}, {props.info.state}{" "}
          {props.info.zipCode}
        </div>
      </div>
    </div>
  );
};

/**
Unit tests

Test that all the info that needs to be rendered is there

Test that when there are no images the share button doesnt overlap on any information (checking the className/position)
*/
