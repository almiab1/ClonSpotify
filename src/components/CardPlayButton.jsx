import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@/icons/reactIcons";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id, size = "small" }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[0] });
      });
  };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <>
      <button
        onClick={handleClick}
        className="p-4 transition bg-green-500 rounded-full card-play-button hover:scale-105 hover:bg-green-400"
      >
        {isPlayingPlaylist ? (
          <Pause className={iconClassName} />
        ) : (
          <Play className={iconClassName} />
        )}
      </button>
    </>
  );
}
