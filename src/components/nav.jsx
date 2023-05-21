import { useContext } from "react";

import Icon from "../assets/menu/icon1.png";
import Icon2 from "../assets/menu/icon2.png";
import Icon3 from "../assets/menu/icon3.png";
import Icon4 from "../assets/menu/icon4.png";

import { MenuContext } from "../context/menu";

export default function Nav() {
  const { open } = useContext(MenuContext);

  return (
    <div
      className={
        !open
          ? `hidden`
          : `flex` +
            " min-h-[calc(100vh-96px)] w-28 bg-black flex flex-col justify-around items-center"
      }
    >
      <div className="flex flex-col gap-3">
        <img src={Icon} />
        <img src={Icon2} />
        <img src={Icon3} />
        <img src={Icon4} />
      </div>
      <div className="copyright text-white rotate-180">
        Copyright SportSee 2020
      </div>
    </div>
  );
}
