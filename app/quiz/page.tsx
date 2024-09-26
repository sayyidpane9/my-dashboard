'use client'

import React from 'react';
import Quiz from './quiz';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Quiz />
    </div>
  );
};

export default Page;
