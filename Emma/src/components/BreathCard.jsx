import React from 'react'

const BreathCard = () => (
    <svg viewBox="0 0 800 400" height="16rem"   xmlns="http://www.w3.org/2000/svg">
      {/* Gradient Background */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F7FA" />
          <stop offset="100%" stopColor="#B2EBF2" />
        </linearGradient>
  
        {/* Breathing Circle Gradients */}
        <radialGradient id="circleGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#64B5F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1E88E5" stopOpacity="0.4" />
        </radialGradient>
  
        <radialGradient id="circleGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#81D4FA" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#29B6F6" stopOpacity="0.3" />
        </radialGradient>
  
        <radialGradient id="circleGradient3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#4FC3F7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0288D1" stopOpacity="0.2" />
        </radialGradient>
  
        {/* Wave Pattern */}
        <filter id="wave" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="turbulence" seed="3" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" />
        </filter>
  
        {/* Soft Glow */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
  
      {/* Card Background */}
      <rect width="800" height="400" rx="20" ry="20" fill="url(#bgGradient)" />
  
      {/* Decorative Wave Pattern */}
      <path d="M0,300 Q200,250 400,300 Q600,350 800,300 L800,400 L0,400 Z" fill="#A1E8FF" opacity="0.3" filter="url(#wave)" />
  
      {/* Breathing Circles Animation */}
      <g transform="translate(400, 200)">
        {/* Outermost Circle */}
        <circle r="150" fill="url(#circleGradient3)" opacity="0.5">
          <animate attributeName="r" values="140;170;140" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="8s" repeatCount="indefinite" />
        </circle>
  
        {/* Middle Circle */}
        <circle r="110" fill="url(#circleGradient2)" opacity="0.6">
          <animate attributeName="r" values="90;130;90" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite" />
        </circle>
  
        {/* Inner Circle */}
        <circle r="70" fill="url(#circleGradient1)" opacity="0.7" filter="url(#glow)">
          <animate attributeName="r" values="50;90;50" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
  
      {/* Text Elements */}
      <g textAnchor="middle" fontFamily="Arial, sans-serif">
        {/* Title */}
        <text x="400" y="80" fontSize="32" fontWeight="bold" fill="#1565C0">Breathing Exercise</text>
  
        {/* Subtitle */}
        <text x="400" y="120" fontSize="18" fill="#0D47A1" opacity="0.8">Find your calm, one breath at a time</text>
  
        {/* Breathing Pattern Text */}
        <g opacity="0.9">
          <text x="400" y="320" fontSize="14" fill="#0D47A1">4s inhale · 4s hold · 6s exhale · 2s hold</text>
        </g>
      </g>
  
      {/* Decorative Elements */}
      <g opacity="0.15">
        <circle cx="100" cy="60" r="30" fill="#29B6F6" />
        <circle cx="700" cy="80" r="20" fill="#29B6F6" />
        <circle cx="150" cy="350" r="15" fill="#29B6F6" />
        <circle cx="650" cy="330" r="25" fill="#29B6F6" />
      </g>
    </svg>
  );
  
  export default BreathCard;
