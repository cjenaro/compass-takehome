import React from 'react';
import {ListingInfo} from '../utils/Types';

export const ListingCard = (props: {info: ListingInfo}) => {
  return <div className='listingCard'>
    <div>{props.info.address}, {props.info.city}, {props.info.state}, {props.info.zipCode}</div>
    <div>Agent: <img src={props.info?.agent?.avatar}/></div>

    <div>Photos:
    {props.info.photos?.map(p => <img src={p}/>)}
    </div>
  </div>;
};
