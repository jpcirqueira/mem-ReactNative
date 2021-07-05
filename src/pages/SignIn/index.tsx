import React from 'react';

import Button from '../../components/Button';
import { Container } from './styles';

function SignIn() {

  function teste(){
    console.log('teste')
  }
  return (
    <Container>
      <Button text='Entrar' onPress={teste}/>
    </Container>
  );
}

export default SignIn;
