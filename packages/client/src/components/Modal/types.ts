import { BaseProps } from '@softorino/types';

export type Props = BaseProps<HTMLDivElement> & {
  onClose?(): void;
}

