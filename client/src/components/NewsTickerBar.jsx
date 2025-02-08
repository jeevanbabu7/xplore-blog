import React, { useEffect, useState } from "react";

function NewsTickerBar() {
  const [news, setNews] = useState([{
    "_id": {
      "$oid": "67a3e877978c37ee5636e70e"
    },
    "content": "Welcome to Xplore'24 ✨",
    "createdAt": {
      "$date": "2025-02-05T22:38:47.777Z"
    },
    "updatedAt": {
      "$date": "2025-02-05T22:38:47.777Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67a3ee29978c37ee5636e73e"
    },
    "content": "📸 Capture the Moment! Share your Xplore24 experience using #Xplore24!",
    "createdAt": {
      "$date": "2025-02-05T23:03:05.616Z"
    },
    "updatedAt": {
      "$date": "2025-02-05T23:03:05.616Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "67a6e85d1c55eac8024a7064"
    },
    "content": "Galactic Quest at CA 04, New library block"
  },
  {
    "_id": {
      "$oid": "67a6e8b31c55eac8024a7066"
    },
    "content": "📢 Debate competition: Venue -CS seminar hall, Spot registration started"
  },
  {
    "_id": {
      "$oid": "67a6e8d91c55eac8024a7068"
    },
    "content": "📢 Light music spot registration started near placement hall"
  },
  {
    "_id": {
      "$oid": "67a6e9311c55eac8024a706a"
    },
    "content": "Kalaripayattu will begin at 10:30 AM in the auditorium. ⚔️"
  },
  {
    "_id": {
      "$oid": "67a6e95a1c55eac8024a706c"
    },
    "content": "📢 AUTOQUIZ: Vacancies: 15 Teams Closing time : 1PM"
  },
  {
    "_id": {
      "$oid": "67a6e96f1c55eac8024a706e"
    },
    "content": "  Clue craze venue has changed to mb 124"
  }]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://xplore-blog-s02u.onrender.com/api/news/get");
        const data = await response.json();
        // const data = [
        //   {
        //     _id: "67a3e877978c37ee5636e70e",
        //     content: "Welcome to Xplore'24 ✨",
        //     createdAt: "2025-02-05T22:38:47.777+00:00",
        //     updatedAt: "2025-02-05T22:38:47.777+00:00",
        //     __v: 0
        //   },
        //   {
        //     _id: "67a3ee29978c37ee5636e73e",
        //     content: "📸 Capture the Moment! Share your Xplore24 experience using #Xplore24!",
        //     createdAt: "2025-02-05T23:03:05.616+00:00",
        //     updatedAt: "2025-02-05T23:03:05.616+00:00",
        //     __v: 0
        //   },
        //   {
        //     _id: "67a58116a16287a26a9e2761",
        //     content: "⚠️ Change of Location: LINE FOLLOWER COMPETITION has been shifted to D…",
        //     createdAt: "2025-02-07T03:42:14.244+00:00",
        //     updatedAt: "2025-02-07T03:42:14.244+00:00",
        //     __v: 0
        //   },
        //   {
        //     _id: "67a5cec2055b8621b9b9d203",
        //     content: "🤖 Line Follower Second Round ⚡ begins at 3:15 PM 📍 New Library Block…",
        //     createdAt: "2025-02-07T09:13:38.133+00:00",
        //     updatedAt: "2025-02-07T09:13:38.133+00:00",
        //     __v: 0
        //   }
        // ];
        
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
