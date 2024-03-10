import { useState, useRef, useEffect } from "react";

import openDoor from "../assets/open-door.jpg";
import chauffer from "../assets/chauffer.jpg";

function FirstScreen() {
  const img = useRef<HTMLImageElement>(null);
  const [src, setsrc] = useState(openDoor);
  const switchbackground = () => {
    setsrc(chauffer);
  };
  useEffect(() => {
    const val = img.current;
    val.onscroll = switchbackground;
  }, []);

  return (
    <div className="relative">
      <img
        src={src}
        className="overflow-hidden object-cover opacity-90"
        ref={img}
      />
      <p className="absolute top-96 left-10 right-0 text-8xl text-white font-bold font-['Montserrat'] animate-slidein">
        City Cars & <br />
        Coaches.
      </p>
    </div>
  );
}
export default FirstScreen;
