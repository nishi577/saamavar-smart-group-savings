import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { TrendingUp, Wallet, Users, Bell, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "Total Savings", value: "₹24,500", icon: Wallet, trend: "+12%", up: true },
  { label: "Financial Score", value: "87/100", icon: TrendingUp, trend: "+3", up: true },
  { label: "Active Groups", value: "2", icon: Users, trend: "", up: true },
  { label: "Next Due", value: "Apr 15", icon: Bell, trend: "₹5,000", up: false },
];

const groups = [
  { name: "Office Savings Club", contribution: "₹5,000/mo", members: 12, progress: 65 },
  { name: "Family Chit Fund", contribution: "₹3,000/mo", members: 8, progress: 40 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold mb-1">Welcome back, User! 👋</h1>
          <p className="text-muted-foreground text-sm mb-8">Here's your financial overview</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-xl p-5 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <stat.icon size={18} className="text-primary" />
                </div>
                {stat.trend && (
                  <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.up ? "text-primary" : "text-destructive"}`}>
                    {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {stat.trend}
                  </span>
                )}
              </div>
              <p className="font-display text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-semibold">My Groups</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {groups.map((group) => (
              <div key={group.name} className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold">{group.name}</h3>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                    {group.members} members
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{group.contribution}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Cycle Progress</span>
                    <span>{group.progress}%</span>
                  </div>
                  <Progress value={group.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
