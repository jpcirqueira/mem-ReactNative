import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { 
  Container,
  Form,
  Title,
  NewAccount,
  Icon,
  NewAccountText,
} from './styles';

function SignIn() {

  function teste(){
    console.log('teste')
  }
  return (
    <Container>
      <Form>
        <Title>Crie sua conta</Title>
        <Input placeholder='nome' icon='teste'/>
        <Input placeholder='email' icon='teste'/>
        <Input placeholder='senha' icon='teste'/>
        <Button text='Cadastrar'onPress={teste}/>
      </Form>
      <NewAccount>
        <Icon name='arrow-left'/>
        <NewAccountText>Voltar para o login</NewAccountText>
      </NewAccount>
    </Container>
  );
}

export default SignIn;
