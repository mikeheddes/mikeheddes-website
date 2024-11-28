import { useLayoutEffect, useRef } from "react";

import Base from "./Base";

const ROTATION_SPEED = 1000; // ms for one rotation
const NUM_RAYS = 12;
const ROTATION_TICK = 360 / NUM_RAYS;
const opacityFraction = 1 / NUM_RAYS;

export default function Loading(props) {
  const group = useRef<SVGGElement>();

  useLayoutEffect(() => {
    let ticks = 0;

    const handleRotation = () => {
      ticks++;
      ticks %= NUM_RAYS;

      group.current.style.setProperty(
        "transform",
        `rotate(${-ROTATION_TICK * ticks}deg)`,
      );
    };

    const intervalId = setInterval(handleRotation, ROTATION_SPEED / NUM_RAYS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Base {...props} $boxWidth={2620}>
      <g
        ref={group}
        style={{ transformOrigin: "center", transformBox: "fill-box" }}
      >
        <path
          opacity={1}
          d="M1310 1852c45 0 81 -36 81 -82v-355c0 -45 -36 -81 -81 -81c-46 0 -81 36 -81 81v355c0 46 35 82 81 82z"
        />
        <path
          opacity={1 - opacityFraction}
          d="M745 1701c39 22 87 8 110 -31l178 -308c22 -39 10 -87 -30 -110c-40 -24 -87 -10 -111 29l-177 308c-23 39 -11 89 30 112z"
        />
        <path
          opacity={1 - opacityFraction * 2}
          d="M331 1287c22 39 71 51 110 29l308 -178c39 -23 52 -71 30 -111c-23 -40 -71 -52 -111 -30l-308 178c-39 23 -53 71 -29 112z"
        />
        <path
          opacity={1 - opacityFraction * 3}
          d="M179 721c0 45 36 80 81 80h355c46 0 82 -35 82 -80c0 -46 -36 -81 -82 -81h-355c-45 0 -81 35 -81 81z"
        />
        <path
          opacity={1 - opacityFraction * 4}
          d="M331 155c-24 40 -10 87 29 111l308 177c40 23 88 11 111 -30c23 -39 9 -87 -30 -110l-308 -178c-39 -22 -88 -10 -110 30z"
        />
        <path
          opacity={1 - opacityFraction * 5}
          d="M745 -259c-40 22 -53 71 -30 111l177 307c24 40 71 53 112 30c39 -23 51 -71 29 -110l-178 -308c-23 -39 -71 -53 -110 -30z"
        />
        <path
          opacity={1 - opacityFraction * 6}
          d="M1310 -411c-46 0 -81 36 -81 81v356c0 45 35 81 81 81c45 0 81 -36 81 -81v-356c0 -45 -36 -81 -81 -81z"
        />
        <path
          opacity={1 - opacityFraction * 7}
          d="M1875 -259c-39 -23 -87 -9 -110 30l-178 308c-22 39 -10 87 30 111c39 23 88 9 111 -31l177 -307c22 -40 10 -88 -30 -111z"
        />
        <path
          opacity={1 - opacityFraction * 8}
          d="M2290 155c-23 -40 -72 -52 -111 -30l-308 178c-39 23 -52 71 -30 111c23 40 71 52 111 29l308 -177c39 -24 53 -72 30 -111z"
        />
        <path
          opacity={1 - opacityFraction * 9}
          d="M2441 721c0 -46 -36 -81 -81 -81h-355c-46 0 -82 35 -82 81c0 45 36 80 82 80h355c45 0 81 -35 81 -80z"
        />
        <path
          opacity={1 - opacityFraction * 10}
          d="M2290 1286c23 -40 9 -88 -30 -111l-308 -178c-40 -22 -88 -10 -110 30c-24 40 -10 88 29 111l308 178c39 22 88 10 111 -30z"
        />
        <path
          opacity={1 - opacityFraction * 11}
          d="M1876 1700c39 -23 51 -72 29 -111l-177 -308c-24 -39 -72 -52 -111 -30c-40 23 -52 72 -30 111l178 308c23 39 71 53 111 30z"
        />
      </g>
    </Base>
  );
}
