import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '웹 개발자 포트폴리오 | Kimchiro',
  description: '사용자 경험을 최우선으로 생각하는 풀스택 개발자 포트폴리오. React, TypeScript, Node.js를 활용하여 혁신적이고 확장 가능한 웹 애플리케이션을 만듭니다.',
  metadataBase: new URL('https://kimchiro-portfolio.cloud'),
  keywords: ['웹 개발자', '포트폴리오', 'React', 'Next.js', 'TypeScript', 'Node.js', '풀스택 개발자'],
  authors: [{ name: 'Kimchiro' }],
  openGraph: {
    title: '웹 개발자 포트폴리오 | Kimchiro',
    description: '사용자 경험을 최우선으로 생각하는 풀스택 개발자',
    url: 'https://kimchiro-portfolio.cloud',
    siteName: 'Kimchiro Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '웹 개발자 포트폴리오 | Kimchiro',
    description: '사용자 경험을 최우선으로 생각하는 풀스택 개발자',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

