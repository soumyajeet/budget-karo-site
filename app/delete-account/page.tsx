'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DeleteAccount() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handleDeleteClick = () => {
    if (!phoneNumber.trim()) {
      alert('Please enter a phone number');
      return;
    }
    
    // Validate Indian mobile number (10 digits, starting with 6-9)
    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!indianMobileRegex.test(phoneNumber)) {
      alert('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9');
      return;
    }
    
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    
    // Simulate API call to delete user
    // Replace this with your actual API endpoint
    try {
      // await fetch('/api/delete-user', {
      //   method: 'DELETE',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phoneNumber })
      // });
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setDeleteSuccess(true);
      setPhoneNumber('');
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('An error occurred while deleting the account. Please try again.');
    } finally {
      setIsDeleting(false);
      setShowConfirmation(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleCloseSuccess = () => {
    setDeleteSuccess(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Header />

      <main className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="text-3xl font-semibold text-slate-900">
              Delete Account
            </h1>
            <p className="mt-4 text-slate-600">
              Enter your Indian mobile number to delete your Budget Karo account. This action cannot be undone.
            </p>

            <div className="mt-8">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                Indian Mobile Number
              </label>
              <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-slate-500">+91</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) {
                      setPhoneNumber(value);
                    }
                  }}
                  placeholder="9876543210"
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  className="block w-full rounded-lg border border-slate-300 py-3 pl-14 pr-4 text-slate-900 placeholder-slate-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Enter your 10-digit mobile number without +91
              </p>
            </div>

            <div className="mt-6 rounded-lg bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">Warning</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>
                      Deleting your account will permanently remove all your data, including expenses, budgets, and settings. This action cannot be reversed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={handleDeleteClick}
                disabled={isDeleting}
                className="flex-1 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-red-400"
              >
                Delete Account
              </button>
              <a
                href="/"
                className="flex-1 rounded-lg border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                Confirm Account Deletion
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Are you sure you want to delete the account associated with{' '}
                <span className="font-semibold text-slate-900">+91 {phoneNumber}</span>?
                This action cannot be undone and all data will be permanently lost.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleCancelDelete}
                disabled={isDeleting}
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-red-400"
              >
                {isDeleting ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {deleteSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                Account Deleted Successfully
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The account has been permanently deleted. All associated data has been removed from our systems.
              </p>
            </div>
            <div className="mt-6">
              <button
                onClick={handleCloseSuccess}
                className="w-full rounded-lg bg-green-600 px-4 py-2.5 font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
