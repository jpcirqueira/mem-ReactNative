import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { 
  Container,
  Form,
  Title,
  ForgotPassword,
  ForgotPasswordText,
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
        <Title>Faça seu Login</Title>
        <Input placeholder='email' icon='teste'/>
        <Input placeholder='senha' icon='teste'/>
        <Button text='entrar'onPress={teste}/>
        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Form>
      <NewAccount>
        <Icon name='log-in'/>
        <NewAccountText>Criar uma conta</NewAccountText>
      </NewAccount>
    </Container>
  );
}

export default SignIn;
