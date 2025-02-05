import React, { useEffect, useState } from "react";

function NewsTickerBar() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://xplore-blog.onrender.com/api/news/get");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  setInterval(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://xplore-blog.onrender.com/api/news/get");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();

  }, 60000);

  return (
    <div className="w-full py-5 bg-gradient-to-r from-orange-900/50 via-red-900/50 to-orange-900/50">
      <div className="relative overflow-hidden h-8 w-full">
        <div className="flex w-max animate-infinite-scroll-news">
          {[...news].map((item, index) => (
            <span key={index} className="px-8 text-yellow-300 text-lg font-bold whitespace-nowrap">
              {item.content}
            </span>
          ))}
        </div>
      </div>
    </div>

  );
}

export default NewsTickerBar;
