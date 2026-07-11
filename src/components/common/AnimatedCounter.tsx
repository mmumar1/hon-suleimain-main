import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { cn } from "@/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, suffix = "", duration = 2, className }: AnimatedCounterProps) {
  const { ref, displayValue } = useAnimatedCounter(value, duration);

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {displayValue}
      {suffix}
    </span>
  );
}
