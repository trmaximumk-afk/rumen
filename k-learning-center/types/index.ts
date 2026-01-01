// 검사 메타데이터 타입 (목록, 카테고리)
export * from './test';

// 검사 문항 및 결과 관련 타입

export interface Question {
  id: string;
  text: string;
  options: Option[];
  category: string;
}

export interface Option {
  id: string;
  text: string;
  score: number;
}

export interface TestDetail {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface TestResult {
  testId: string;
  answers: Answer[];
  scores: CategoryScore[];
  completedAt: Date;
}

export interface Answer {
  questionId: string;
  optionId: string;
  score: number;
}

export interface CategoryScore {
  categoryId: string;
  categoryName: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface User {
  id: string;
  name: string;
  role: 'student' | 'parent';
  testResults: TestResult[];
}

// 리커트 척도 문항 타입
export interface LikertQuestion {
  id: number;
  text: string;
  category?: string;
  reversed?: boolean; // 역채점 여부
}

// 리커트 척도 레이블
export interface LikertScale {
  value: number;
  label: string;
  shortLabel?: string;
}

// 기본 5점 리커트 척도
export const DEFAULT_LIKERT_SCALE: LikertScale[] = [
  { value: 1, label: '전혀 아니다', shortLabel: '전혀' },
  { value: 2, label: '아니다', shortLabel: '아니다' },
  { value: 3, label: '보통이다', shortLabel: '보통' },
  { value: 4, label: '그렇다', shortLabel: '그렇다' },
  { value: 5, label: '매우 그렇다', shortLabel: '매우' },
];

// 검사 결과 표시용 타입
export interface ScoreBar {
  label: string;
  score: number;
  maxScore: number;
  color?: string;
}

export interface ResultData {
  // 기본 정보
  typeName: string;
  typeCode?: string;
  emoji: string;
  summary: string;
  description: string;

  // 점수
  scores: ScoreBar[];

  // 상세 내용
  strengths: string[];
  tips: string[];
  cautions?: string[];

  // 프리미엄
  premium?: {
    available: boolean;
    price: number;
    features: string[];
  };

  // 메타
  testId: string;
  testTitle: string;
  completedAt: string;
}
