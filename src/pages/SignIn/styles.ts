import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${RFPercentage(30)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 10px;

`;

export const ForgotPassword = styled(RectButton)`

`;

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 8px;
`;

export const NewAccount = styled(RectButton)`
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(25)}px;
  margin-right: 5px;
`;

export const NewAccountText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
