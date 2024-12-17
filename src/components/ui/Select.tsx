import React from 'react';
import { cn } from '../../utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export default function Select({
  label,
  error,
  required,
  options,
  className,
  id,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn(
          'w-full px-4 py-2 rounded-lg border border-gray-300',
          'focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
          'appearance-none bg-white',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          className
        )}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}