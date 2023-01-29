import React, { FC } from 'react';

interface IActionButton extends React.ComponentPropsWithoutRef<'button'> {}
export const ActionButton: FC<IActionButton> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={`bg-app-blue text-white rounded-md p-3`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
