'use client';

import { Test } from '@/types';
import { cn } from '@/lib/utils';

interface TestCardProps {
  test: Test;
  variant?: 'default' | 'compact' | 'horizontal';
  className?: string;
}

export default function TestCard({ test, variant = 'default', className }: TestCardProps) {
  const formatParticipants = (count: number) => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}만`;
    }
    return count.toLocaleString();
  };

  if (variant === 'horizontal') {
    return (
      <div
        className={cn(
          'flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer',
          className
        )}
      >
        <div className="text-4xl flex-shrink-0">{test.emoji}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 truncate">{test.title}</h3>
            <div className="flex gap-1 flex-shrink-0">
              {test.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    'px-1.5 py-0.5 text-xs font-medium rounded',
                    tag === 'NEW' && 'bg-green-100 text-green-700',
                    tag === 'BEST' && 'bg-yellow-100 text-yellow-700',
                    tag === '인기' && 'bg-red-100 text-red-700',
                    tag === '추천' && 'bg-blue-100 text-blue-700'
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 truncate">{test.shortDesc}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>{test.questionCount}문항</span>
            <span>{test.timeMinutes}분</span>
            <span>{formatParticipants(test.participants)}명 참여</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'flex-shrink-0 w-64 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer',
          className
        )}
      >
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{test.emoji}</span>
          <div className="flex gap-1">
            {test.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={cn(
                  'px-1.5 py-0.5 text-xs font-medium rounded',
                  tag === 'NEW' && 'bg-green-100 text-green-700',
                  tag === 'BEST' && 'bg-yellow-100 text-yellow-700',
                  tag === '인기' && 'bg-red-100 text-red-700',
                  tag === '추천' && 'bg-blue-100 text-blue-700'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{test.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{test.shortDesc}</p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{test.questionCount}문항</span>
          <span>·</span>
          <span>{test.timeMinutes}분</span>
        </div>
      </div>
    );
  }

  // default variant
  return (
    <div
      className={cn(
        'p-5 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer',
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{test.emoji}</span>
        <div className="flex gap-1">
          {test.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                'px-2 py-0.5 text-xs font-medium rounded-full',
                tag === 'NEW' && 'bg-green-100 text-green-700',
                tag === 'BEST' && 'bg-yellow-100 text-yellow-700',
                tag === '인기' && 'bg-red-100 text-red-700',
                tag === '추천' && 'bg-blue-100 text-blue-700'
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{test.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2 mb-4">{test.shortDesc}</p>

      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {test.questionCount}문항
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {test.timeMinutes}분
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {formatParticipants(test.participants)}명 참여
        </span>
        <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
          검사하기
        </button>
      </div>
    </div>
  );
}
