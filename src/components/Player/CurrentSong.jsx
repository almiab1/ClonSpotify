// ----------------------------------------------------------------------
// Component for displaying the current song in the player
// ----------------------------------------------------------------------
export function CurrentSong({ image, title, artists }) {
  return (
    <div className={"flex items-center gap-5 relative overflow-hidden"}>
      <picture className="w-16 h-16 overflow-hidden rounded-md shadow-lg bg-zinc-800">
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className="block text-sm font-semibold">{title}</h3>
        <span className="text-xs opacity-80">{artists?.join(", ")}</span>
      </div>
    </div>
  );
}
