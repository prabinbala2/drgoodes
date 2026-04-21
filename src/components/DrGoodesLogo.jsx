import React from 'react';

export default function DrGoodesLogo({ className = '', compact = false }) {
  return (
    <div className={`inline-flex items-center ${className}`.trim()}>
      <img
        src="/logo.png"
        alt="D.R.GOODES"
        className={compact ? 'h-11 w-auto sm:h-12' : 'h-16 w-auto sm:h-20'}
      />
    </div>
  );
}
