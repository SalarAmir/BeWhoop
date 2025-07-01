// src/components/ui/Icon.jsx
import React from 'react';
import { css } from '@emotion/react';

const Icon = ({ name, size = 24, color = '#FFFFFF' }) => {
  // In a real app, you would import SVG icons or use an icon library
  const renderIcon = () => {
    switch (name) {
      case 'heart':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        );
      case 'chat':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}>
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${size}px;
      height: ${size}px;
      border: 1.5px solid ${color};
      border-radius: 5px;
      cursor: pointer;
    `}>
      {renderIcon()}
    </div>
  );
};

export default Icon;