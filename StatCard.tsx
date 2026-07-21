import GlassCard from "./GlassCard";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

export default function StatCard({
  label,
  value,
  unit,
  delta,
  deltaLabel,
  icon: Icon,
  tone = "signal",
}: {
  label: string;
  value: string;
  unit?: string;
  delta?: number;
  deltaLabel?: string;
  icon?: LucideIcon;
  tone?: "signal" | "coral" | "amber" | "current" | "bio";
}) {
  const toneColor: Record<string, string> = {
    signal: "text-signal",
    coral: "text-coral",
    amber: "text-amber",
    current: "text-current",
    bio: "text-bio",
  };

  return (
    <GlassCard className="p-5 flex flex-col gap-3 animate-rise">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-mist font-medium">
          {label}
        </span>
        {Icon && (
          <Icon className={clsx("w-4 h-4", toneColor[tone])} strokeWidth={1.75} />
        )}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-3xl font-semibold text-ink tabular-nums">
          {value}
        </span>
        {unit && <span className="text-sm text-mist">{unit}</span>}
      </div>
      {delta !== undefined && (
        <div className="flex items-center gap-1 text-xs font-mono">
          <span className={delta >= 0 ? "text-coral" : "text-bio"}>
            {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}%
          </span>
          {deltaLabel && <span className="text-ash">{deltaLabel}</span>}
        </div>
      )}
    </GlassCard>
  );
}
