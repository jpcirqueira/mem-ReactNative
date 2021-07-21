import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/Button';

import CalendarComponent from '../../components/CalendarComponent';
import InputButton from '../../components/InputButton';
import { Furnitures } from '../../utils/Furnitures';
import { 
  Container,
  Title,
  HourContainer,
  SubTitle,
  ButtonContainer,
  Header,
  Icon,
  TitleHeader,
} from './styles';

function Appointments() {

  const [markedDate, setMarkedDate] = useState('');
  function handleSelectDate(date: string){
    setMarkedDate(date)
  }

  return (
    <Container>
      <Header>
        <Icon  name='arrow-left'/>
        <TitleHeader>Agendamento</TitleHeader>
      </Header>
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
        numColumns={2}
      />
      <ButtonContainer>
        <Button text="Agendar" onPress={() =>{}}/>
      </ButtonContainer>
    </Container>
  );
};

export default Appointments;
