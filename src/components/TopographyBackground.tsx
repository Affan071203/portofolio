import React from 'react';

export const TopographyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px]" />
    </div>
  );
};

