import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/hooks/useAuth";
import OnboardingFlow from "@/components/OnboardingFlow";
import AuthSection from "@/components/AuthSection";

type Step = "onboarding" | "main";

const LandingPage = () => {
  const { lang } = useI18n();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>("onboarding");

  useEffect(() => {
    if (!loading && user) {
      setStep("main");
    }
  }, [user, loading]);

  const onOnboardingComplete = useCallback(() => {
    setStep("main");
  }, []);

  const handleGuestContinue = () => {
    navigate("/create");
  };

  if (step === "onboarding" && !user) {
    return <OnboardingFlow onComplete={onOnboardingComplete} />;
  }

  // Main: Hero title + Auth or Welcome
  return (
    <section className="px-4 pt-8 pb-4 animate-fade-in">
      {/* Hero — Elegant centered title with gold/lilac glow */}
      <div className="text-center mb-10 pt-8">
        <h1 
          className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-primary"
        >
          {lang === "he" ? "הכל במקום אחד" : "Everything In One Place"}
        </h1>
      </div>

      {/* Auth section for non-logged-in users */}
      {!user && (
        <section className="mb-8">
          <div className="text-center mb-5">
            <h2 className="text-xl font-bold text-foreground mb-1">
              {lang === "he" ? "צרו חשבון והתחילו עכשיו" : "Create an Account & Start Now"}
            </h2>
          </div>
          <AuthSection onSuccess={() => {}} />

          {/* Guest continue */}
          <div className="text-center mt-5">
            <button
              onClick={handleGuestContinue}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              {lang === "he" ? "המשך כאורח →" : "Continue as Guest →"}
            </button>
          </div>
        </section>
      )}

      {/* Welcome for logged-in users */}
      {user && (
        <section className="text-center">
          <button
            onClick={() => navigate("/create")}
            className="gradient-glow glow-shadow text-primary-foreground font-bold py-4 px-8 rounded-2xl text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all mx-auto"
          >
            <Sparkles size={20} />
            {lang === "he" ? "הצטרף לסטודיו" : "Join the Studio"}
          </button>
        </section>
      )}
    </section>
  );
};

export default LandingPage;
