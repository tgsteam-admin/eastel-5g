"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale) => {
    // pathname currently looks like /en/some-path
    // we want to replace the first segment
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2">
      {["en", "zh", "ms"].map((l) => (
        <button
          key={l}
          onClick={() => handleChange(l)}
          className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md transition-all ${
            locale === l
              ? "bg-neon-pink text-white neon-glow-pink"
              : "text-white/40 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
