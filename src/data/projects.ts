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
  designUrl?: string; // 초기 디자인 URL (선택적)
  erdUrl?: string; // ERD 다이어그램 URL (선택적)
  period: string;
  role: string;
  projectType: string;
  responsibilities: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "메일트리 온라인손편지 우편대행서비스",
    description: "온라인 손편지·우편대행 서비스",
    fullDescription: "온라인에서 손편지를 작성하고 실제 우체국을 통해 발송할 수 있는 온라인 손편지·우편대행 서비스입니다. 사용자는 편지 작성, 사진 첨부, 봉투·엽서 선택, 결제 기능을 이용해 간편하게 편지를 주문할 수 있으며, 마이페이지에서 주문 내역과 배송 상태를 조회할 수 있습니다.",
    image: "/images/mailtree/mailtree-hero.png",
    images: [
      "/images/mailtree/mailtree-hero.png",
      "/images/mailtree/mailtree-main.png",
      "/images/mailtree/mailtree-letter.png",
      "/images/mailtree/mailtree-product.png",
      "/images/mailtree/mailtree-appstore.png"
    ],
    technologies: ["React", "React Native", "Node.js", "Axios", "MySQL", "Express", "Emotion", "TypeScript", "Next.js", "Docker", "AWS", "Nest.JS", "GitHub"],
    liveUrl: "https://mailtree.co.kr/",
    githubUrl: "https://github.com/MailMovers",
    erdUrl: "https://dbdiagram.io/d/mail-tree-65080d7a02bd1c4a5ec3c478",
    period: "2023.09 - 2025.01 (1년4개월)",
    role: "풀스택 개발자, 기획자",
    projectType: "B2C",
    responsibilities: [
      "Frontend: 편지쓰기·결제·상품·메인 UI 개발",
      "Frontend: 서비스 UX 구조 개선",
      "Backend: 마이페이지·어드민 REST API 개발",
      "Backend: ERD 기반 DB 구조 설계",
      "활용기술 - Frontend: React, TypeScript, Emotion",
      "활용기술 - Backend: Node.js, Express, MySQL",
      "활용기술 - 기타: Figma, DBDiagram, GitHub",
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
    image: "/images/cheontaesa/cheontaesa-hero.png",
    technologies: ["Next.js", "React", "TypeScript", "Styled-Components", "Tailwind CSS", "PostgreSQL", "AWS", "Nest.JS", "GitHub"],
    liveUrl: "https://www.cheontaesa.com/",
    githubUrl: "https://github.com/chowalcamp",
    erdUrl: "https://dbdiagram.io/d/천태사-6927f464a0c4ebcc2befec32",
    period: "2024.03 - 2024.06",
    role: "풀스택 개발자",
    projectType: "Corporate Site",
    responsibilities: [
      "Next.js 기반 서버 사이드 렌더링 웹사이트 구축",
      "PostgreSQL을 활용한 데이터베이스 설계",
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
    image: "/images/generator/generator-hero-1.png",
      images: [
      "/images/generator/generator-hero-1.png",
      "/images/generator/generator-hero-2.png",
      "/images/generator/generator-hero-3.png",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Styled-Components", "Tailwind CSS", "PostgreSQL", "Supabase", "GitHub"],
    liveUrl: "https://production-dobby.vercel.app/generator",
    githubUrl: "https://github.com/devDingco/dobby",
    designUrl: "https://reply-heaps-15554806.figma.site/",
    erdUrl: "https://dbdiagram.io/d/blog-663cbc7d9e85a46d5569b9ae",
    period: "2025.10 - 2025.11 (1개월) 개발중",
    role: "풀스택 개발자, 기획, 디자인",
    projectType: "B2C",
    responsibilities: [
      "Figma를 활용한 서비스 UX/UI 프로토타입 설계",
      "Next.js 기반 프론트엔드 개발",
      "AI 콘텐츠 생성 기능 통합",
      "사용자 시나리오 및 페이지 플로우 설계"
    ],
    features: [
      "자동 콘텐츠 생성",
      "블로그 콘텐츠 분석",
      "포스팅 일정 관리",
      "SEO 최적화 제안",
      "사용자 맞춤 설정"
    ]
  },
  {
    id: 4,
    title: "블로그플래너",
    description: "블로그 운영을 위한 플래너 서비스",
    fullDescription: "블로그 플래너는 블로그 운영을 위한 플래너 서비스입니다. 블로그를 운영하며 필요한 키워드를 추천하고, 콘텐츠를 분류하여 자신만의 블로그 운영 플랜을 세울 수 있습니다.",
    image: "/images/planner/planner-hero-1.png",
    technologies: ["Next.js", "React", "TypeScript", "Styled-Components", "Tailwind CSS", "PostgreSQL", "Supabase", "GitHub"],
    liveUrl: "https://production-dobby.vercel.app/planner",
    githubUrl: "https://github.com/devDingco/dobby",
    designUrl: "https://frog-cedar-70306186.figma.site/",
    erdUrl: "https://dbdiagram.io/d/blog-663cbc7d9e85a46d5569b9ae",
    period: "2025.09 - 2025.10 (1개월) 개발중",
    role: "풀스택 개발자, 기획, 디자인",
    projectType: "B2C",
    responsibilities: [
      "Next.js 기반 웹 애플리케이션 개발",
      "블로그 플래너 UI/UX 구현",
      "키워드 관리 시스템 개발",
      "콘텐츠 분류 및 태깅 기능 구현",
      "Supabase 데이터베이스 연동 및 관리 예정"
    ],
    features: [
      "블로그 포스팅 계획 수립",
      "콘텐츠 카테고리 분류",
      "완료 컨탠츠 관리",
      "작성 진행률 추적",
      "통계 및 분석 대시보드",
    ]
  },
  {
    id: 5,
    title: "Plan-A",
    description: "불평등한 결혼정보, 아는사람만 합리적인 결혼은 사라져야한다라는 생각으로 시작한 나만에 AI웨딩플래너 프로젝트입니다.",
    fullDescription: "사용자로부터 이름과 연락처 결혼예정일, 선호 지역 총 예산 정보를 입력받아, 웨딩 플래너 추천 서비스를 제공합니다.",
    image: "/images/plan-a/plan-a-hero-1.png",
    technologies: ["React", "TypeScript", "Nativewind", "Style-Sheet", "PostgreSQL", "Nest.JS","TYPEORM", "OPENAI", "GitHub", "Figma", "DBDiagram"],
    liveUrl: "https://view-glory-27028433.figma.site/",
    githubUrl: "https://github.com/dacon-winner/planA",
    designUrl: "https://view-glory-27028433.figma.site/",
    erdUrl: "https://dbdiagram.io/d/Plan_A-692578457d9416ddffff4073",
    period: "2025.11 - 2025.11 (1개월) 개발중",
    role: "풀스택 개발자, 기획, 디자인",
    projectType: "해커톤",
    responsibilities: [
      "Figma를 활용한 서비스 UX/UI 프로토타입 설계",
      "ReactNative Expo 기반 앱 초기 구조 설계",
      "Nest.JS 기반 백엔드 API 개발",
      "TypeORM을 활용한 데이터베이스 설계",
      "PostgreSQL을 활용한 데이터베이스 설계",
      "DBDiagram을 활용한 ERD 설계",
      "OPENAI를 활용한 웨딩 플래너 추천 기능 개발",
      "사용자 시나리오 및 페이지 플로우 설계",
      "사용자 API 구현",
      "사용자 인증 구현",
    ],
    features: [
      "사용자 맞춤 웨딩 플래너 추천",
      "웨딩 플래너 추천 기능",
      "지도 기반 업체 탐색",
      "웨딩업체 정보 제공",
      "웨딩업체 예산 계산",
      "웨딩업체 리뷰 및 평가",
      "웨딩업체 예약 기능",
    ]
  }
];

