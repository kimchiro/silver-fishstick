"use client"

import { useState } from "react";
import { MacMenuBar } from "@/components/MacMenuBar";
import { Dock } from "@/components/Dock";
import { ProjectWindow } from "@/components/ProjectWindow";
import { MailWindow } from "@/components/MailWindow";
import { RoadmapWindow } from "@/components/RoadmapWindow";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { projects } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleMailClick = () => {
    setIsMailOpen(true);
  };

  const handleRoadmapClick = () => {
    setIsRoadmapOpen(true);
  };

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30" />
      
      <MacMenuBar />

      {/* Desktop Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-6xl mb-6 drop-shadow-lg">안녕하세요 👋</h1>
            <h2 className="text-4xl mb-6 drop-shadow-lg">웹 개발자 포트폴리오</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-4 text-xl drop-shadow-lg"
          >
            <p>
              사용자 경험을 최우선으로 생각하는 풀스택 개발자입니다.
            </p>
            <p>
              React, TypeScript, Node.js를 활용하여
            </p>
            <p>
              혁신적이고 확장 가능한 웹 애플리케이션을 만듭니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-lg opacity-90"
          >
            <p>아래 Dock의 앱 아이콘을 클릭해 프로젝트를 확인하세요</p>
          </motion.div>
        </motion.div>
      </div>

      <Dock onProjectClick={handleProjectClick} onMailClick={handleMailClick} onRoadmapClick={handleRoadmapClick} />

      <AnimatePresence>
        {currentProject && (
          <ProjectWindow
            project={currentProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {isMailOpen && (
          <MailWindow onClose={() => setIsMailOpen(false)} />
        )}
        {isRoadmapOpen && (
          <RoadmapWindow onClose={() => setIsRoadmapOpen(false)} />
        )}
      </AnimatePresence>

      <Toaster />
    </div>
  );
}

