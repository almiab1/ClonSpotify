import { usePlayerStore } from "@/store/playerStore";
import { Slider } from "@/components/Slider";
import { VolumeSilence, Volume } from "@/icons/reactIcons";

export function VolumeControl() {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);

  return (
    <div className="flex justify-center gap-x-2">
      {volume < 0.1 ? <VolumeSilence /> : <Volume />}
      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
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
