import React, { useState } from 'react';

import CalendarComponent from '../../components/CalendarComponent';
import { Container, DateText } from './styles';

function Appointments() {
  const [markedDate, setMarkedDate] = useState('')

  function handleSelectDate(date: string){
    setMarkedDate(date)
  }

  return (
    <Container>
      <DateText>Escolha a data</DateText>
      <CalendarComponent markedDate={markedDate}  handleSelectDate={handleSelectDate}/>
      
    </Container>
  );
};

export default Appointments;
