import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: 10px 0;
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

export const ButtonContainer = styled.View`
  margin: 20px 0;
  width: 100%;
  align-items: center;
`;

export const Header = styled.View`
  width: 75%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
`;

export const TitleHeader = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(25)}px;
`;
