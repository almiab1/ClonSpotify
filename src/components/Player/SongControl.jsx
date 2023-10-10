// ----------------------------------------------------------------------
// Imports
// ----------------------------------------------------------------------
import { useEffect, useState } from "react";
import { Slider } from "@/components/Player/Slider";

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------
export function SongControl({ audio }) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  });

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime); // time in seconds
  };

  const formatTime = (time) => {
    if (time == null) return "0:00";
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <div className="flex pt-2 text-xs gap-x-3 ">
      <span className="w-12 text-right opacity-50">
        {formatTime(currentTime)}
      </span>

      <Slider
        // defaultValue={[0]}
        max={duration}
        min={0}
        className="w-[400px]"
        onValueChange={(value) => {
          const [newValue] = value;
          audio.current.currentTime = newValue;
        }}
      />

      <span className="w-12 opacity-50">
        {duration ? formatTime(duration) : "0:00"}
      </span>
    </div>
  );
}
