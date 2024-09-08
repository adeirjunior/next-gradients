import React from 'react';
import { generateRandomGradient } from '../../utils/generateRandomGradient';

interface RandomGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const RandomGradient: React.FC<RandomGradientProps> = ({
  children,
  ...props
}) => {
  const background =  generateRandomGradient();

  return (
    <div
      {...props}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: background,
        filter:
          "progid:DXImageTransform.Microsoft.gradient(startColorstr='#22c1c3', endColorstr='#fdbb2d', GradientType=1)",
        zIndex: -1,
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.500)',
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};
