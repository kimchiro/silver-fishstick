export interface TimelinePhase {
  name: string;
  duration: number; // in days
  color: string;
}

export interface Project {
  id: number;
  name: string;
  type: "project" | "bootcamp";
  startDate: string;
  endDate: string;
  startDay: number;
  totalDays: number;
  phases: TimelinePhase[];
  milestones: { day: number; label: string }[];
  role: string;
}

// 기준일: 2023.07.01 (day 0)
export const projects: Project[] = [
  // 교육 경험
  {
    id: 1,
    name: "위코드 백엔드 부트캠프",
    type: "bootcamp",
    startDate: "2023.07",
    endDate: "2023.10",
    startDay: 0,
    totalDays: 123, // 7월(31) + 8월(31) + 9월(30) + 10월(31) = 123일
    role: "수강생",
    phases: [
      { name: "JavaScript", duration: 40, color: "#F59E0B" },
      { name: "Node.js", duration: 40, color: "#10B981" },
      { name: "Database", duration: 43, color: "#3B82F6" }
    ],
    milestones: [
      { day: 40, label: "JS 완료" },
      { day: 80, label: "Node 완료" },
      { day: 123, label: "수료" }
    ]
  },
  {
    id: 2,
    name: "메일트리 온라인손편지",
    type: "project",
    startDate: "2023.09",
    endDate: "2025.01",
    startDay: 62, // 7월(31) + 8월(31) = 62
    totalDays: 489, // 2023.09~2025.01 (약 16개월)
    role: "풀스택 개발자",
    phases: [
      { name: "기획/설계", duration: 60, color: "#8B5CF6" },
      { name: "프론트엔드", duration: 150, color: "#3B82F6" },
      { name: "백엔드", duration: 150, color: "#10B981" },
      { name: "운영/개선", duration: 129, color: "#06B6D4" }
    ],
    milestones: [
      { day: 60, label: "설계 완료" },
      { day: 210, label: "프론트 완료" },
      { day: 360, label: "백엔드 완료" },
      { day: 489, label: "서비스 안정화" }
    ]
  },
  {
    id: 3,
    name: "코드캠프 프론트엔드 부트캠프",
    type: "bootcamp",
    startDate: "2024.01",
    endDate: "2024.06",
    startDay: 184, // 2023년 7~12월 = 184일
    totalDays: 182, // 1~6월 = 약 182일
    role: "수강생",
    phases: [
      { name: "React 기초", duration: 60, color: "#61DAFB" },
      { name: "상태관리", duration: 60, color: "#764ABC" },
      { name: "실전 프로젝트", duration: 62, color: "#10B981" }
    ],
    milestones: [
      { day: 60, label: "React 완료" },
      { day: 120, label: "Redux 완료" },
      { day: 182, label: "수료" }
    ]
  },
  {
    id: 4,
    name: "천태사 사찰 홈페이지",
    type: "project",
    startDate: "2024.03",
    endDate: "2024.05",
    startDay: 245, // 2023년 7~12월(184) + 2024년 1~2월(60) ≈ 244
    totalDays: 92, // 3~5월 = 약 92일
    role: "풀스택 개발자",
    phases: [
      { name: "기획", duration: 20, color: "#8B5CF6" },
      { name: "개발", duration: 50, color: "#3B82F6" },
      { name: "배포", duration: 22, color: "#10B981" }
    ],
    milestones: [
      { day: 20, label: "기획 완료" },
      { day: 70, label: "개발 완료" },
      { day: 92, label: "런칭" }
    ]
  },
  {
    id: 5,
    name: "인프런 UI/UX 부트캠프",
    type: "bootcamp",
    startDate: "2024.07",
    endDate: "2024.11",
    startDay: 366, // 2023년(184) + 2024년 1~6월(182) = 366
    totalDays: 153, // 7~11월 = 약 153일
    role: "수강생",
    phases: [
      { name: "Figma 기초", duration: 50, color: "#F24E1E" },
      { name: "UI 디자인", duration: 50, color: "#FF7262" },
      { name: "프로토타입", duration: 53, color: "#A259FF" }
    ],
    milestones: [
      { day: 50, label: "Figma 완료" },
      { day: 100, label: "UI 완료" },
      { day: 153, label: "수료" }
    ]
  },
  {
    id: 6,
    name: "제로베이스 UI/UX 부트캠프",
    type: "bootcamp",
    startDate: "2025.05",
    endDate: "2025.07",
    startDay: 670, // 2023년(184) + 2024년(366) + 2025년 1~4월(120) ≈ 670
    totalDays: 92, // 5~7월 = 약 92일
    role: "수강생",
    phases: [
      { name: "UX 리서치", duration: 30, color: "#F59E0B" },
      { name: "UI 심화", duration: 32, color: "#EC4899" },
      { name: "포트폴리오", duration: 30, color: "#8B5CF6" }
    ],
    milestones: [
      { day: 30, label: "리서치 완료" },
      { day: 62, label: "UI 완료" },
      { day: 92, label: "수료" }
    ]
  },
  {
    id: 7,
    name: "코드캠프 바이브코딩 부트캠프",
    type: "bootcamp",
    startDate: "2025.08",
    endDate: "2025.11",
    startDay: 762, // 2023년(184) + 2024년(366) + 2025년 1~7월(212) ≈ 762
    totalDays: 122, // 8~11월 = 약 122일
    role: "수강생",
    phases: [
      { name: "Cursor AI", duration: 40, color: "#06B6D4" },
      { name: "실전 코딩", duration: 42, color: "#3B82F6" },
      { name: "프로젝트", duration: 40, color: "#10B981" }
    ],
    milestones: [
      { day: 40, label: "AI 완료" },
      { day: 82, label: "코딩 완료" },
      { day: 122, label: "수료" }
    ]
  },
  {
    id: 8,
    name: "블로그 플래너",
    type: "project",
    startDate: "2025.09",
    endDate: "2025.10",
    startDay: 793, // 2023년(184) + 2024년(366) + 2025년 1~8월(243) ≈ 793
    totalDays: 61, // 9~10월 = 약 61일
    role: "풀스택 개발자",
    phases: [
      { name: "기획/디자인", duration: 20, color: "#8B5CF6" },
      { name: "개발", duration: 30, color: "#3B82F6" },
      { name: "테스트", duration: 11, color: "#10B981" }
    ],
    milestones: [
      { day: 20, label: "기획 완료" },
      { day: 50, label: "개발 완료" },
      { day: 61, label: "런칭" }
    ]
  },
  {
    id: 9,
    name: "도비AI 블로그 자동화",
    type: "project",
    startDate: "2025.10",
    endDate: "2025.11",
    startDay: 823, // 2023년(184) + 2024년(366) + 2025년 1~9월(273) ≈ 823
    totalDays: 61, // 10~11월 = 약 61일
    role: "풀스택 개발자",
    phases: [
      { name: "UX/UI 설계", duration: 20, color: "#F59E0B" },
      { name: "프론트엔드", duration: 25, color: "#3B82F6" },
      { name: "AI 연동", duration: 16, color: "#10B981" }
    ],
    milestones: [
      { day: 20, label: "설계 완료" },
      { day: 45, label: "개발 완료" },
      { day: 61, label: "서비스 중" }
    ]
  },
  {
    id: 10,
    name: "바꿀래 스킬트레이딩",
    type: "project",
    startDate: "2025.11",
    endDate: "2025.11",
    startDay: 853, // 2023년(184) + 2024년(366) + 2025년 1~10월(303) ≈ 853
    totalDays: 30, // 11월 = 30일
    role: "풀스택 개발자",
    phases: [
      { name: "기획/디자인", duration: 10, color: "#8B5CF6" },
      { name: "개발", duration: 15, color: "#3B82F6" },
      { name: "배포", duration: 5, color: "#10B981" }
    ],
    milestones: [
      { day: 10, label: "기획" },
      { day: 25, label: "개발" },
      { day: 30, label: "런칭" }
    ]
  },
  {
    id: 11,
    name: "포트폴리오 사이트",
    type: "project",
    startDate: "2025.11",
    endDate: "2025.12",
    startDay: 853,
    totalDays: 31,
    role: "풀스택 개발자",
    phases: [
      { name: "디자인", duration: 10, color: "#EC4899" },
      { name: "개발", duration: 15, color: "#3B82F6" },
      { name: "배포", duration: 6, color: "#10B981" }
    ],
    milestones: [
      { day: 10, label: "디자인 완료" },
      { day: 25, label: "개발 완료" },
      { day: 31, label: "런칭" }
    ]
  },
  {
    id: 12,
    name: "미래 프로젝트",
    type: "project",
    startDate: "2025.12",
    endDate: "2025.12",
    startDay: 884,
    totalDays: 30,
    role: "개발자",
    phases: [
      { name: "계획 중", duration: 30, color: "#9CA3AF" }
    ],
    milestones: [
      { day: 30, label: "계획 중" }
    ]
  }
];

export const TOTAL_DAYS = 884; // 2023.07 ~ 2025.11 (약 2년 5개월)

// 모든 월 데이터 (계산용)
export const ALL_MONTHS = [
  { label: "07", day: 0 },
  { label: "08", day: 31 },
  { label: "09", day: 62 },
  { label: "10", day: 92 },
  { label: "11", day: 123 },
  { label: "12", day: 153 },
  { label: "01", day: 184 },
  { label: "02", day: 215 },
  { label: "03", day: 244 },
  { label: "04", day: 275 },
  { label: "05", day: 305 },
  { label: "06", day: 336 },
  { label: "07", day: 366 },
  { label: "08", day: 397 },
  { label: "09", day: 428 },
  { label: "10", day: 458 },
  { label: "11", day: 489 },
  { label: "12", day: 519 },
  { label: "01", day: 550 },
  { label: "02", day: 581 },
  { label: "03", day: 609 },
  { label: "04", day: 640 },
  { label: "05", day: 670 },
  { label: "06", day: 701 },
  { label: "07", day: 731 },
  { label: "08", day: 762 },
  { label: "09", day: 793 },
  { label: "10", day: 823 },
  { label: "11", day: 854 },
  { label: "12", day: 884 }
];

// 표시할 월 (모든 월)
export const DISPLAY_MONTHS = ALL_MONTHS;

