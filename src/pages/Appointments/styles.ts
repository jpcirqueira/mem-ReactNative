import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const HourContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const FurnitureContainer = styled.View`
  justify-content: space-between;
  width: 60%;
`;