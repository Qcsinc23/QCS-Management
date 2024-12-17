// Data transformation utilities
import { EventFormData } from '../types/event';

export const transformEventFormToAPI = (formData: EventFormData) => {
  return {
    name: formData.name.trim(),
    type: formData.type,
    description: formData.description.trim(),
    schedule: {
      startDate: formData.startDate,
      startTime: formData.startTime,
      endDate: formData.endDate,
      endTime: formData.endTime,
      timeZone: formData.timeZone,
    },
    location: {
      venueName: formData.venueName?.trim(),
      streetAddress: formData.streetAddress?.trim(),
      city: formData.city?.trim(),
      state: formData.state?.trim(),
      postalCode: formData.postalCode?.trim(),
      country: formData.country?.trim(),
    },
    inventory: formData.inventoryItems?.map(item => ({
      itemId: item.id,
      quantity: item.quantity,
    })),
    personnel: formData.personnelAssignments?.map(assignment => ({
      roleId: assignment.roleId,
      userId: assignment.userId,
    })),
    documents: formData.documents?.map(doc => ({
      id: doc.id,
      name: doc.name,
      type: doc.type,
    })),
  };
};

export const transformAPIToEventForm = (apiData: any): EventFormData => {
  return {
    name: apiData.name,
    type: apiData.type,
    description: apiData.description,
    startDate: apiData.schedule.startDate,
    startTime: apiData.schedule.startTime,
    endDate: apiData.schedule.endDate,
    endTime: apiData.schedule.endTime,
    timeZone: apiData.schedule.timeZone,
    venueName: apiData.location.venueName,
    streetAddress: apiData.location.streetAddress,
    city: apiData.location.city,
    state: apiData.location.state,
    postalCode: apiData.location.postalCode,
    country: apiData.location.country,
    inventoryItems: apiData.inventory?.map((item: any) => ({
      id: item.itemId,
      quantity: item.quantity,
    })),
    personnelAssignments: apiData.personnel?.map((p: any) => ({
      roleId: p.roleId,
      userId: p.userId,
    })),
    documents: apiData.documents?.map((doc: any) => ({
      id: doc.id,
      name: doc.name,
      type: doc.type,
    })),
  };
};