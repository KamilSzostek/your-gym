import {useEffect, useState} from 'react';


export const useResizeRefreshHook = (method: Function) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
      method();
    }, [method, windowWidth]);
  }