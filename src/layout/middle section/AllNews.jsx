import { useEffect, useState } from 'react';
import NewsCart from "./NewsCart";

const AllNews = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/news.json');
        const data = await response.json();
        console.log(data);
        setAllNews(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-neutral-700 text-xl font-semibold">Dragon News Home</div>
      {
        allNews.map((news, index) => <NewsCart key={index} news={news} />)
      }
    </div>
  );
};

export default AllNews;
