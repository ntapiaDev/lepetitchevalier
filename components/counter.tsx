"use client";

import { useEffect, useState } from "react";

export default function Counter({ start, value, valuePerHour }: { start: number, value: number, valuePerHour: number }) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    const updateValue = () => {
      const hoursSinceLastRefresh = (Date.now() - start) / 1000 / 60 / 60;
      const valueProduced = valuePerHour * hoursSinceLastRefresh;
      setCurrentValue(value + valueProduced);
    }

    const interval = setInterval(() => {
      updateValue();
    }, 1000);

    updateValue();

    return () => clearInterval(interval);
  }, [start, value, valuePerHour]);

  return (
    <div>
      {Math.floor(currentValue)}
    </div>
  );
}
