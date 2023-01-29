import React from 'react';
interface IButtons extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'sm' | 'md';
}

const Button: React.FC<IButtons> = ({
  size = 'sm',
  children,
  className,
  ...buttonProps
}) => {
  const styles = {
    size: {
      sm: 'px-[13px] sm:px-[19px] py-[7px]',
      md: 'px-[19px] py-[15px]',
    },
  };

  return (
    <button
      className={`bg-white border border-app-gray text-app-gray  rounded-3xl text-xs ${styles.size[size]} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
