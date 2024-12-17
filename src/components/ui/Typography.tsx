import React from 'react';
import { getTextStyles } from '../../utils/styles';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export default function Typography({ variant, children, className = '' }: TypographyProps) {
  const Component = variant.startsWith('h') ? variant : 'p';
  const styles = getTextStyles(variant);

  return (
    <Component className={`${styles} ${className}`}>
      {children}
    </Component>
  );
}