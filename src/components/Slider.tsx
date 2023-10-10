import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import cn from "clsx";

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex touch-none select-none items-center group",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-1 overflow-hidden bg-gray-800 rounded-full grow">
      <SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-green-400" />
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="hidden w-3 h-3 transition-colors bg-white border-2 rounded-full group-hover:block border-primary bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;
