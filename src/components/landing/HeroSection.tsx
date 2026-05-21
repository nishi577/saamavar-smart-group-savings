import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
              <Shield size={14} />
              AI-Powered Collective Finance
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Save Smarter,{" "}
            <span className="text-gradient">Together</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Saamavar combines the trust of traditional chit funds with the intelligence of AI
            to help communities save, grow, and thrive financially.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="/signup">
              <Button size="lg" className="text-base px-8 gap-2">
                Start Saving <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="text-base px-8">
                Explore Groups
              </Button>
            </Link>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-1">
                <Users size={18} />
              </div>
              <AnimatedCounter target={12500} suffix="+" />
              <p className="text-xs text-muted-foreground mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-1">
                <TrendingUp size={18} />
              </div>
              <AnimatedCounter target={85} prefix="₹" suffix="Cr+" />
              <p className="text-xs text-muted-foreground mt-1">Money Saved</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-primary mb-1">
                <Shield size={18} />
              </div>
              <AnimatedCounter target={2400} suffix="+" />
              <p className="text-xs text-muted-foreground mt-1">Groups Active</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
