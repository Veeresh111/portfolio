"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, Download, MessageSquare, Plus, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { title: "Total Visitors", value: "1,248", icon: Eye, color: "text-blue-400" },
  { title: "Resume Downloads", value: "142", icon: Download, color: "text-purple-400" },
  { title: "Messages", value: "12", icon: MessageSquare, color: "text-pink-400" },
  { title: "Unique Viewers", value: "892", icon: Users, color: "text-green-400" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
          <Button variant="premium" className="gap-2">
            <Plus className="w-4 h-4" /> Add Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-white/5 border-white/10">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                    <div>
                      <p className="font-medium">Recruiter {i}</p>
                      <p className="text-sm text-muted-foreground truncate max-w-[200px]">Loved your profile, are you open to...</p>
                    </div>
                    <Button variant="ghost" size="sm">Reply</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Manage Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {['Projects', 'Skills', 'Experience', 'Blog'].map((item) => (
                  <Button key={item} variant="outline" className="h-24 flex-col gap-2 border-white/10 bg-white/5 hover:bg-white/10 text-white">
                    <Edit className="w-6 h-6 text-muted-foreground" />
                    Edit {item}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
