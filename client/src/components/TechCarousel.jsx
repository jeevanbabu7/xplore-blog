import React, { useEffect, useState, useRef } from "react";
import "../index.css";

function TechCarousel() {
  const [events, setEvents] = useState([]);
  const videoRefs = useRef([]);

  // Function to fetch events
  const fetchEvents = async () => {
    try {
      // const response = await fetch("https://xplore-blog.onrender.com/api/blog/get");
      // const data = await response.json();


      const data =[{
        "_id": {
          "$oid": "67a57d86a16287a26a9cbf75"
        },
        "title": "",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/IMG-20250207-WA0002.webp",
        "createdAt": {
          "$date": "2025-02-07T03:27:02.452Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T03:27:02.452Z"
        },
        "__v": 0,
        "contentType": "image"
      },
      {
        "_id": {
          "$oid": "67a57d90a16287a26a9cc31f"
        },
        "title": "",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/IMG-20250207-WA0004.webp",
        "createdAt": {
          "$date": "2025-02-07T03:27:12.953Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T03:27:12.953Z"
        },
        "__v": 0,
        "contentType": "image"
      },
      {
        "_id": {
          "$oid": "67a57d9da16287a26a9cc7e1"
        },
        "title": "",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/IMG-20250207-WA0003.webp",
        "createdAt": {
          "$date": "2025-02-07T03:27:25.455Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T03:27:25.455Z"
        },
        "__v": 0,
        "contentType": "image"
      },
      {
        "_id": {
          "$oid": "67a57da6a16287a26a9ccb39"
        },
        "title": "",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/IMG-20250207-WA0001.webp",
        "createdAt": {
          "$date": "2025-02-07T03:27:34.946Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T03:27:34.946Z"
        },
        "__v": 0,
        "contentType": "image"
      },
      {
        "_id": {
          "$oid": "67a57f6ea16287a26a9d83c9"
        },
        "title": "Galactic Quest",
        "content": "Venue: New library block CA04",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/Screenshot_20250207_090228_Video%20Player.jpg",
        "createdAt": {
          "$date": "2025-02-07T03:35:11.043Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T03:35:11.043Z"
        },
        "__v": 0,
        "contentType": "image"
      },
      {
        "_id": {
          "$oid": "67a59933a16287a26aa4edee"
        },
        "title": "",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/grid%20posters.webp",
        "createdAt": {
          "$date": "2025-02-07T05:25:07.952Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T05:25:07.952Z"
        },
        "__v": 0,
        "contentType": "image"
      },
      {
        "_id": {
          "$oid": "67a5a218055b8621b9abd103"
        },
        "title": "Line Follower Bot Competition happening now at Digital Library, Central Library Block",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/IMG20250207105446.jpg",
        "contentType": "image",
        "createdAt": {
          "$date": "2025-02-07T06:03:05.011Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T06:03:05.011Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "67a5a7b4055b8621b9adcea9"
        },
        "title": "",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/WhatsApp%20Image%202025-02-07%20at%2011.41.47.jpeg",
        "contentType": "image",
        "createdAt": {
          "$date": "2025-02-07T06:27:00.109Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T06:27:00.109Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "67a5b46e055b8621b9b1cd4c"
        },
        "title": "Neon football",
        "content": "Happening now at Seminar Hall,New library Block",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/neonn.webp",
        "contentType": "image",
        "createdAt": {
          "$date": "2025-02-07T07:21:18.805Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T07:21:18.805Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "67a5d0d1055b8621b9ba94c5"
        },
        "title": "",
        "content": "",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/solderingwinners.webp",
        "contentType": "image",
        "createdAt": {
          "$date": "2025-02-07T09:22:25.706Z"
        },
        "updatedAt": {
          "$date": "2025-02-07T09:22:25.706Z"
        },
        "__v": 0
      },
      {
        "_id": {
          "$oid": "67a5d1771c55eac8024a7045"
        },
        "title": "",
        "content": "",
        "contentType": "video",
        "image": "https://qjwuustulpznqpjxygws.supabase.co/storage/v1/object/public/images/uploads/1.mp4"
      }]
      
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 60000);
    return () => clearInterval(interval);
  }, []);

  console.log(videoRefs.current);
  

  // Intersection Observer to handle unmuting videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
    
          console.log(entry.isIntersecting);
                
          if (entry.isIntersecting) {
            video.play();
            video.muted = false; // Unmute when in viewport
          } else {
            video.muted = true; // Mute when out of viewport
          }
        });
      },
      { threshold: .4 } // Video must be at least 50% visible to be unmuted
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [events]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-infinite-scroll">
        {events.length && events.map((event, index) => (
          <div key={`${event._id || index}`} className="min-w-[300px] h-[400px] mx-4 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
            {event.contentType === "image" ? (
              <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-xl" />
            ) : (
              <video
                ref={(el) => {
                  if (el && !videoRefs.current.includes(el)) {
                    videoRefs.current.push(el); // Append instead of assigning by index
                  }
                }}
                src={event.image}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                // muted // Start muted (unmuted when in view)
                // playsInline
                loop
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-200">{event.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCarousel;
