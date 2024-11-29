import React, {useState, useEffect} from 'react';
import { ListingCard } from './components/ListingCard';
import { ListingInfo } from './utils/Types';

const App = () => {
  const [data, setData] = useState<ListingInfo[]>();

  useEffect(() => {
    fetch('./api/saved-listings')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <div className="calendar-container">
    {data?.map(info => <ListingCard info={info}/>)}
  </div>;
};

export default App;
