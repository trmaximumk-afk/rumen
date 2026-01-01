// 검사 관련 타입 정의

/** 대상 학년 */
export type TargetAudience = '초등' | '중등' | '고등' | '전체';

/** 검사 태그 */
export type TestTag = 'NEW' | 'BEST' | '인기' | '추천' | '무료' | '프리미엄';

/** 카테고리 */
export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  order: number;
}

/** 프리미엄 리포트 정보 */
export interface PremiumInfo {
  available: boolean;
  price: number;
  features: string[];
}

/** 검사 정보 */
export interface Test {
  id: string;
  title: string;
  emoji: string;
  shortDesc: string;
  description: string;

  // 분류
  category: string;
  tags: TestTag[];
  targetAudience: TargetAudience[];

  // 검사 정보
  questionCount: number;
  timeMinutes: number;
  participants: number;

  // 상태
  createdAt: string;
  isNew: boolean;
  isActive: boolean;

  // 연관 검사
  relatedTests: string[];

  // 프리미엄 정보
  premium: PremiumInfo;
}

/** 검사 목록 응답 */
export interface TestsData {
  tests: Test[];
  lastUpdated: string;
}

/** 카테고리 목록 응답 */
export interface CategoriesData {
  categories: Category[];
}

/** 검사 필터 옵션 */
export interface TestFilter {
  category?: string;
  targetAudience?: TargetAudience;
  tags?: TestTag[];
  isActive?: boolean;
}

/** 검사 결과 요약 */
export interface TestResultSummary {
  testId: string;
  userId: string;
  completedAt: string;
  score: number;
  resultType: string;
  resultTitle: string;
}
