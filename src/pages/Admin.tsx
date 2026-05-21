import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, ShieldCheck, Activity, Eye, EyeOff } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockUsers = [
  { id: 1, name: "Priya Sharma", email: "priya@email.com", status: "verified", groups: 2, score: 87 },
  { id: 2, name: "Rajesh Kumar", email: "rajesh@email.com", status: "pending", groups: 1, score: 72 },
  { id: 3, name: "Anita Desai", email: "anita@email.com", status: "verified", groups: 3, score: 91 },
];

const mockGroups = [
  { id: "GRP001", name: "Techie Savers", members: 8, totalPool: 40000, status: "active" },
  { id: "GRP002", name: "Neighborhood Fund", members: 15, totalPool: 30000, status: "active" },
];

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "saamvara@admin.com" && password === "saamvara") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={24} className="text-primary-foreground" />
            </div>
            <h1 className="font-display text-xl font-bold">Admin Access</h1>
          </div>
          <div className="bg-card rounded-2xl shadow-card p-6 space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Admin email" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button className="w-full" onClick={handleLogin}>Login</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-primary" />
            <span className="font-display font-bold">Saamavar Admin</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setLoggedIn(false)}>Logout</Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl p-5 shadow-card">
            <Users size={20} className="text-primary mb-2" />
            <p className="font-display text-2xl font-bold">12,547</p>
            <p className="text-xs text-muted-foreground">Total Users</p>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-card">
            <Activity size={20} className="text-primary mb-2" />
            <p className="font-display text-2xl font-bold">2,403</p>
            <p className="text-xs text-muted-foreground">Active Groups</p>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-card">
            <ShieldCheck size={20} className="text-primary mb-2" />
            <p className="font-display text-2xl font-bold">98.2%</p>
            <p className="text-xs text-muted-foreground">Compliance Rate</p>
          </div>
        </div>

        <Tabs defaultValue="users">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="mt-4">
            <div className="bg-card rounded-xl shadow-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Score</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="border-t border-border">
                      <td className="p-4 font-medium">{user.name}</td>
                      <td className="p-4 text-muted-foreground">{user.email}</td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          user.status === "verified" ? "bg-secondary text-secondary-foreground" : "bg-accent text-accent-foreground"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4">{user.score}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="groups" className="mt-4">
            <div className="bg-card rounded-xl shadow-card overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-medium text-muted-foreground">ID</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Members</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Pool</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockGroups.map((group) => (
                    <tr key={group.id} className="border-t border-border">
                      <td className="p-4 text-muted-foreground">{group.id}</td>
                      <td className="p-4 font-medium">{group.name}</td>
                      <td className="p-4">{group.members}</td>
                      <td className="p-4">₹{group.totalPool.toLocaleString()}</td>
                      <td className="p-4">
                        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{group.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
