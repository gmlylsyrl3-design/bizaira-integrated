import { useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import {
  Camera, MessageSquare, BarChart3, CalendarClock, DollarSign, BookOpen,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const NAVY   = "#001830";
const PURPLE = "#1D4ED8";
const SOFT_GOLD = "#C9B037";

const CreatePage = () => {
  const navigate = useNavigate();
  const { t, lang } = useI18n();
  const isHe = lang === "he";
  const Arrow = isHe ? ChevronLeft : ChevronRight;

  const tools = [
    {
      id: "studio",
      icon: Camera,
      titleKey: "tool.studio.title",
      descKey:  "tool.studio.desc",
      route:    "/create/product-photos",
    },
    {
      id: "message",
      icon: MessageSquare,
      titleKey: "tool.messages.title",
      descKey:  "tool.messages.desc",
      route:    "/create/messages",
    },
    {
      id: "analytics",
      icon: BarChart3,
      titleKey: "tool.analytics.title",
      descKey:  "tool.analytics.desc",
      route:    "/create/analytics",
    },
    {
      id: "time",
      icon: CalendarClock,
      titleKey: "tool.time.title",
      descKey:  "tool.time.desc",
      route:    "/create/time",
    },
    {
      id: "pricing",
      icon: DollarSign,
      titleKey: "tool.pricing.title",
      descKey:  "tool.pricing.desc",
      route:    "/create/pricing",
    },
    {
      id: "journal",
      icon: BookOpen,
      titleKey: "tool.journal.title",
      descKey:  "tool.journal.desc",
      route:    "/journal",
    },
  ];

  return (
    <div className="pb-28 min-h-screen" dir={isHe ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="px-5 pt-10 mb-8">
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
          {isHe ? "סטודיו AI" : "AI Studio"}
        </p>
        <h1 className="text-2xl font-black" style={{ color: NAVY }}>
          {t("create.title")}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {isHe ? "בחרי את הכלי שתרצי לפתוח" : "Choose the tool you'd like to open"}
        </p>
      </div>

      {/* Tool cards */}
      <div className="flex flex-col gap-4 px-5">
        {tools.map((tool, i) => {
          const IconComp = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => navigate(tool.route)}
              className="w-full glass-card rounded-2xl flex items-center justify-between px-5 py-5 group hover:border-accent/40 active:scale-[0.99] transition-all duration-200 animate-float-up"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              {/* Icon + text */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: "rgba(201, 176, 55, 0.1)" }}
                >
                  <IconComp size={20} strokeWidth={1.5} style={{ color: SOFT_GOLD }} />
                </div>
                <div className="text-start">
                  <div className="text-sm font-bold leading-snug" style={{ color: NAVY }}>
                    {t(tool.titleKey)}
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
                    {t(tool.descKey)}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 shrink-0"
                style={{ background: "rgba(201, 176, 55, 0.05)" }}
              >
                <Arrow size={14} strokeWidth={2} style={{ color: SOFT_GOLD, opacity: 0.7 }} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CreatePage;
