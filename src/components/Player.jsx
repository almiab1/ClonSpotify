// ----------------------------------------------------------------------
// Imports
// ----------------------------------------------------------------------
import { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store/playerStore";

import { VolumeControl } from "@/components/Player/VolumeControl";
import { CurrentSong } from "@/components/Player/CurrentSong";
import { SongControl } from "@/components/Player/SongControl";

import { Play, Pause } from "@/icons/reactIcons";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------
export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(
    (state) => state,
  );
  const audioRef = useRef();
  const volumeRef = useRef(1);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);

  // Handle play/pause
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="z-50 flex flex-row justify-between w-full px-1">
      <div className="w-[200px]">
        <CurrentSong {...currentMusic.song} />
      </div>

      <div className="grid flex-1 gap-4 place-content-center">
        <div className="flex flex-col items-center justify-center">
          <button className="p-2 bg-white rounded-full" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <SongControl audio={audioRef} />
          <audio ref={audioRef} />
        </div>
      </div>

      <div className="grid place-content-center">
        <VolumeControl />
      </div>
    </div>
  );
}
