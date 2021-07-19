import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
`;
