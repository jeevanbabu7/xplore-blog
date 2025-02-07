import React, { useEffect, useState } from "react";

function NewsTickerBar() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // const response = await fetch("https://xplore-blog.onrender.com/api/news/get");
        // const data = await response.json();
        const data = [
          {
            _id: "67a3e877978c37ee5636e70e",
            content: "Welcome to Xplore'24 ✨",
            createdAt: "2025-02-05T22:38:47.777+00:00",
            updatedAt: "2025-02-05T22:38:47.777+00:00",
            __v: 0
          },
          {
            _id: "67a3ee29978c37ee5636e73e",
            content: "📸 Capture the Moment! Share your Xplore24 experience using #Xplore24!",
            createdAt: "2025-02-05T23:03:05.616+00:00",
            updatedAt: "2025-02-05T23:03:05.616+00:00",
            __v: 0
          },
          {
            _id: "67a58116a16287a26a9e2761",
            content: "⚠️ Change of Location: LINE FOLLOWER COMPETITION has been shifted to D…",
            createdAt: "2025-02-07T03:42:14.244+00:00",
            updatedAt: "2025-02-07T03:42:14.244+00:00",
            __v: 0
          },
          {
            _id: "67a5cec2055b8621b9b9d203",
            content: "🤖 Line Follower Second Round ⚡ begins at 3:15 PM 📍 New Library Block…",
            createdAt: "2025-02-07T09:13:38.133+00:00",
            updatedAt: "2025-02-07T09:13:38.133+00:00",
            __v: 0
          }
        ];
        
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
