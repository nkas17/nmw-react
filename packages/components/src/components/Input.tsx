import * as React from 'react';

function Input(props: any) {
  const { className } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input {...props} className={`nmw-input${className ? ` ${className}` : ''}`} />;
}

Input.displayName = 'Input';
export default Input;
