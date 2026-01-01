'use client';

interface HeroSectionProps {
  totalParticipants: number;
}

export default function HeroSection({ totalParticipants }: HeroSectionProps) {
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-sm font-medium">
              지금까지 {formatNumber(totalParticipants)}명이 참여했어요
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            나를 알면
            <br className="sm:hidden" />
            <span className="text-yellow-300"> 공부가 쉬워진다</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            과학적인 학습 진단 검사로 나만의 학습 스타일을 발견하고
            <br className="hidden sm:block" />
            맞춤형 공부법을 찾아보세요
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-yellow-300 hover:text-primary-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              지금 바로 검사하기
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border border-white/30 hover:bg-white/20 transition-all">
              검사 둘러보기
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 sm:gap-16 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">15+</div>
              <div className="text-sm text-white/70">검사 종류</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">98%</div>
              <div className="text-sm text-white/70">만족도</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">3분</div>
              <div className="text-sm text-white/70">평균 소요시간</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
