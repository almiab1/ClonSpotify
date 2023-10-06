import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@/components/Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const handleClick = () => {
    setCurrentMusic({ playlist: { id } });
    setIsPlaying(!isPlaying);
  };

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  return (
    <>
      <button
        onClick={handleClick}
        className="p-4 transition bg-green-500 rounded-full card-play-button hover:scale-105 hover:bg-green-400"
      >
        {isPlayingPlaylist ? <Pause /> : <Play />}
      </button>
    </>
  );
}
