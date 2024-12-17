import { EventFormData } from '../types/event';

export const validateEventForm = (data: Partial<EventFormData>, step: string) => {
  const errors: Record<string, string> = {};

  switch (step) {
    case 'information':
      if (!data.name?.trim()) {
        errors.name = 'Event name is required';
      }
      if (!data.type) {
        errors.type = 'Event type is required';
      }
      if (!data.description?.trim()) {
        errors.description = 'Description is required';
      } else if (data.description.length < 50) {
        errors.description = 'Description must be at least 50 characters';
      }
      break;

    case 'date':
      if (!data.startDate) {
        errors.startDate = 'Start date is required';
      }
      if (!data.startTime) {
        errors.startTime = 'Start time is required';
      }
      if (!data.endDate) {
        errors.endDate = 'End date is required';
      }
      if (!data.endTime) {
        errors.endTime = 'End time is required';
      }
      if (!data.timeZone) {
        errors.timeZone = 'Time zone is required';
      }
      break;

    case 'location':
      if (!data.venueName?.trim()) {
        errors.venueName = 'Venue name is required';
      }
      if (!data.streetAddress?.trim()) {
        errors.streetAddress = 'Street address is required';
      }
      if (!data.city?.trim()) {
        errors.city = 'City is required';
      }
      if (!data.state?.trim()) {
        errors.state = 'State/Province is required';
      }
      if (!data.postalCode?.trim()) {
        errors.postalCode = 'Postal code is required';
      }
      if (!data.country?.trim()) {
        errors.country = 'Country is required';
      }
      break;
  }

  return errors;
};