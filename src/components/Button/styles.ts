import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;