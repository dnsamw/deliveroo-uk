import { useState, useEffect } from "react";

interface UIMeasurementsProps {}

const useUIMeasurements = () => {
  // const [state, setState] = useState<UIMeasurementsProps>({});
  const [offsetWidth, setOffsetWidth] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setOffsetWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return {
    offsetWidth,
  };
};

export default useUIMeasurements;
