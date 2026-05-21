import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-hero rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 relative z-10">
            Ready to Start Saving Together?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto relative z-10">
            Join thousands of communities already growing their wealth with Saamavar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="text-base px-8 gap-2">
                Create Account <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="ghost" className="text-base px-8 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10">
                Browse Groups
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
