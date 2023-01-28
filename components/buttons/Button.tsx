import React from 'react';
interface IButtons extends React.ComponentPropsWithoutRef<'button'> {}

const Button: React.FC<IButtons> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={`bg-white border border-app-gray text-app-gray px-[13px] sm:px-[19px] py-[7px] rounded-3xl text-xs ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
