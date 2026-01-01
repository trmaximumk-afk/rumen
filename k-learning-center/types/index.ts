// 검사 관련 타입 정의

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

export interface Test {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
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
