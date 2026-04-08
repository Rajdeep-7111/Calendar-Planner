import { useState } from "react";
import HeroSection from "./HeroSection";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";
import { addMonths, subMonths } from "date-fns";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [direction, setDirection] = useState("next");
  const [animate, setAnimate] = useState(false);

  // 🎨 12 MONTH THEMES
  const monthThemes = [
    {
      name: "January",
      color: "bg-blue-500",
      text: "text-blue-500",
      image:
        "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "February",
      color: "bg-pink-500",
      text: "text-pink-500",
      image:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "March",
      color: "bg-green-500",
      text: "text-green-500",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "April",
      color: "bg-yellow-400",
      text: "text-yellow-500",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "May",
      color: "bg-emerald-500",
      text: "text-emerald-500",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "June",
      color: "bg-cyan-500",
      text: "text-cyan-500",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "July",
      color: "bg-red-500",
      text: "text-red-500",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "August",
      color: "bg-purple-500",
      text: "text-purple-500",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "September",
      color: "bg-indigo-500",
      text: "text-indigo-500",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "October",
      color: "bg-orange-500",
      text: "text-orange-500",
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "November",
      color: "bg-amber-600",
      text: "text-amber-600",
      image:
        "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "December",
      color: "bg-teal-500",
      text: "text-teal-500",
      image:
        "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const monthIndex = currentDate.getMonth();
  const theme = monthThemes[monthIndex];
  const [notes, setNotes] = useState({});
  const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full transition-all duration-300 ">

      {/* 🔥 PAGE FLIP ANIMATION WRAPPER */}
      <div
        className="transition-all duration-500 ease-in-out shadow-xl"
        style={{
          transform: animate
            ? direction === "next"
              ? "rotateY(-25deg) scale(0.95)"
              : "rotateY(25deg) scale(0.95)"
            : "rotateY(0deg) scale(1)",
          transformOrigin: direction === "next" ? "left" : "right",
          opacity: animate ? 0.7 : 1,
        }}
      >
        {/* HERO */}
        <HeroSection currentDate={currentDate} theme={theme} />

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <NotesPanel
  note={notes[monthKey] || ""}
  setNote={(value) =>
    setNotes((prev) => ({
      ...prev,
      [monthKey]: value,
    }))
  }
/>
          <CalendarGrid
            currentDate={currentDate}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            theme={theme}
          />
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between items-center px-6 py-3">
        <button
          onClick={() => {
            setDirection("prev");
            setAnimate(true);
            setTimeout(() => {
              setCurrentDate(subMonths(currentDate, 1));
              setAnimate(false);
            }, 300);
          }}
          className={`${theme.text} font-semibold hover:scale-105 transition`}
        >
          ← Prev
        </button>

        <button
          onClick={() => {
            setDirection("next");
            setAnimate(true);
            setTimeout(() => {
              setCurrentDate(addMonths(currentDate, 1));
              setAnimate(false);
            }, 300);
          }}
          className={`${theme.text} font-semibold hover:scale-105 transition`}
        >
          Next →
        </button>
      </div>

    </div>
    
  );
  
}