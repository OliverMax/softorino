import { FC, FormEvent, ChangeEvent, useState } from 'react';
import { Props } from './types.tsx';
import { BaseTextarea, BaseButton } from '@/components';
import { makeHTMLClasses } from '@/utils';
import { Comment } from '@softorino/types';

const FormComment: FC<Props> = ({ onSubmit = () => {}, className, ...props }) => {
  const [content, setContent] = useState<Comment['content']>('');
  const [valid, setValid] = useState(true);

  const isValid = (value: string) => Boolean(value.length);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid(content)) {
      setValid(false);
      return;
    }

    onSubmit(content.trim());
    setContent('');
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValid(true);
    setContent(e.target.value);
  };

  return (
    <form
      className={`flex flex-col ${className}`}
      onSubmit={submitHandler}
      {...props}
    >
      <BaseTextarea
        className={makeHTMLClasses([
          'mb-2 transition-colors duration-300',
          valid ? '' : 'border-red-500'
        ])}
        placeholder="Type your comment..."
        value={content}
        onInput={handleChange}
      />

      <BaseButton className="py-1.5">
        Submit
      </BaseButton>
    </form>
  );
};

export default FormComment;
