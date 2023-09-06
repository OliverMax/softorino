import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { Props } from './types.ts';

const Overlay: FC<PropsWithChildren<Props>> = ({
  children,
  isVisible,
  onClick = () => {},
}) => {
  const rootElRef = useRef<HTMLDivElement>(null);

  const eventHandler = ({ target }: MouseEvent) => {
    if (rootElRef.current!.isSameNode((target as HTMLElement))) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', eventHandler);

    return () => {
      document.removeEventListener('click', eventHandler);
    };
  }, []);

  return (
    <div
      className={`
        absolute
        left-0
        top-0

        w-full
        h-full

        bg-black
        bg-opacity-30

        transition-opacity
        duration-300

        ${isVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
        }

        flex
        items-center
        justify-center
      `}
      ref={rootElRef}
    >
      {children}
    </div>
  );
};

export default Overlay;
