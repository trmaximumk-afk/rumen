'use client';

import { Category } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function CategoryCard({
  category,
  isSelected = false,
  onClick,
  className,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center p-4 rounded-xl transition-all',
        'min-w-[100px] sm:min-w-[120px]',
        isSelected
          ? 'bg-primary-600 text-white shadow-lg scale-105'
          : 'bg-white text-gray-700 border border-gray-100 hover:border-primary-200 hover:bg-primary-50',
        className
      )}
    >
      <span className="text-3xl mb-2">{category.emoji}</span>
      <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
    </button>
  );
}
