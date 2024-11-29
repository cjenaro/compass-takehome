import React, { useState, useEffect } from "react";
import { ListingCard } from "./components/ListingCard";
import { ListingInfo } from "./utils/Types";

const App = () => {
  const [data, setData] = useState<ListingInfo[]>();
  const [error, setError] = useState<null | string>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("./api/saved-listings")
      .then((res) => res.json())
      .then(setData)
      .catch(() =>
        setError(
          "Oops, there's been an error fetching the listings, please try again.",
        ),
      );
  }, [count]);

  return (
    <div className="calendar-container">
      {data?.map((info) => <ListingCard info={info} />)}
      {error ? (
        <div className="error-container">
          <p>{error}</p>
          <button className="error" onClick={() => setCount(count + 1)}>
            Try again
          </button>
        </div>
      ) : null}
    </div>
  );
};

/** Unit test, try again cta refires fetch */

export default App;
