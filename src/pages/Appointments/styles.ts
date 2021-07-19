import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
