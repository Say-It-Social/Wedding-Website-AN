import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TARGET_DATE = new Date("2026-10-26T00:00:00"); // October 26, 2026 – first day of wedding

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type CountdownTimerProps = {
  className?: string;
  innerClassName?: string;
};

const CountdownTimer = ({ className, innerClassName }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(TARGET_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className={cn("w-full px-3 sm:px-4 md:px-6 py-1", className)}>
      <div
        className={cn(
          "w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto box-border rounded-full px-2 sm:px-4 py-2 border border-primary/20 bg-white/30",
          innerClassName
        )}
      >
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-1 text-primary">
          {units.map(({ value, label }, idx) => (
            <div key={label} className="flex items-baseline gap-1">
              <span className="font-cormorant text-xs sm:text-base md:text-lg font-semibold tabular-nums text-primary">
                {label === "Days" ? value : pad(value)}
              </span>
              <span className="font-lora text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.18em] text-primary/80">
                {label}
              </span>
              {idx < units.length - 1 && (
                <span className="mx-1 text-primary/30 text-[10px] sm:text-xs">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
