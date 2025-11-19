# 웹 개발자 포트폴리오

Next.js로 구축된 웹 개발자 포트폴리오입니다.

## 기술 스택

- **프레임워크**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: Radix UI
- **애니메이션**: Framer Motion

## 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
portfolio/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 홈페이지
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── ui/         # UI 컴포넌트 라이브러리
│   │   └── figma/      # Figma 관련 컴포넌트
│   └── styles/         # 글로벌 스타일
├── public/             # 정적 파일
└── next.config.js     # Next.js 설정
```

## 기능

- 🎨 모던한 Apple 스타일 UI 디자인 시스템
- 🚀 빠른 페이지 로딩 (Next.js SSR)
- 📱 반응형 디자인
- ✨ 부드러운 애니메이션 (Framer Motion)
- 📧 이메일 연락 기능
- 🎬 주요 기능 데모 영상 팝업
- 💼 프로젝트 상세 보기
- 🎯 기술 스택 로고 표시

## 배포

### Vercel로 배포하기

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kimchiro/silver-fishstick.git)

또는 수동으로:

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 `kimchiro/silver-fishstick` 선택
4. 자동으로 설정이 감지되고 배포 시작
5. 배포 완료 후 도메인 확인: `kimchiro-portfolio.cloud`

### 환경 변수 (선택사항)

배포 시 필요한 환경 변수가 있다면 Vercel 대시보드에서 설정:

```
NEXT_PUBLIC_SITE_URL=https://kimchiro-portfolio.cloud
```

## GitHub 저장소

🔗 **Repository**: [https://github.com/kimchiro/silver-fishstick.git](https://github.com/kimchiro/silver-fishstick.git)

## 라이선스

MIT
