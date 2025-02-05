import React, { useEffect, useState } from 'react';
import { Calendar, Menu, Bell, Search } from 'lucide-react';
import TechCarousel from './components/TechCarousel.jsx';
import NewsTickerBar from './components/NewsTickerBar.jsx';
 // Ensure the logo is in the correct path
 import './index.css'
import Youtube from './components/Youtube.jsx';
function App() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const [show, setShow] = useState(true);

  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit"

  }));

  setInterval(() => {
    location.reload();
  }, 60000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit"

      }));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen   text-white bg-black">
      {/* Top Bar */}
      <header className="bg-black/30 backdrop-blur-sm px-6 py-4 fixed w-full top-0 z-50 border-b border-orange-500/20 animate-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src='./logo.png' alt="Xplore'24" className="w-12 h-12 animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 text-transparent bg-clip-text">
              Xplore'24
            </span>
          </div>

          {/* Date */}
          <div className="flex items-center space-x-2 bg-black/20 px-4 py-2 rounded-full border border-orange-500/10">
            <Calendar className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300 font-mono font-bold text-lg">{today}</span>
          </div>

          {/* Right Side Items */}
          <div className="flex gap-8 items-center space-x-6">
            {/* <Search className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all hover:scale-110" />
            <Bell className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all hover:scale-110" /> */}
            <p className='font-bold'>{time}</p>
            <Menu className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all hover:scale-110" onClick={() => {
              setShow((prev) => !prev);
            }}/>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Carousel Section */}
        <section className="py-12">
          {show ? <TechCarousel /> : <Youtube url="https://www.youtube.com/embed/2DpP1GYOzBY?si=2lvcQZcs1_i6pIXx"/>}
        </section>

        {/* News Ticker */}
        <section className="fixed bottom-0 w-full bg-black/30 backdrop-blur-sm border-t border-orange-500/20 animate-border">
          <NewsTickerBar />
        </section>
      </main>
    </div>
  );
}

export default App;
