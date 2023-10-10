import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@/icons/reactIcons";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

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
