"use client"

import { Wifi, Battery, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuDropdownProps {
  items: string[];
  onClose: () => void;
}

function MenuDropdown({ items, onClose }: MenuDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-200 py-1 min-w-[200px] z-50"
      onMouseLeave={onClose}
    >
      {items.map((item, index) => (
        <button
          key={index}
          className="w-full text-left px-4 py-1.5 hover:bg-blue-500 hover:text-white text-gray-800 text-sm transition-colors"
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}

export function MacMenuBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      weekday: "short"
    });
  };

  const menus = {
    "파일": ["새로운 Finder 윈도우", "새로운 폴더", "새로운 스마트 폴더", "열기", "닫기"],
    "편집": ["실행 취소", "다시 실행", "잘라내기", "복사", "붙여넣기", "모두 선택"],
    "보기": ["아이콘으로 보기", "목록으로 보기", "칼럼으로 보기", "갤러리로 보기"],
    "이동": ["뒤로", "앞으로", "둘러싸는 폴더", "데스크탑", "문서", "다운로드"],
    "윈도우": ["최소화", "확대/축소", "모든 윈도우 앞으로 가져오기"]
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-black/20 backdrop-blur-xl border-b border-white/10 z-50 px-4 flex items-center justify-between text-white text-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
        </div>
        <span className="font-semibold">Finder</span>
        
        {Object.keys(menus).map((menuName) => (
          <div key={menuName} className="relative">
            <button
              className={`hover:bg-white/20 px-2 py-0.5 rounded transition-colors ${
                activeMenu === menuName ? "bg-white/20" : ""
              }`}
              onMouseEnter={() => setActiveMenu(menuName)}
            >
              {menuName}
            </button>
            <AnimatePresence>
              {activeMenu === menuName && (
                <MenuDropdown
                  items={menus[menuName as keyof typeof menus]}
                  onClose={() => setActiveMenu(null)}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Search className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
        <span>{formatDate(currentTime)}</span>
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
}