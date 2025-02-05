import React from 'react';
import './Button.css'

const Button = ({children,className,type,onClick}) => {

  const cn = `button ${className ?? ''}`;

  return (
    <button type = {type}
            className={cn}
            onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;