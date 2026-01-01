'use client';

import { useState, useCallback, useEffect } from 'react';
import { LikertQuestion, LikertScale, DEFAULT_LIKERT_SCALE } from '@/types';
import { cn } from '@/lib/utils';

interface TestEngineProps {
  questions: LikertQuestion[];
  onComplete: (answers: Record<number, number>) => void;
  onBack: () => void;
  scale?: LikertScale[];
  title?: string;
}

export default function TestEngine({
  questions,
  onComplete,
  onBack,
  scale = DEFAULT_LIKERT_SCALE,
  title = '검사 진행',
}: TestEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === questions.length - 1;
  const hasCurrentAnswer = answers[currentQuestion.id] !== undefined;

  // 선택지 클릭 핸들러
  const handleSelect = useCallback(
    (value: number) => {
      if (isAnimating) return;

      // 답변 저장
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: value,
      }));

      // 마지막 문항이 아니면 자동으로 다음 문항으로 이동
      if (!isLastQuestion) {
        setIsAnimating(true);
        setDirection('next');

        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsAnimating(false);
        }, 300);
      }
    },
    [currentQuestion.id, isLastQuestion, isAnimating]
  );

  // 이전 문항으로 이동
  const handlePrev = useCallback(() => {
    if (isFirstQuestion || isAnimating) return;

    setIsAnimating(true);
    setDirection('prev');

    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsAnimating(false);
    }, 200);
  }, [isFirstQuestion, isAnimating]);

  // 다음 문항으로 이동
  const handleNext = useCallback(() => {
    if (!hasCurrentAnswer || isAnimating) return;

    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setIsAnimating(true);
      setDirection('next');

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsAnimating(false);
      }, 200);
    }
  }, [hasCurrentAnswer, isLastQuestion, answers, onComplete, isAnimating]);

  // 키보드 단축키
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '5') {
        const value = parseInt(e.key);
        if (value >= 1 && value <= scale.length) {
          handleSelect(value);
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight' && hasCurrentAnswer) {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelect, handlePrev, handleNext, hasCurrentAnswer, scale.length]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">나가기</span>
            </button>
            <span className="text-sm font-medium text-gray-900">{title}</span>
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question area */}
      <main className="flex-1 flex flex-col justify-center px-4 py-8">
        <div className="max-w-2xl mx-auto w-full">
          {/* Question */}
          <div
            className={cn(
              'transition-all duration-200',
              isAnimating && direction === 'next' && 'opacity-0 -translate-x-4',
              isAnimating && direction === 'prev' && 'opacity-0 translate-x-4'
            )}
          >
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                Q{currentIndex + 1}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-relaxed">
                {currentQuestion.text}
              </h2>
            </div>

            {/* Likert scale options */}
            <div className="space-y-3">
              {scale.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.value;

                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                      'w-full min-h-[56px] px-6 py-4 rounded-xl border-2 transition-all duration-200',
                      'flex items-center justify-between',
                      'active:scale-[0.98]',
                      isSelected
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary-200 hover:bg-primary-50/50'
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          'w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all',
                          isSelected
                            ? 'border-primary-600 bg-primary-600 text-white'
                            : 'border-gray-300 text-gray-400'
                        )}
                      >
                        {option.value}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </div>

                    {isSelected && (
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Keyboard hint (desktop only) */}
            <p className="hidden sm:block text-center text-sm text-gray-400 mt-6">
              키보드 1~5 또는 ←→ 방향키로 빠르게 응답할 수 있어요
            </p>
          </div>
        </div>
      </main>

      {/* Navigation footer */}
      <footer className="bg-white border-t border-gray-100 sticky bottom-0">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              disabled={isFirstQuestion}
              className={cn(
                'flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all',
                isFirstQuestion
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">이전</span>
            </button>

            <div className="flex-1 flex justify-center">
              {/* Progress dots (mobile friendly) */}
              <div className="flex gap-1.5">
                {questions.slice(
                  Math.max(0, currentIndex - 2),
                  Math.min(questions.length, currentIndex + 3)
                ).map((q, i) => {
                  const actualIndex = Math.max(0, currentIndex - 2) + i;
                  const isAnswered = answers[q.id] !== undefined;
                  const isCurrent = actualIndex === currentIndex;

                  return (
                    <div
                      key={q.id}
                      className={cn(
                        'rounded-full transition-all',
                        isCurrent
                          ? 'w-8 h-2 bg-primary-600'
                          : isAnswered
                          ? 'w-2 h-2 bg-primary-400'
                          : 'w-2 h-2 bg-gray-200'
                      )}
                    />
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!hasCurrentAnswer}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all',
                hasCurrentAnswer
                  ? isLastQuestion
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              )}
            >
              <span>{isLastQuestion ? '완료' : '다음'}</span>
              {!isLastQuestion && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
