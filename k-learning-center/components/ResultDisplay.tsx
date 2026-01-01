'use client';

import { useState } from 'react';
import { ResultData } from '@/types';
import { cn } from '@/lib/utils';

interface ResultDisplayProps {
  result: ResultData;
  onRetry: () => void;
  onHome: () => void;
  shareUrl?: string;
}

export default function ResultDisplay({
  result,
  onRetry,
  onHome,
  shareUrl = typeof window !== 'undefined' ? window.location.href : '',
}: ResultDisplayProps) {
  const [copied, setCopied] = useState(false);

  // 링크 복사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // 카카오톡 공유
  const handleKakaoShare = () => {
    // 카카오톡 앱으로 공유 (모바일)
    const text = `${result.emoji} 나의 ${result.testTitle} 결과: ${result.typeName}\n${result.summary}`;

    // 모바일에서는 카카오톡 스킴 사용
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const kakaoScheme = `kakaolink://send?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
      window.location.href = kakaoScheme;
    } else {
      // PC에서는 카카오 공유 페이지로 이동
      const shareText = `${text}\n\n결과 보기: ${shareUrl}`;
      const kakaoShareUrl = `https://story.kakao.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
      window.open(kakaoShareUrl, '_blank', 'width=600,height=400');
    }
  };

  // 점수 퍼센트 계산
  const getPercentage = (score: number, maxScore: number) => {
    return Math.round((score / maxScore) * 100);
  };

  // 기본 색상 배열
  const defaultColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-cyan-500',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onHome}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">홈으로</span>
          </button>
          <span className="text-sm font-medium text-gray-900">{result.testTitle}</span>
          <div className="w-16" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Result Hero */}
        <section className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            검사 완료
          </div>

          <div className="text-7xl sm:text-8xl mb-6">{result.emoji}</div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {result.typeName}
          </h1>
          {result.typeCode && (
            <p className="text-sm text-gray-500 mb-4">유형 코드: {result.typeCode}</p>
          )}

          <p className="text-lg text-primary-600 font-medium mb-4">
            {result.summary}
          </p>

          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {result.description}
          </p>
        </section>

        {/* Score Chart */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-xl">📊</span>
            척도별 점수
          </h2>

          <div className="space-y-5">
            {result.scores.map((score, index) => {
              const percentage = getPercentage(score.score, score.maxScore);
              const color = score.color || defaultColors[index % defaultColors.length];

              return (
                <div key={score.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">{score.label}</span>
                    <span className="text-sm text-gray-500">
                      {score.score} / {score.maxScore}점
                      <span className="ml-2 font-medium text-gray-700">({percentage}%)</span>
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={cn('h-full rounded-full transition-all duration-1000 ease-out', color)}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strengths */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">💪</span>
            나의 강점
          </h2>

          <ul className="space-y-3">
            {result.strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{strength}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tips */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span>
            학습 팁
          </h2>

          <ul className="space-y-3">
            {result.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cautions */}
        {result.cautions && result.cautions.length > 0 && (
          <section className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-6">
            <h2 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              주의사항
            </h2>

            <ul className="space-y-2">
              {result.cautions.map((caution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-amber-500 mt-1">•</span>
                  <span className="text-amber-800 leading-relaxed">{caution}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Premium CTA */}
        {result.premium?.available && (
          <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <span>👑</span>
                  프리미엄 상세 리포트
                </h2>
                <p className="text-white/80 text-sm mb-3">
                  더 자세한 분석과 맞춤형 가이드를 받아보세요
                </p>
                <ul className="space-y-1">
                  {result.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-white/90">
                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="flex-shrink-0 px-6 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg">
                {result.premium.price.toLocaleString()}원 구매하기
              </button>
            </div>
          </section>
        )}

        {/* Share Buttons */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">🔗</span>
            결과 공유하기
          </h2>

          <div className="flex flex-wrap gap-3">
            {/* Kakao */}
            <button
              onClick={handleKakaoShare}
              className="flex items-center gap-2 px-4 py-3 bg-[#FEE500] text-[#3C1E1E] font-medium rounded-xl hover:bg-[#F5DC00] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.646 1.765 4.976 4.427 6.317-.136.476-.527 1.848-.603 2.143-.095.369.136.364.285.265.117-.077 1.863-1.235 2.622-1.737.422.061.856.093 1.269.093 5.523 0 10-3.463 10-7.691S17.523 3 12 3z"/>
              </svg>
              카카오톡
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className={cn(
                'flex items-center gap-2 px-4 py-3 font-medium rounded-xl transition-all',
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  복사됨!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  링크 복사
                </>
              )}
            </button>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="flex flex-col sm:flex-row gap-3 mb-8">
          <button
            onClick={onRetry}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-primary-600 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            다시 검사하기
          </button>

          <button
            onClick={onHome}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            홈으로 가기
          </button>
        </section>

        {/* Footer info */}
        <p className="text-center text-sm text-gray-400 mb-8">
          검사 완료: {result.completedAt}
        </p>
      </main>
    </div>
  );
}
