import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useI18n } from "@/lib/i18n";
import { Sparkles, Mail, User, Check, Loader2 } from "lucide-react";

const AccountVerificationPage = () => {
  const { user } = useAuth();
  const { lang } = useI18n();
  const navigate = useNavigate();
  const isHe = lang === "he";
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    setLoading(true);
    // Simulate verification or any additional setup
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4">
      <div className="max-w-md w-full">
        <div className="glass-card rounded-3xl p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <Check size={32} className="text-primary" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {isHe ? "החשבון שלך מוכן!" : "Your Account is Ready!"}
            </h1>
            <p className="text-muted-foreground">
              {isHe ? "אלה פרטי החשבון שלך" : "Here are your account details"}
            </p>
          </div>

          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
              <User size={20} className="text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {isHe ? "שם:" : "Name:"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user.user_metadata?.full_name || "N/A"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
              <Mail size={20} className="text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {isHe ? "אימייל:" : "Email:"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            disabled={loading}
            className="w-full gradient-glow glow-shadow text-primary-foreground font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-60"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <Sparkles size={18} />
                {isHe ? "המשך" : "Continue"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationPage;