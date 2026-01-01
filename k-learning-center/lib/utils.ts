import { CategoryScore, Answer, TestDetail, Category } from '@/types';

/**
 * 검사 결과 점수를 계산합니다.
 */
export function calculateScores(
  test: TestDetail,
  categories: Category[],
  answers: Answer[]
): CategoryScore[] {
  const categoryScores: Record<string, { score: number; maxScore: number }> = {};

  // 카테고리별 초기화
  categories.forEach((category) => {
    categoryScores[category.id] = { score: 0, maxScore: 0 };
  });

  // 답변별 점수 계산
  answers.forEach((answer) => {
    const question = test.questions.find((q) => q.id === answer.questionId);
    if (question && categoryScores[question.category]) {
      categoryScores[question.category].score += answer.score;
      categoryScores[question.category].maxScore += Math.max(
        ...question.options.map((o) => o.score)
      );
    }
  });

  // 결과 배열 생성
  return categories.map((category) => ({
    categoryId: category.id,
    categoryName: category.name,
    score: categoryScores[category.id]?.score || 0,
    maxScore: categoryScores[category.id]?.maxScore || 0,
    percentage:
      categoryScores[category.id]?.maxScore > 0
        ? Math.round(
            (categoryScores[category.id].score /
              categoryScores[category.id].maxScore) *
              100
          )
        : 0,
  }));
}

/**
 * 클래스명을 조건부로 결합합니다.
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 숫자를 한국어 형식으로 포맷합니다.
 */
export function formatNumber(num: number): string {
  if (num >= 10000) {
    return `${(num / 10000).toFixed(1)}만`;
  }
  return num.toLocaleString();
}

/**
 * 로컬 스토리지에 데이터를 저장합니다.
 */
export function saveToLocalStorage<T>(key: string, data: T): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

/**
 * 로컬 스토리지에서 데이터를 불러옵니다.
 */
export function loadFromLocalStorage<T>(key: string): T | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
}
