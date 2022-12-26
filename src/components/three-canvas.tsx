import { ResizeObserver } from "@juggle/resize-observer";
import {
  Canvas as DefaultCanvas,
  Props as DefaultCanvasProps,
} from "@react-three/fiber";

function Canvas({ resize = {}, children, ...restProps }: DefaultCanvasProps) {
  return (
    <DefaultCanvas
      // uncomment the next line in order to make a snapshot of the canvas
      // gl={{ preserveDrawingBuffer: true }}
      // required for pinch-to-zoom animations to work
      resize={{ polyfill: ResizeObserver, scroll: false, ...resize }}
      {...restProps}
    >
      {children}
    </DefaultCanvas>
  );
}

export default Canvas;
