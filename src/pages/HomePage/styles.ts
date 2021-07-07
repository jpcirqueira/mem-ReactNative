import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CarouselContainer = styled.View`
  min-height: 15%;
  max-height: 120px;
  justify-content: center;
  align-items: center;
  margin-bottom: 11%;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const ContentText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 70px 20px;
  /* margin-top: ${RFPercentage(30)}px; */
`;
