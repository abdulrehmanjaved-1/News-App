import React, { useEffect, useState } from 'react';

function NewsItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=324f6e100bb64d67b43962ebaee48bcd";
        const response = await fetch(url);
        const data = await response.json();
        setItems(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {items.map((element) => (
        <div key={element.urlToImage}>
          <h5>{element.title}</h5>
          <h1>these are contents</h1>
          <h5>{element.content}</h5>
          
        </div>
      ))}
    </div>
  );
}

export default NewsItems;
