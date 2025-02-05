import React, { useEffect, useState } from 'react';
import '../index.css';

function TechCarousel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://xplore-blog.onrender.com/api/blog/get");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  setInterval(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://xplore-blog.onrender.com/api/blog/get");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  },60000);

  return (
    <div className="relative overflow-hidden">
  <div className="flex w-max animate-infinite-scroll">
    {/* Double the items for seamless scrolling */}
    {[...events, ...events].map((event, index) => (
      <div
        key={`${event._id}-${index}`}
        className="min-w-[300px] h-[400px] mx-4 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-xl"
        />
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
