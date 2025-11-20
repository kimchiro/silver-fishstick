export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images?: string[]; // 슬라이드용 이미지 배열
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  period: string;
  role: string;
  responsibilities: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "메일트리 온라인손편지 우편대행서비스",
    description: "온라인 손편지·우편대행 서비스",
    fullDescription: "온라인에서 손편지를 작성하고 실제 우체국을 통해 발송할 수 있는 온라인 손편지·우편대행 서비스입니다. 사용자는 편지 작성, 사진 첨부, 봉투·엽서 선택, 결제 기능을 이용해 간편하게 편지를 주문할 수 있으며, 마이페이지에서 주문 내역과 배송 상태를 조회할 수 있습니다.",
    image: "/images/mailtree/mailtree-main.png",
    images: [
      "/images/mailtree/mailtree-main.png",
      "/images/mailtree/mailtree-letter.png",
      "/images/mailtree/mailtree-product.png",
      "/images/mailtree/mailtree-appstore.png"
    ],
    technologies: ["React", "React Native", "Node.js", "Axios", "MySQL", "Express", "Emotion", "TypeScript", "Next.js", "Docker", "AWS", "Nest.JS", "GitHub"],
    liveUrl: "https://mailtree.co.kr/",
    githubUrl: "https://github.com/MailMovers",
    period: "2023.09 - 2024.01 (1년4개월)",
    role: "풀스택 개발자",
    responsibilities: [
      "Frontend: 편지쓰기·결제·상품·메인 UI 개발",
      "Frontend: 서비스 UX 구조 개선",
      "Backend: 마이페이지·어드민 REST API 개발",
      "Backend: ERD 기반 DB 구조 설계",
      "활용기술 - Frontend: React, TypeScript, Emotion",
      "활용기술 - Backend: Node.js, Express, MySQL",
      "활용기술 - 기타: Figma, BDDiagram,",
      "성과: 앱스토어·플레이스토어 1년 이상 안정적 운영",
      "성과: 총 회원 737명 / 최근 30일 가입자 60명",
      "성과: 최근 30일 매출 1,603,896원"
    ],
    features: [
      "손편지 작성 및 실시간 미리보기",
      "사진 첨부 및 편집 기능",
      "다양한 봉투·엽서 디자인 선택",
      "간편 결제 시스템 연동",
      "마이페이지 주문 내역 조회",
      "실시간 배송 상태 추적"
    ]
  },
  {
    id: 2,
    title: "천태사 사찰공식 홈페이지",
    description: "사찰 정보 및 법회 일정 안내 웹사이트",
    fullDescription: "천태사 소개, 법회 일정, 갤러리, 공지사항을 온라인에서 확인할 수 있는 공식 웹사이트입니다. 사찰 정보 제공, 사진·소식 업데이트, 모바일 접근성 향상 등 사용자 중심의 구조로 제작되었으며 관리자가 손쉽게 콘텐츠를 등록·관리할 수 있도록 갤러리 및 주요 소식 API를 구축했습니다.",
    image: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: ["Next.js", "React", "TypeScript", "Styled-Components", "Tailwind CSS", "PostgreSQL", "Supabase", "AWS", "Nest.JS", "GitHub"],
    liveUrl: "https://www.cheontaesa.com/",
    githubUrl: "https://github.com/chowalcamp",
    period: "2024.03 - 2024.05 (3개월)",
    role: "풀스택 개발자",
    responsibilities: [
      "Next.js 기반 서버 사이드 렌더링 웹사이트 구축",
      "Supabase와 PostgreSQL을 활용한 데이터베이스 설계",
      "관리자 CMS 기능 개발 (갤러리, 공지사항 관리)",
      "반응형 디자인 및 모바일 최적화",
      "Nest.JS 기반 백엔드 API 개발"
    ],
    features: [
      "사찰 소개 및 역사 페이지",
      "법회 일정 캘린더",
      "갤러리 및 사진 관리",
      "공지사항 게시판",
      "관리자 콘텐츠 관리 시스템",
      "모바일 반응형 디자인"
    ]
  },
  {
    id: 3,
    title: "도비AI",
    description: "블로그 운영 자동화 AI 서비스",
    fullDescription: "도비AI는 블로그 운영 자동화를 목표로 설정하여, 키워드 추천, 글 작성, 콘텐츠 분석 등 다양한 기능을 제공하는 서비스입니다. 초기 서비스 구조를 설계한 UX/UI 프로토타입입니다. Figma와 MakeAI를 활용해 페이지 흐름도, 레이아웃 설계, 사용 시나리오, 설정 화면 등을 설계하여 팀이 서비스 기능과 방향성을 빠르게 검증할 수 있는 기반을 마련했습니다.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: ["Next.js", "React", "TypeScript", "Styled-Components", "Tailwind CSS", "PostgreSQL", "Supabase", "GitHub"],
    liveUrl: "https://production-dobby.vercel.app/generator",
    githubUrl: "https://github.com/devDingco/dobby",
    period: "2024.06 - 2024.08 (3개월)",
    role: "프론트엔드 개발자 & UX/UI 디자이너",
    responsibilities: [
      "Figma를 활용한 서비스 UX/UI 프로토타입 설계",
      "Next.js 기반 프론트엔드 개발",
      "AI 콘텐츠 생성 기능 통합",
      "키워드 추천 알고리즘 구현",
      "사용자 시나리오 및 페이지 플로우 설계"
    ],
    features: [
      "AI 기반 키워드 추천",
      "자동 콘텐츠 생성",
      "블로그 콘텐츠 분석",
      "포스팅 일정 관리",
      "SEO 최적화 제안",
      "사용자 맞춤 설정"
    ]
  },
  {
    id: 4,
    title: "블로그 플래너",
    description: "블로그 운영을 위한 플래너 서비스",
    fullDescription: "블로그 플래너는 블로그 운영을 위한 플래너 서비스입니다. 블로그를 운영하며 필요한 키워드를 추천하고, 콘텐츠를 분류하여 자신만의 블로그 운영 플랜을 세울 수 있습니다.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: ["Next.js", "React", "TypeScript", "Styled-Components", "Tailwind CSS", "PostgreSQL", "Supabase", "GitHub"],
    liveUrl: "https://production-dobby.vercel.app/planner",
    githubUrl: "https://github.com/devDingco/dobby",
    period: "2024.06 - 2024.08 (3개월)",
    role: "프론트엔드 개발자",
    responsibilities: [
      "Next.js 기반 웹 애플리케이션 개발",
      "블로그 플래너 UI/UX 구현",
      "키워드 관리 시스템 개발",
      "콘텐츠 분류 및 태깅 기능 구현",
      "Supabase 데이터베이스 연동"
    ],
    features: [
      "블로그 포스팅 계획 수립",
      "키워드 추천 및 관리",
      "콘텐츠 카테고리 분류",
      "일정 캘린더 뷰",
      "작성 진행률 추적",
      "통계 및 분석 대시보드"
    ]
  },
  {
    id: 5,
    title: "바꿀래 - 스킬트레이딩 커뮤니티 플랫폼",
    description: "재능과 취미를 기술로 교환하는 커뮤니티",
    fullDescription: "재능과 취미를 금전이 아닌 기술로 교환하는 커뮤니티 플랫폼입니다. 사용자는 자신이 가진 능력과 필요한 능력을 등록하여 교환 상대를 찾을 수 있으며, React·Next.js 기반 UI와 NestJS·Supabase 기반 REST API로 실시간 매칭 및 게시글 관리 기능을 제공합니다.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    technologies: ["React", "Next.js", "TypeScript", "Styled-Components", "Tailwind CSS", "PostgreSQL", "Supabase", "Nest.JS", "GitHub"],
    liveUrl: "https://www.bakkullae.com/",
    githubUrl: "https://github.com/bakkullae",
    period: "2024.09 - 2024.11 (3개월)",
    role: "풀스택 개발자",
    responsibilities: [
      "React/Next.js 기반 프론트엔드 개발",
      "NestJS 백엔드 API 설계 및 구현",
      "실시간 매칭 알고리즘 개발",
      "게시글 및 사용자 관리 시스템 구축",
      "Supabase를 활용한 데이터베이스 관리"
    ],
    features: [
      "재능 교환 게시글 작성",
      "스킬 매칭 시스템",
      "실시간 채팅 기능",
      "사용자 프로필 관리",
      "리뷰 및 평가 시스템",
      "커뮤니티 게시판"
    ]
  }
];

