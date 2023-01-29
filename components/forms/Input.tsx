import React, { useRef } from 'react';
interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}
export const Input: React.FC<IInput> = React.forwardRef(
  ({ label, className, ...inputProps }, _ref) => {
    const refContainer = useRef<any>(null);

    return (
      <label className="relative">
        <input
          ref={refContainer}
          {...inputProps}
          className={`peer px-5 py-3 border border-app-grayDark rounded-3xl outline-none focus:border-app-blue w-full  ${className}`}
        />
        <span
          className={`cursor-text text-base text-app-grayDark peer-active:text-app-blue peer-active:-top-[25px] peer-focus:-top-[25px] peer-focus:text-xs ease-in-out  peer-focus:text-app-blue absolute whitespace-nowrap transition-all duration-200 -top-[4px] left-4 rounded-3xl bg-white px-1 py-1 outline-none ${
            refContainer?.current?.value && '-top-[25px] !text-xs'
          }`}
        >
          {label}
        </span>
      </label>
    );
  }
);

Input.displayName = 'Custom Input';
