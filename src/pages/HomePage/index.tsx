import React from 'react';

import { 
  Container,
  CarouselContainer,
  HeaderText,
  ContentText,
  Content
 } from './styles';
import Carousel from '../../components/Carousel';
import Button from '../../components/Button';

function HomePage() {
  return (
    <Container>
      <HeaderText>Bem vindo, João</HeaderText>
      <Content>
        <CarouselContainer>
          <Carousel />
        </CarouselContainer>
        <ContentText>
          Realize seu sonho de
          ter uma casa com moveis
          planejados, peça já
          seu orçamento:
        </ContentText>
        <Button text="Agendar" onPress={()=>{}}/>
      </Content>

    </Container>
  );
};

export default HomePage;
