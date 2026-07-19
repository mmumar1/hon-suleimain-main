import { useTranslation } from "react-i18next";
import { cn } from "@/utils";

const LANGUAGES = [
  { code: "en", labelKey: "language.english" },
  { code: "ha", labelKey: "language.hausa" },
];

interface LanguageSwitcherProps {
  /** Pass true when rendered over a dark/hero background so text stays readable */
  dark?: boolean;
}

export function LanguageSwitcher({ dark = false }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.split("-")[0] ?? "en";

  const change = (code: string) => {
    if (code !== current) i18n.changeLanguage(code);
  };

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center rounded-full border overflow-hidden"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.12)",
      }}
    >
      {LANGUAGES.map(({ code, labelKey }) => {
        const isActive = current === code;
        return (
          <button
            key={code}
            onClick={() => change(code)}
            aria-pressed={isActive}
            aria-label={`Switch to ${t(labelKey)}`}
            className={cn(
              "px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              isActive
                ? dark
                  ? "bg-white text-primary"
                  : "bg-primary text-white"
                : dark
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-foreground/60 hover:text-foreground hover:bg-slate-100"
            )}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
