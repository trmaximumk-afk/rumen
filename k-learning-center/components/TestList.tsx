'use client';

import { useState, useMemo } from 'react';
import { Test } from '@/types';
import TestCard from './TestCard';
import { cn } from '@/lib/utils';

type TabType = '전체' | 'NEW' | '인기';

interface TestListProps {
  tests: Test[];
}

export default function TestList({ tests }: TestListProps) {
  const [activeTab, setActiveTab] = useState<TabType>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs: TabType[] = ['전체', 'NEW', '인기'];

  const filteredTests = useMemo(() => {
    let result = tests;

    // Tab filter
    if (activeTab === 'NEW') {
      result = result.filter((test) => test.isNew);
    } else if (activeTab === '인기') {
      result = result.filter((test) => test.tags.includes('인기') || test.tags.includes('BEST'));
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (test) =>
          test.title.toLowerCase().includes(query) ||
          test.shortDesc.toLowerCase().includes(query) ||
          test.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [tests, activeTab, searchQuery]);

  return (
    <div>
      {/* Search and Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeTab === tab
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="검사 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        총 {filteredTests.length}개의 검사
      </p>

      {/* Test list */}
      {filteredTests.length > 0 ? (
        <div className="space-y-3">
          {filteredTests.map((test) => (
            <TestCard key={test.id} test={test} variant="horizontal" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>검색 결과가 없습니다</p>
        </div>
      )}
    </div>
  );
}
