import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import CalendarComponent from '../../components/CalendarComponent';
import InputButton from '../../components/InputButton';
import { Container, Title, HourContainer, SubTitle, FurnitureContainer} from './styles';

function Appointments() {
  const Furnitures = [
    {
      key:1,
      name: 'Cozinha'
    },
    {
      key:2,
      name: 'Guarda Roupa'
    },
    {
      key:3,
      name: 'Banheiro'
    },
    {
      key:4,
      name: 'Escritorio'
    },
    {
      key:5,
      name: 'Closet'
    },
    {
      key:6,
      name: 'Outros'
    }
  ]

  const [markedDate, setMarkedDate] = useState('')
  const teste = 2;
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
        <FlatList
          data={Furnitures}
          keyExtractor={(item) => item.name}
          style={{ flex: 1, width: '70%'}}
          renderItem={({ item })=> (
            <InputButton title={item.name}/>
          )}
          numColumns={teste}
        />
    </Container>
  );
};

export default Appointments;
