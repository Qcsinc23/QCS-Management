export interface AccountFormData {
  firstName: string;
  lastName: string;
  phone: string;
  organization: string;
  location: string;
  email: string;
  password: string;
  deliveryVolume: 'low' | 'medium' | 'high' | 'enterprise';
  acceptTerms: boolean;
}

export interface AccountFormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  organization?: string;
  location?: string;
  email?: string;
  password?: string;
  acceptTerms?: string;
}