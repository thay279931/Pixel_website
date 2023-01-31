import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Picture from "../components/Picture";

function Homepage() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001ba4e8ef9e9b34e33b2e413802ad2587a";
  const initailURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}}&per_page=15`;

  // fetch data from api
  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  // load more picture
  const morePicture = async () => {
    let newURL;
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  };

  // fetch data from pages loads up
  useEffect(() => {
    search(initailURL);
  }, []);

  useEffect(() => {
    if(currentSearch === '') {
      search(initailURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>

      <div className="morePicture">
        <button onClick={morePicture}>load more</button>
      </div>
    </div>
  );
}

export default Homepage;
