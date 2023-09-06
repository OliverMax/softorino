import { FC, PropsWithChildren } from 'react';
import { Props } from './types.ts';
import { IconCross } from "@/components";

const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  onClose = () => {},
  className,
  ...props
}) => {
  return (
    <div className={`bg-white rounded shadow p-10 ${className}`} {...props}>
      <button
        className="absolute right-0 top-0"
        type="button"
        onClick={onClose}
      >
        <IconCross className="absolute top-4 right-4" />
      </button>

      {children}
    </div>
  );
};

export default Modal;
