import React from 'react';
import { Waves } from 'lucide-react';
import AccountForm from '../../components/auth/AccountForm';
import { useAccountForm } from '../../hooks/useAccountForm';

export default function AccountCreation() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useAccountForm();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Brand Section */}
      <div className="hidden lg:flex lg:w-2/5 bg-[#052B5D] text-white">
        <div className="w-full max-w-2xl mx-auto flex flex-col justify-center p-12">
          <div className="flex items-center gap-3 mb-8">
            <Waves className="w-10 h-10 text-transparent bg-gradient-to-br from-blue-500 via-teal-500 to-orange-500" />
            <span className="text-2xl font-bold tracking-wider">
              QUIET CRAFT SOLUTIONS
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-6">
            Transform Your Event Logistics
          </h1>
          <p className="text-lg text-gray-300">
            Join thousands of event organizers who trust our platform for seamless
            delivery management and real-time tracking.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Create Your Account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Get started with our enterprise delivery management platform
            </p>
          </div>

          <AccountForm
            data={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}