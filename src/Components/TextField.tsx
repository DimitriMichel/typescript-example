import React, { useRef, useState } from 'react';
//Interface Examples
interface Person {
  firstName: string;
  lastName: string;
}
interface Props {
  text: string;
  bool: boolean;
  num: number;
  func: () => string;
  secondFunc: () => object;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface TextState {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  //Hook Examples
  const [counter, setCount] = useState<number | null>(0);
  const [word, setWord] = useState<TextState>({ text: 'Hello' });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  setCount(5);
  console.log(counter);
  console.log(word);
  setWord({ text: 'Goodbye' });

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
