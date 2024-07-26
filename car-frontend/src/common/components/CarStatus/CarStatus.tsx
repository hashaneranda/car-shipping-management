import React from 'react';

const statusColors: { [key: string]: string } = {
  pending: 'bg-yellow-500',
  shipped: 'bg-green-500',
  delivered: 'bg-blue-500',
  cancelled: 'bg-red-500',
};

const CarStatus = ({ status }: { status: string }) => {
  const colorClass = statusColors[status.toLowerCase()] || 'bg-gray-500'; // Default to gray if status is not recognized
  return <span className={`inline-block px-2 py-1 text-white text-xs font-bold rounded ${colorClass}`}>{status}</span>;
};

export default CarStatus;
