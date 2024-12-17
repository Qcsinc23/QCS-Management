// Focus management
export const setFocusTrap = (containerRef: React.RefObject<HTMLElement>) => {
  const focusableElements = containerRef.current?.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements) {
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }
};

// ARIA attributes helper
export const getAriaAttributes = (role: string, label?: string, description?: string) => {
  const attributes: Record<string, string> = { role };
  
  if (label) {
    attributes['aria-label'] = label;
  }
  
  if (description) {
    attributes['aria-description'] = description;
  }
  
  return attributes;
};

// Contrast checker
export const hasAdequateContrast = (foreground: string, background: string) => {
  // Implementation of WCAG contrast ratio calculation
  // This is a placeholder - you would need to implement the actual calculation
  return true;
};