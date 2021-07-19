import React, { useState } from 'react';

import { Calendar } from 'react-native-calendars';
import { Container, CalanderContainer } from './styles';

function Appointments() {
  const [markedDate, setMarkedDate] = useState('')

  function handleSelectDate(date: string){
    setMarkedDate(date)
  }

  return (
    <Container>
      <CalanderContainer>
        <Calendar 
          current={new Date()}
          onDayPress={(date) => handleSelectDate(date.dateString)}
          hideDayNames = { true }
          enableSwipeMonths = { true }
          onPressArrowLeft = { subtractMonth  =>  subtractMonth ( ) } 
          onPressArrowRight = { addMonth  =>  addMonth ( ) }
          markedDates={{[markedDate]:{selected: true}}}
          style={{
            width: 300,
          }}
          theme={{
            textDayFontSize: 18,
            backgroundColor : '#28262E' , 
            calendarBackground : '#28262E' , 
            selectedDayBackgroundColor : '#FF9000' ,
            todayTextColor : '#ffffff' , 
            dayTextColor : '#969CB2', 
            monthTextColor : '#969CB2' ,
            arrowColor : '#969CB2' ,
          }}  
        />
      </CalanderContainer>

    </Container>
  );
};

export default Appointments;
