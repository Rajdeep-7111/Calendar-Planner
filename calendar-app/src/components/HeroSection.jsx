import { format } from "date-fns";

export default function HeroSection({ currentDate, theme }) {
  return (
    <div className="relative overflow-hidden rounded-t-xl">

      {/* LEFT */}
      <div
        className={`absolute bottom-0 left-0 w-1/2 h-32 ${theme.color} z-10`}
        style={{
          clipPath: "polygon(0 0%, 100% 0%, 100% 55%, 0 100%)",
        }}
      />

      {/* RIGHT */}
      <div
        className={`absolute bottom-0 right-0 w-1/2 h-36 ${theme.color} z-10`}
        style={{
          clipPath: "polygon(0 0%, 100% 0%, 100% 50%, 30% 100%, 0 60%)",
        }}
      />

      {/* TEXT */}
      <div className="absolute bottom-14 right-20 z-30 text-white text-right">
        <p className="text-sm">{format(currentDate, "yyyy")}</p>
        <h2 className="text-3xl font-bold">
          {format(currentDate, "MMMM")}
        </h2>
      </div>

      {/* IMAGE */}
      <div
        className="w-full h-72 relative z-20"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 50%, 35% 100%,  0 80%)",
        }}
      >
        <img
          src={theme.image}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}