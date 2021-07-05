import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
