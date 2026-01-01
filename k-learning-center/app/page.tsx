import Button from '@/components/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 헤더 섹션 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-600">
              K-Learning Center
            </h1>
            <nav className="flex gap-4">
              <a
                href="#tests"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                진단 검사
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                소개
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            나에게 맞는 학습 방법을
            <br />
            <span className="text-primary-600">진단 검사</span>로 알아보세요
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            학생과 학부모를 위한 맞춤형 학습 진단 검사 플랫폼입니다.
            과학적인 검사를 통해 효과적인 학습 전략을 찾아보세요.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">검사 시작하기</Button>
            <Button variant="outline" size="lg">
              자세히 알아보기
            </Button>
          </div>
        </div>
      </section>

      {/* 검사 목록 섹션 */}
      <section id="tests" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          진단 검사 목록
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>학습 스타일 진단</CardTitle>
              <CardDescription>
                시각형, 청각형, 운동형 중 나의 학습 스타일을 알아봅니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>약 10분 소요</span>
                <span>20문항</span>
              </div>
              <Button className="w-full">검사하기</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>학습 동기 검사</CardTitle>
              <CardDescription>
                학습에 대한 동기 수준과 유형을 진단합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>약 15분 소요</span>
                <span>30문항</span>
              </div>
              <Button className="w-full">검사하기</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>집중력 진단</CardTitle>
              <CardDescription>
                학습 시 집중력 수준과 방해 요인을 분석합니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>약 10분 소요</span>
                <span>25문항</span>
              </div>
              <Button className="w-full">검사하기</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 K-Learning Center. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
