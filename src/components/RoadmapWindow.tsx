import { motion } from "framer-motion";
import { X, Minus, Plus, FolderOpen, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";
import { 
  projects, 
  TOTAL_DAYS, 
  ALL_MONTHS, 
  DISPLAY_MONTHS,
  type Project 
} from "@/data/loadmapData";

interface RoadmapWindowProps {
  onClose: () => void;
}

type YearFilter = '전체' | '2023' | '2024' | '2025';

export function RoadmapWindow({ onClose }: RoadmapWindowProps) {
  const [zoom, setZoom] = useState(100);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentDay] = useState(853); // 현재 진행 상황 (마지막 프로젝트 시작점)
  const [selectedYear, setSelectedYear] = useState<YearFilter>('전체');

  const handleZoomIn = () => setZoom(Math.min(zoom + 20, 200));
  const handleZoomOut = () => setZoom(Math.max(zoom - 20, 60));

  // 연도별 프로젝트 필터링
  const filteredProjects = projects.filter(project => {
    if (selectedYear === '전체') return true;
    const startYear = project.startDate.substring(0, 4);
    return startYear === selectedYear;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm overflow-x-hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-7xl max-h-[90vh] bg-white/80 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200/50"
      >
        {/* Window Title Bar */}
        <div className="bg-white/60 backdrop-blur-xl border-b border-gray-200/60 px-5 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-all shadow-sm"
            />
            <button className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-all shadow-sm" />
            <button className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-all shadow-sm" />
          </div>
          
          <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <FolderOpen className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-semibold text-gray-700">개발 여정 타임라인 (2023.07 - 2025.11)</span>
          </div>

          <div className="flex items-center gap-1">
            <button 
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-gray-200/60 rounded-md transition-all"
            >
              <ZoomOut className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-xs text-gray-500 w-12 text-center font-medium">{zoom}%</span>
            <button 
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-gray-200/60 rounded-md transition-all"
            >
              <ZoomIn className="w-4 h-4 text-gray-600" />
            </button>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <button className="p-1.5 hover:bg-gray-200/60 rounded-md transition-all">
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-200/60 rounded-md transition-all">
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-200/60 rounded-md transition-all"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white/50 border-b border-gray-200/60 px-6 py-3 flex items-center justify-between flex-shrink-0">
          {/* 연도 필터 - 좌측 */}
          <div className="flex items-center gap-2">
            {(['전체', '2023', '2024', '2025'] as YearFilter[]).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* 프로젝트/부트캠프 개수 - 우측 */}
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm" />
              <span className="font-medium">프로젝트 {filteredProjects.filter(p => p.type === 'project').length}개</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm" />
              <span className="font-medium">부트캠프 {filteredProjects.filter(p => p.type === 'bootcamp').length}개</span>
            </span>
          </div>
        </div>

        {/* Main Timeline Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-gray-50/50 to-white">
          <div className="p-6" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left', width: `${100 / (zoom / 100)}%` }}>
            {/* Header - Month Labels */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-48 flex-shrink-0" />
                <div className="flex-1 flex relative" style={{ height: '30px' }}>
                  {DISPLAY_MONTHS.map((month, index) => {
                    const percentage = (month.day / TOTAL_DAYS) * 100;
                    
                    return (
                      <div
                        key={index}
                        className="absolute top-0 text-xs text-gray-500 font-medium"
                        style={{ left: `${percentage}%` }}
                      >
                        {month.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Timeline Grid */}
            <div className="space-y-3">
              {filteredProjects.map((project, projectIndex) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: projectIndex * 0.05, duration: 0.4 }}
                  className="flex items-center"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Label */}
                  <div className="w-48 flex-shrink-0 pr-4">
                    <motion.div
                      animate={{
                        scale: hoveredProject === project.id ? 1.02 : 1
                      }}
                      className={`border rounded-xl p-3 backdrop-blur-sm ${
                        project.type === 'bootcamp' 
                          ? 'bg-purple-50/80 border-purple-200/60 shadow-sm hover:shadow-md' 
                          : 'bg-blue-50/80 border-blue-200/60 shadow-sm hover:shadow-md'
                      } transition-all`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-semibold text-gray-800 mb-0.5 truncate">{project.name}</h3>
                          <p className="text-xs text-gray-600 font-medium">{project.role}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${
                          project.type === 'bootcamp'
                            ? 'bg-purple-200/80 text-purple-700'
                            : 'bg-blue-200/80 text-blue-700'
                        }`}>
                          {Math.round(project.totalDays / 30)}개월
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Bar */}
                  <div className="flex-1 relative" style={{ height: '48px' }}>
                    {/* Background Grid */}
                    <div className="absolute inset-0">
                      {ALL_MONTHS.map((month, i) => {
                        const position = (month.day / TOTAL_DAYS) * 100;
                        return (
                          <div
                            key={i}
                            className="absolute top-0 bottom-0 border-r border-gray-200"
                            style={{ left: `${position}%`, opacity: 0.3 }}
                          />
                        );
                      })}
                    </div>

                    {/* Project Timeline Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(project.totalDays / TOTAL_DAYS) * 100}%` }}
                      transition={{ delay: projectIndex * 0.05 + 0.2, duration: 0.6, ease: "easeOut" }}
                      className="absolute top-1/2 -translate-y-1/2 h-9 rounded-xl shadow-md overflow-x-hidden"
                      style={{
                        left: `${(project.startDay / TOTAL_DAYS) * 100}%`,
                      }}
                    >
                      {/* Phases */}
                      <div className="flex h-full">
                        {project.phases.map((phase, phaseIndex) => {
                          const phaseWidth = (phase.duration / project.totalDays) * 100;
                          
                          return (
                            <motion.div
                              key={phaseIndex}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{
                                delay: projectIndex * 0.05 + 0.3 + phaseIndex * 0.05,
                                duration: 0.3,
                                ease: "easeOut"
                              }}
                              className="relative group cursor-pointer"
                              style={{
                                width: `${phaseWidth}%`,
                                backgroundColor: phase.color,
                                transformOrigin: 'left'
                              }}
                            >
                              {/* Phase Label */}
                              <div className="absolute inset-0 flex items-center justify-center px-1">
                                <span className="text-xs text-white truncate opacity-0 group-hover:opacity-100 transition-opacity">
                                  {phase.name}
                                </span>
                              </div>

                              {/* Hover Tooltip */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                  {phase.name} ({phase.duration}일)
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Milestones */}
                    {project.milestones.map((milestone, mIndex) => {
                      const milestonePosition = ((project.startDay + milestone.day) / TOTAL_DAYS) * 100;
                      
                      return (
                        <motion.div
                          key={mIndex}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: projectIndex * 0.05 + 0.5 + mIndex * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="absolute top-0 group"
                          style={{
                            left: `${milestonePosition}%`,
                            transform: 'translateX(-50%)'
                          }}
                        >
                          {/* Diamond Marker */}
                          <div className="relative">
                            <div className="w-3 h-3 bg-blue-500 rotate-45 border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform" />
                            
                            {/* Milestone Label */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-xl font-medium">
                                {milestone.label}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Current Day Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute pointer-events-none"
              style={{
                left: `calc(12rem + ${(730 / TOTAL_DAYS) * 100}%)`,
                top: '2rem',
                bottom: '6rem',
                zIndex: 10
              }}
            >
              <div className="relative h-full">
                <div className="absolute top-0 h-full w-0.5 bg-red-500" style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }} />
                <div className="absolute -top-8 -translate-x-1/2">

                </div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-10 mb-4 flex items-center justify-center gap-8 text-xs text-gray-600"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 bg-blue-500 rotate-45 shadow-sm" />
                <span className="font-medium">마일스톤</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-3.5 bg-gradient-to-r from-red-500 via-orange-500 via-blue-500 to-green-500 rounded-md shadow-sm" />
                <span className="font-medium">프로젝트 단계</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-0.5 h-5 bg-red-500 shadow-sm" />
                <span className="font-medium">현재 진행 상황</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}