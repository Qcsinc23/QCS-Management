import React from 'react';
import { AccountFormData, AccountFormErrors } from '../../types/auth';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

interface AccountFormProps {
  data: AccountFormData;
  errors: AccountFormErrors;
  isSubmitting: boolean;
  onChange: (name: keyof AccountFormData, value: string | boolean) => void;
  onSubmit: () => void;
}

const DELIVERY_VOLUME_OPTIONS = [
  { value: 'low', label: '1-10 deliveries/month' },
  { value: 'medium', label: '11-50 deliveries/month' },
  { value: 'high', label: '51-100 deliveries/month' },
  { value: 'enterprise', label: '100+ deliveries/month' },
];

export default function AccountForm({
  data,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
}: AccountFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          id="firstName"
          value={data.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          error={errors.firstName}
          required
        />
        <Input
          label="Last Name"
          id="lastName"
          value={data.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          error={errors.lastName}
          required
        />
      </div>

      <Input
        label="Organization Name"
        id="organization"
        value={data.organization}
        onChange={(e) => onChange('organization', e.target.value)}
        error={errors.organization}
        required
      />

      <Input
        label="Location"
        id="location"
        value={data.location}
        onChange={(e) => onChange('location', e.target.value)}
        error={errors.location}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone Number"
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          error={errors.phone}
          required
        />
        <Input
          label="Email Address"
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          error={errors.email}
          required
        />
      </div>

      <Input
        label="Password"
        id="password"
        type="password"
        value={data.password}
        onChange={(e) => onChange('password', e.target.value)}
        error={errors.password}
        required
      />

      <Select
        label="Expected Monthly Deliveries"
        id="deliveryVolume"
        value={data.deliveryVolume}
        onChange={(e) => onChange('deliveryVolume', e.target.value)}
        options={DELIVERY_VOLUME_OPTIONS}
        required
      />

      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={data.acceptTerms}
            onChange={(e) => onChange('acceptTerms', e.target.checked)}
            className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <span className="text-sm text-gray-600">
            I agree to the{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">
              Terms & Conditions
            </a>
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="text-sm text-red-500">{errors.acceptTerms}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="#" className="text-orange-500 hover:text-orange-600">
          Sign in
        </a>
      </p>
    </form>
  );
}