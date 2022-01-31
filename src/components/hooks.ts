import { ResizeObserver as polyfill } from "@juggle/resize-observer";
import { useState, useEffect, useMemo } from "react";
import useMeasureWOPolyfill, { Options as RUMOptions } from "react-use-measure";

// Hook to get the size and position of a DOM element.
export function useMeasure(options: RUMOptions = {}) {
  return useMeasureWOPolyfill({ ...options, polyfill });
}

// Hook to see if a media query matches the current environment. If window is not defined it returns undefined.
export function useMediaQuery(query: string) {
  const queryList = useMemo(() => {
    if (typeof window === "undefined") return;

    return window.matchMedia(query);
  }, [query]);

  const [matches, setMatches] = useState(queryList && queryList.matches);

  useEffect(() => {
    if (!queryList) return;

    const handleMatchesChange = (event) => {
      setMatches(event.matches);
    };

    queryList.addListener(handleMatchesChange);
    return () => {
      queryList.removeListener(handleMatchesChange);
    };
  }, [queryList]);

  return queryList ? matches : undefined;
}
