import { Test, Category } from '@/types';
import testsData from '@/data/tests.json';
import categoriesData from '@/data/categories.json';
import HeroSection from '@/components/HeroSection';
import TestCard from '@/components/TestCard';
import CategoryCard from '@/components/CategoryCard';
import TestList from '@/components/TestList';

// Type assertion for JSON imports
const tests = testsData.tests as Test[];
const categories = categoriesData.categories as Category[];

// Calculate total participants
const totalParticipants = tests.reduce((sum, test) => sum + test.participants, 0);

// Filter NEW tests
const newTests = tests.filter((test) => test.isNew);

// Get top 3 by participants
const topTests = [...tests]
  .sort((a, b) => b.participants - a.participants)
  .slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-primary-600">
              K-Learning Center
            </h1>
            <nav className="hidden sm:flex gap-6">
              <a href="#new" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                NEW
              </a>
              <a href="#popular" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                인기검사
              </a>
              <a href="#categories" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                카테고리
              </a>
              <a href="#all" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                전체보기
              </a>
            </nav>
            <button className="sm:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <HeroSection totalParticipants={totalParticipants} />

      {/* 2. NEW Tests Section */}
      {newTests.length > 0 && (
        <section id="new" className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                NEW
              </span>
              <h2 className="text-2xl font-bold text-gray-900">새로 나온 검사</h2>
            </div>

            {/* Horizontal scroll container */}
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              {newTests.map((test) => (
                <TestCard key={test.id} test={test} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Popular Tests TOP 3 */}
      <section id="popular" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🔥</span>
            <h2 className="text-2xl font-bold text-gray-900">인기 검사 TOP 3</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTests.map((test, index) => (
              <div key={test.id} className="relative">
                {/* Rank badge */}
                <div className="absolute -top-3 -left-3 z-10 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                <TestCard test={test} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section id="categories" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">카테고리별 검사</h2>

          {/* Category cards - horizontal scroll on mobile */}
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:overflow-visible scrollbar-hide">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. All Tests Section */}
      <section id="all" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">전체 검사 목록</h2>
          <TestList tests={tests} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">K-Learning Center</h3>
              <p className="text-gray-400 text-sm">
                나를 알면 공부가 쉬워진다.<br />
                학습 진단 검사 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">검사</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">전체 검사</a></li>
                <li><a href="#" className="hover:text-white transition-colors">인기 검사</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NEW 검사</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용가이드</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">법적 고지</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; 2024 K-Learning Center. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
