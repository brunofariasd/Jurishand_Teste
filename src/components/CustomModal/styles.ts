import {Dimensions, Pressable} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

export const ViewModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  max-height: ${height.toFixed(0)}px;
  flex-direction: row;
  padding: 0 20px;
`;

export const ModalContent = styled.View`
  background: #ffffff;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  border-radius: 20px;
  padding: 20px 0;
  overflow: hidden;
  opacity: 0.95;
`;

export const ModalImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  resize-mode: contain;
`;

export const ModalTextContent = styled.Text`
  font-size: 16px;
  font-family: RobotoSlab-Regular;
  text-align: center;
  color: #000000;
  padding: 20px
`;

export const ModalContentButton = styled(Pressable)`
  justify-content: center;
  align-items: center;
  background: #96e0aa;
  margin-top: 10px;
  border-radius: 20px;
  padding: 14px;
  elevation: 2;
`;

export const ModalTextButton = styled.Text`
  font-size: 16px;
  font-family: RobotoSlab-Regular;
  text-align: center;
  color: #000000;
`;
