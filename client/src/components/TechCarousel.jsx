import React, { useEffect, useState, useRef } from "react";
import "../index.css";

function TechCarousel() {
  const [events, setEvents] = useState([]);
  const videoRefs = useRef([]);

  // Function to fetch events
  const fetchEvents = async () => {
    try {
      const response = await fetch("https://xplore-blog.onrender.com/api/blog/get");
      const data = await response.json();
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
