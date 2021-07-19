import React from 'react';


import { Container, Title } from './styles';

interface InputButtonProps{
  title: string;
}

function InputButton({ title }: InputButtonProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default InputButton;
