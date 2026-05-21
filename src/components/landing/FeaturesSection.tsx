import { motion } from "framer-motion";
import { Brain, Shield, Users, TrendingUp, Wallet, Bell } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Risk Scoring",
    description: "Intelligent prediction of member behavior and payment patterns to keep groups safe.",
  },
  {
    icon: Users,
    title: "Smart Groups",
    description: "Create or join savings groups with transparent rules and automated cycle management.",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Biometric auth, encrypted data, and verified identities for complete peace of mind.",
  },
  {
    icon: TrendingUp,
    title: "Financial Insights",
    description: "AI-powered recommendations to optimize your savings and reach goals faster.",
  },
  {
    icon: Wallet,
    title: "Emergency Fund",
    description: "Access emergency funds from your group pool when life throws you a curveball.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss a contribution with intelligent payment reminders and grace periods.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Saamavar</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete financial ecosystem that blends community trust with AI intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <feature.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
