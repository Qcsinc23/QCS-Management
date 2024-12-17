import { useState } from 'react';
import { AccountFormData, AccountFormErrors } from '../types/auth';

const INITIAL_FORM_DATA: AccountFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  organization: '',
  location: '',
  email: '',
  password: '',
  deliveryVolume: 'low',
  acceptTerms: false,
};

export function useAccountForm() {
  const [formData, setFormData] = useState<AccountFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<AccountFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: AccountFormErrors = {};

    // Name validations
    if (!formData.firstName.trim() || formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    if (!formData.lastName.trim() || formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Organization validation
    if (!formData.organization.trim() || formData.organization.length < 2) {
      newErrors.organization = 'Organization name must be at least 2 characters';
    }

    // Location validation
    if (!formData.location.trim() || formData.location.length < 2) {
      newErrors.location = 'Location must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with 1 uppercase letter and 1 number';
    }

    // Terms validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the Terms & Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Handle successful account creation
        console.log('Account created:', formData);
      } catch (error) {
        console.error('Error creating account:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (name: keyof AccountFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}