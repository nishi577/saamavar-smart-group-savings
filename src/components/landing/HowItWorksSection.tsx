import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Sign Up & Verify", desc: "Create your account with biometric verification and identity proof." },
  { step: "02", title: "Join or Create a Group", desc: "Find an existing savings group or start your own with custom rules." },
  { step: "03", title: "Contribute Monthly", desc: "Make fixed monthly contributions. AI tracks and optimizes everything." },
  { step: "04", title: "Receive Your Pot", desc: "Get your turn-based payout or access emergency funds when needed." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Four simple steps to start your savings journey.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-5xl font-display font-bold text-primary/10 mb-4">{item.step}</div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
