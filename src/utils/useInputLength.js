import { useState } from 'react';

export const initialValuesLength = {
  name: 0,
  email: 0,
};

export default function useInputsLength() {
  const [inputsLength, setInputsLength] = useState(initialValuesLength);
  const changeCharactersCount = (e) => {
    setInputsLength((state) => ({ ...state, [e.target.name]: +e.target.value.length }));
  };
  return { inputsLength, setInputsLength, changeCharactersCount };
}
