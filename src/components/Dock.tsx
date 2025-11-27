"use client"

import { DockIcon } from "./DockIcon";
import { motion } from "framer-motion";
import { projects as projectsData } from "@/data/projects";

interface DockProps {
  onProjectClick: (projectId: number) => void;
  onMailClick: () => void;
  onRoadmapClick: () => void;
}

// projects.ts의 데이터를 Dock용으로 변환
const projects = projectsData.map((project, index) => {
  const icons = ["💌", "🏯", "🤖", "📝", "💍"];
  const gradients = [
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  ];
  
  return {
    id: project.id,
    icon: icons[index] || "📦",
    label: project.title.split(" ")[0], // 첫 단어만 사용
    gradient: gradients[index] || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  };
});

const systemApps = [
  { id: 99, icon: "📧", label: "Mail", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  { id: 100, icon: "🗺️", label: "Roadmap", gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" }
];

export function Dock({ onProjectClick, onMailClick, onRoadmapClick }: DockProps) {
  const handleSystemAppClick = (appId: number) => {
    if (appId === 99) {
      onMailClick();
    } else if (appId === 100) {
      onRoadmapClick();
    }
  };

  return (
    <div className="fixed bottom-2 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="pointer-events-auto"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-3 py-2 shadow-2xl">
          <div className="flex items-end gap-2">
            {projects.map((project) => (
              <DockIcon
                key={project.id}
                icon={project.icon}
                label={project.label}
                onClick={() => onProjectClick(project.id)}
                gradient={project.gradient}
              />
            ))}
            
            <div className="w-px h-12 bg-white/30 mx-1" />
            
            {systemApps.map((app) => (
              <DockIcon
                key={app.id}
                icon={app.icon}
                label={app.label}
                onClick={() => handleSystemAppClick(app.id)}
                gradient={app.gradient}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}