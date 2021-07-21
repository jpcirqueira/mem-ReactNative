import React from 'react';
import Button from '../../components/Button';

import { 
  Container,
  Icon,
  Title,
  SubTitle,
} from './styles';

function AppointmentConfirmed() {
  return (
    <Container>
      <Icon name="check"/>
      <Title>Agendamento concluído</Title>
      <SubTitle>Terça, dia 14 de março de 2020 às 12:00h</SubTitle>
      <Button text="Ok" onPress={() => {}}/>
    </Container>
  );
};

export default AppointmentConfirmed;
