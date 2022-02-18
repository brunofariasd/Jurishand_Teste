import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const Container = styled(Pressable)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-bottom: 48px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-medium';
  color: #312e38;
  font-size: 16px;
`;
