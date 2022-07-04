import * as React from 'react';

function Input(props: any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input {...props} className="nmw-input" />;
}

Input.displayName = 'Input';
export default Input;
