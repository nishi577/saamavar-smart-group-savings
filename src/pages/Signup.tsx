import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">S</span>
            </div>
          </Link>
          <h1 className="font-display text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm mt-1">Step {step} of 2</p>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 space-y-5">
          {step === 1 && (
            <motion.div className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <Button className="w-full" onClick={() => setStep(2)}>Continue</Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="space-y-2">
                <Label htmlFor="salary">Monthly Salary (₹)</Label>
                <Input id="salary" type="number" placeholder="e.g., 50000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal">Financial Goal</Label>
                <Input id="goal" placeholder="e.g., Buy a car, Build savings" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Goal Timeline (months)</Label>
                <Input id="timeline" type="number" placeholder="e.g., 12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhar">Aadhar Card Upload</Label>
                <Input id="aadhar" type="file" accept="image/*,.pdf" />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                <Button className="flex-1">Create Account</Button>
              </div>
            </motion.div>
          )}

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
