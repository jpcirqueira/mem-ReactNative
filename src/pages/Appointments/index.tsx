import React, { useState } from 'react';

import CalendarComponent from '../../components/CalendarComponent';
import InputButton from '../../components/InputButton';
import { Container, Title, HourContainer, SubTitle, FurnitureContainer} from './styles';

function Appointments() {
  const [markedDate, setMarkedDate] = useState('')

  function handleSelectDate(date: string){
    setMarkedDate(date)
  }

  return (
    <Container>
      <Title>Escolha a data</Title>
      <CalendarComponent markedDate={markedDate}  handleSelectDate={handleSelectDate}/>
      <Title>Escolha o horário</Title>
      <SubTitle>Manhã</SubTitle>
      <HourContainer>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
      </HourContainer>
      <SubTitle>Tarde</SubTitle>
      <HourContainer>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
      </HourContainer>
      <SubTitle>Noite</SubTitle>
      <HourContainer>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
        <InputButton title="17:00"/>
      </HourContainer>
      <Title>Escolha o tipo do movel</Title>
      <FurnitureContainer>
        <InputButton title="Cozinha"/>
        <InputButton title="Guarda Roupa"/>
        <InputButton title="Banheiro"/>
        <InputButton title="Escritorio"/>
      </FurnitureContainer>
    </Container>
  );
};

export default Appointments;
