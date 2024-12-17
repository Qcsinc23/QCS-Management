import { useState } from 'react';
import { EventFormData, EventValidationErrors } from '../types/event';

const INITIAL_FORM_DATA: EventFormData = {
  name: '',
  type: 'conference',
  description: '',
};

export function useEventForm(initialData: Partial<EventFormData> = {}) {
  const [formData, setFormData] = useState<EventFormData>({
    ...INITIAL_FORM_DATA,
    ...initialData,
  });

  const [errors, setErrors] = useState<EventValidationErrors>({});

  const validateForm = () => {
    const newErrors: EventValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Event name is required';
    }

    if (!formData.type) {
      newErrors.type = 'Event type is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (newData: EventFormData) => {
    setFormData(newData);
    // Clear errors for changed fields
    const changedFields = Object.keys(newData).filter(
      key => newData[key as keyof EventFormData] !== formData[key as keyof EventFormData]
    );
    if (changedFields.length > 0) {
      setErrors(prev => {
        const next = { ...prev };
        changedFields.forEach(field => delete next[field as keyof EventValidationErrors]);
        return next;
      });
    }
  };

  return {
    formData,
    errors,
    validateForm,
    handleChange,
  };
}