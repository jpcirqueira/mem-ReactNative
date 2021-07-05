import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Container, TextButton } from './styles';

interface ButtonProps{
  text: string;
  onPress: ()=> void;
}

function Button({text, onPress}: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <TextButton>
        {text}
      </TextButton>
    </Container>
  );
};

export default Button;
