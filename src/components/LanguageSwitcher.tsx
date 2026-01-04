"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
            <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-xs rounded-md transition-all ${language === "en"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("vi")}
                className={`px-2 py-1 text-xs rounded-md transition-all ${language === "vi"
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
            >
                VI
            </button>
        </div>
    );
}
