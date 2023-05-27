// Required
import { useContext, useEffect, useState } from "react";

// Assets
import Icon from "../assets/menu/icon1.png";
import Icon2 from "../assets/menu/icon2.png";
import Icon3 from "../assets/menu/icon3.png";
import Icon4 from "../assets/menu/icon4.png";

// Context
import { MenuContext } from "../context/menu";

export default function Nav() {
  const { open } = useContext(MenuContext);
  const [screen, setScreen] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    };

    // Listen if window is resized by user
    window.addEventListener("resize", handleResize);

    // Get default user resolution
    setScreen({ width: window.innerWidth, height: window.innerHeight });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screen.width >= 1024 ? (
    <div
      className={
        "flex min-h-[calc(100vh-96px)] w-28 flex-col items-center justify-around bg-black"
      }
    >
      <div className="flex flex-col gap-3">
        <img src={Icon} />
        <img src={Icon2} />
        <img src={Icon3} />
        <img src={Icon4} />
      </div>
      <div className="copyright rotate-180 text-white">
        Copyright SportSee 2020
      </div>
    </div>
  ) : (
    <div
      className={
        !open
          ? `hidden`
          : `flex` +
            " flex min-h-[calc(100vh-96px)] w-28 flex-col items-center justify-around bg-black"
      }
    >
      <div className="flex flex-col gap-3">
        <img src={Icon} />
        <img src={Icon2} />
        <img src={Icon3} />
        <img src={Icon4} />
      </div>
      <div className="copyright rotate-180 text-white">
        Copyright SportSee 2020
      </div>
    </div>
  );
}
