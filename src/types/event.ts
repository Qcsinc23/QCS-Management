// Add these types to the existing event.ts file

export interface EventDocument {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
  status: 'uploading' | 'uploaded' | 'error';
  errorMessage?: string;
}

// Update EventFormData interface
export interface EventFormData {
  // ... existing fields ...
  documents?: EventDocument[];
}