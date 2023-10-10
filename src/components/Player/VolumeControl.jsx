// ----------------------------------------------------------------------
// Imports
// ----------------------------------------------------------------------
import { useRef } from "react";
import { usePlayerStore } from "@/store/playerStore";
import { Slider } from "@/components/Slider";
import { VolumeSilence, Volume } from "@/icons/reactIcons";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------
export function VolumeControl() {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeSilenced = volume < 0.1;

  const handleClickVolume = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };

  return (
    <div className="flex justify-center gap-x-2">
      <button
        className="transition opacity-70 hover:opacity-100"
        onClick={handleClickVolume}
      >
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[95px]"
        onValueChange={(value) => {
          const [newValue] = value;
          const volumeValue = newValue / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
}
