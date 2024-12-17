import React from 'react';
import Button from '../../ui/Button';

interface EventCreationActionsProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled?: boolean;
  isNextDisabled?: boolean;
  nextLabel?: string;
}

export default function EventCreationActions({
  onPrevious,
  onNext,
  isPreviousDisabled = false,
  isNextDisabled = false,
  nextLabel = 'Save & Continue',
}: EventCreationActionsProps) {
  return (
    <div className="flex justify-between items-center pt-6">
      <Button
        variant="secondary"
        onClick={onPrevious}
        disabled={isPreviousDisabled}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        onClick={onNext}
        disabled={isNextDisabled}
      >
        {nextLabel}
      </Button>
    </div>
  );
}