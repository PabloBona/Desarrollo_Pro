import React, { useRef } from 'react';
import { TfiAngleDown } from 'react-icons/tfi';
interface IInput extends React.ComponentPropsWithoutRef<'select'> {
  label: string;
}
export const Select: React.FC<IInput> = React.forwardRef(
  ({ label, className, children, ...selectProps }, _ref) => {
    const refContainer = useRef<any>(null);

    return (
      <label className="relative block">
        <select
          ref={refContainer}
          {...selectProps}
          className={`peer px-5 py-2 border border-app-grayDark rounded-3xl outline-none focus:border-app-blue w-full appearance-none  ${className}`}
        >
          {children}
        </select>
        <span
          className={`cursor-text text-base text-app-grayDark peer-active:text-app-blue peer-active:-top-[12px] peer-focus:-top-[12px] peer-focus:text-xs ease-in-out  peer-focus:text-app-blue absolute whitespace-nowrap transition-all duration-200 top-[4px] left-4 rounded-3xl bg-white px-1 py-1 outline-none ${
            refContainer?.current?.value && '-top-[12px] !text-xs'
          }`}
        >
          {label}
        </span>
        <TfiAngleDown className="absolute right-4 top-3 text-app-grayDark" />
      </label>
    );
  }
);

Select.displayName = 'Custom Select';
