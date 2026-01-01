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
