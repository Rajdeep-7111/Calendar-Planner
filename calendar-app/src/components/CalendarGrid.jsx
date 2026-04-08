import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isSameDay,
  isWithinInterval,
  isToday,
} from "date-fns";

export default function CalendarGrid({
  currentDate,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  theme,
}) {
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);

  const days = eachDayOfInterval({ start, end });
  const startDay = getDay(start);

  const totalCells = 42; // 6 rows × 7 days
const emptyCells = startDay;
const remainingCells = totalCells - (days.length + emptyCells);

  // 🧠 CLICK LOGIC
  const handleClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="grid grid-cols-7 text-center text-gray-400 mb-3">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => {
  const isWeekend = i === 0 || i === 6;

  return (
    <div
      key={d}
      className={`${isWeekend ? `${theme.text} font-medium"`: ""}`}
    >
      {d}
    </div>
  );
})}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-2 text-center min-h-[260px]">

        {/* EMPTY SPACES */}
        {Array.from({ length: emptyCells }).map((_, i) => (
  <div key={"empty-start-" + i}></div>
))}

        {/* DAYS */}
        {days.map((day) => {
          const isStart = startDate && isSameDay(day, startDate);
          const isEnd = endDate && isSameDay(day, endDate);
          const isTodayDate = isToday(day);
          const dayOfWeek = getDay(day);
const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

          const isInRange =
            startDate &&
            endDate &&
            isWithinInterval(day, { start: startDate, end: endDate });

          return (
            <div
              key={day}
              onClick={() => handleClick(day)}
             className={`p-2 rounded-md cursor-pointer transition-all duration-200 transform

  ${isStart || isEnd ? `${theme.color} text-white` : ""}
  ${
    isInRange && !isStart && !isEnd
      ? `bg-pink-200`
      : ""
  }

  ${
    !isStart && !isEnd && isWeekend
      ? `${theme.text} font-medium`
      : ""
  }

  hover:scale-105 hover:bg-gray-100
`}
            >
              {format(day, "d")}
            </div>
          );
        })}
        {Array.from({ length: remainingCells }).map((_, i) => (
  <div key={"empty-end-" + i}></div>
))}
      </div>
    </div>
  );
}