import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps{
  placeholder: string;
  icon: string;
}
 
function Input({placeholder, icon, ...rest}: InputProps) {
  return (
    <Container
      placeholder={placeholder}
      placeholderTextColor='#fff'
      {...rest}
    />
  );
};

export default Input;
