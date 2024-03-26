import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./layout.module.css";

export default function Counter({ start, value, valuePerHour, label }: { start: Date, value: number, valuePerHour: number, label: string }) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    const updateValue = () => {
      const hoursSinceLastRefresh = (Date.now() - new Date(start).getTime()) / 1000 / 60 / 60;
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
    <div className={styles.counter}>
      <Image className={styles.resourceImg} src={`/${label.toLowerCase()}.png`} width={512} height={350} alt={label} />
      {Math.floor(currentValue)}
    </div>
  );
}
