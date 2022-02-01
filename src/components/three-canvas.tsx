import { ResizeObserver as polyfill } from "@juggle/resize-observer";
import {
  Canvas as DefaultCanvas,
  Props as DefaultCanvasProps,
} from "@react-three/fiber";

const pixelRatio = typeof window === "undefined" ? 1 : window.devicePixelRatio;

function Canvas({ resize = {}, children, ...restProps }: DefaultCanvasProps) {
  return (
    <DefaultCanvas
      // uncomment the next line in order to make a snapshot of the canvas
      // gl={{ preserveDrawingBuffer: true }}
      dpr={pixelRatio}
      resize={{ polyfill, scroll: false, ...resize }}
      {...restProps}
    >
      {children}
    </DefaultCanvas>
  );
}

export default Canvas;
