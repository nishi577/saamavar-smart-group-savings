import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Search, Users, Clock, IndianRupee } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const openGroups = [
  { id: "GRP001", name: "Techie Savers", contribution: 5000, members: 8, maxMembers: 12, cycle: "Monthly", head: "Rahul M." },
  { id: "GRP002", name: "Neighborhood Fund", contribution: 2000, members: 15, maxMembers: 20, cycle: "Monthly", head: "Sunita K." },
  { id: "GRP003", name: "College Alumni Pool", contribution: 10000, members: 5, maxMembers: 10, cycle: "Quarterly", head: "Vikram S." },
  { id: "GRP004", name: "Women's Saving Circle", contribution: 3000, members: 10, maxMembers: 15, cycle: "Monthly", head: "Anjali R." },
  { id: "GRP005", name: "Startup Founders Club", contribution: 15000, members: 4, maxMembers: 8, cycle: "Monthly", head: "Karthik P." },
  { id: "GRP006", name: "Family First Fund", contribution: 1000, members: 6, maxMembers: 10, cycle: "Monthly", head: "Meera D." },
];

const Explore = () => {
  const [search, setSearch] = useState("");
  const filtered = openGroups.filter(
    (g) => g.name.toLowerCase().includes(search.toLowerCase()) || g.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl font-bold mb-1">Explore Groups</h1>
          <p className="text-muted-foreground text-sm mb-8">Find and join savings groups or create your own</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name or Group ID..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button>+ Create Group</Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((group, i) => (
            <motion.div
              key={group.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-semibold">{group.name}</h3>
                  <p className="text-xs text-muted-foreground">ID: {group.id}</p>
                </div>
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                  {group.cycle}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <IndianRupee size={14} />
                  <span>₹{group.contribution.toLocaleString()}/month</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={14} />
                  <span>{group.members}/{group.maxMembers} members</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} />
                  <span>Head: {group.head}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" size="sm">Request to Join</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
