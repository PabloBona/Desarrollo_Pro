import React, { FC } from 'react';

interface IActionButton extends React.ComponentPropsWithoutRef<'button'> {}
export const ActionButton: FC<IActionButton> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={`bg-app-blue text-white rounded-md p-3 disabled:bg-app-grayLight disabled:text-app-grayDark ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
