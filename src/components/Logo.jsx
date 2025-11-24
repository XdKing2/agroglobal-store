import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#22c55e" opacity="0.1"/>
      <path d="M50 20 L50 45 M50 30 L60 35 M50 30 L40 35" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
      <ellipse cx="50" cy="60" rx="20" ry="15" fill="#22c55e"/>
      <circle cx="45" cy="58" r="2" fill="white"/>
      <path d="M55 58 L58 55 L60 58" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 65 Q50 75 65 65" stroke="#16a34a" strokeWidth="2" fill="none"/>
    </svg>
  );
};

export default Logo;
