"use client"

import { useState } from "react";
import { X, Minus, Maximize2, ExternalLink, Github, Calendar, User, Briefcase, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Project } from "@/data/projects";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMysql, 
  SiExpress, 
  SiTypescript, 
  SiNextdotjs, 
  SiDocker, 
  SiGithub,
  SiAxios,
  SiNestjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiFigma,
  SiOpenai
} from "react-icons/si";

interface ProjectWindowProps {
  project: Project;
  onClose: () => void;
}

// 기술 스택 아이콘 매핑
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  const iconProps = { className: "w-8 h-8" };
  
  if (techLower.includes('react native')) return <SiReact {...iconProps} color="#61DAFB" />;
  if (techLower.includes('react')) return <SiReact {...iconProps} color="#61DAFB" />;
  if (techLower.includes('node')) return <SiNodedotjs {...iconProps} color="#339933" />;
  if (techLower.includes('mysql')) return <SiMysql {...iconProps} color="#4479A1" />;
  if (techLower.includes('express')) return <SiExpress {...iconProps} color="#000000" />;
  if (techLower.includes('typescript')) return <SiTypescript {...iconProps} color="#3178C6" />;
  if (techLower.includes('next')) return <SiNextdotjs {...iconProps} color="#000000" />;
  if (techLower.includes('docker')) return <SiDocker {...iconProps} color="#2496ED" />;
  if (techLower.includes('github')) return <SiGithub {...iconProps} color="#181717" />;
  if (techLower.includes('axios')) return <SiAxios {...iconProps} color="#5A29E4" />;
  if (techLower.includes('nest')) return <SiNestjs {...iconProps} color="#E0234E" />;
  if (techLower.includes('postgresql') || techLower.includes('postgres')) return <SiPostgresql {...iconProps} color="#4169E1" />;
  if (techLower.includes('supabase')) return <SiSupabase {...iconProps} color="#3ECF8E" />;
  if (techLower.includes('tailwind')) return <SiTailwindcss {...iconProps} color="#06B6D4" />;
  if (techLower.includes('figma')) return <SiFigma {...iconProps} color="#F24E1E" />;
  if (techLower.includes('openai') || techLower.includes('gpt')) return <SiOpenai {...iconProps} color="#412991" />;
  if (techLower.includes('emotion')) return <span className="text-2xl">💅</span>;
  
  // 기본 아이콘
  return <span className="text-xl font-bold text-gray-400">{tech.slice(0, 2).toUpperCase()}</span>;
};

export function ProjectWindow({ project, onClose }: ProjectWindowProps) {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 이미지 배열 (있으면 사용, 없으면 기본 이미지 하나만)
  const projectImages = project.images || [project.image];
  
  // 임시 데모 영상 URL (YouTube)
  const demoVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
    "https://www.youtube.com/embed/y6120QOlsfU",
    "https://www.youtube.com/embed/2Vv-BfVoq4g"
  ];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 mx-auto flex items-center justify-center p-6 bg-gray-1 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Window Title Bar - Apple Style */}
        <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/90 shadow-sm flex items-center justify-center group transition-all"
            >
              <X className="w-2 h-2 text-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/90 shadow-sm flex items-center justify-center group transition-all"
            >
              <Minus className="w-2 h-2 text-[#8B5A00] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/90 shadow-sm flex items-center justify-center group transition-all"
            >
              <Maximize2 className="w-2 h-2 text-[#006400] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-sm font-medium text-gray-700">
            {project.title}
          </div>
          <div className="w-16" />
        </div>

        {/* Window Content */}
        <div className="overflow-y-auto max-h-[calc(92vh-56px)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Hero Image Slider */}
          <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 group">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Only show if multiple images */}
            {projectImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {projectImages.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                  {currentImageIndex + 1} / {projectImages.length}
                </div>
              </>
            )}
          </div>

          <div className="p-10 space-y-10">
            {/* Header Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{project.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Action Buttons - Apple Style */}
            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo 방문
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl border border-gray-200/60 hover:border-gray-300/60 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub 저장소
              </a>
            </div>

            {/* Quick Info Cards - Apple Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1.5">프로젝트 기간</div>
                    <div className="font-semibold text-gray-900">{project.period}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-2xl border border-purple-100/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-1.5">나의 역할</div>
                    <div className="font-semibold text-gray-900">{project.role}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl border border-green-100/60 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1.5">프로젝트 타입</div>
                    <div className="font-semibold text-gray-900">{project.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Section - Apple Style */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">기술 스택</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="group flex flex-col items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-200/60 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                    title={tech}
                  >
                    <div className="flex items-center justify-center">
                      {getTechIcon(tech)}
                    </div>
                    <span className="text-xs text-gray-700 font-medium text-center">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities Section - Apple Style */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">담당한 작업</h3>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
                <ul className="space-y-4">
                  {project.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features Section - Apple Style */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">주요 기능</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index} 
                    onClick={() => setSelectedFeatureIndex(index)}
                    className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl border border-green-100/60 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md relative">
                        <span className="text-white font-bold text-sm group-hover:opacity-0 transition-opacity">{index + 1}</span>
                        <Play className="w-4 h-4 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Demo Popup - Nested Modal */}
      <AnimatePresence>
        {selectedFeatureIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedFeatureIndex(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Modal Header */}
              <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {project.features[selectedFeatureIndex]} - 데모 영상
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedFeatureIndex(null)}
                  className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Video Content */}
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={demoVideos[selectedFeatureIndex % demoVideos.length]}
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">기능 {selectedFeatureIndex + 1}:</span> {project.features[selectedFeatureIndex]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}