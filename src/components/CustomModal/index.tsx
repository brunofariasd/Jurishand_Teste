import React from 'react';
import { Modal, ScrollView } from 'react-native';
import images from '../../assets/images';
import { useAppDispatch, useAppSelector } from '../../store';
import { showModal, updatePlanUser } from '../../store/homePageReducer.store';
import {
  ViewModalContent,
  ModalContent,
  ModalImage,
  ModalTextContent,
  ModalContentButton,
  ModalTextButton,
} from './styles';

const CustomModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const homePageReducer = useAppSelector((state) => state.homePageReducer);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={homePageReducer.showModal}
    >
      <ViewModalContent>
        <ScrollView>
          <ModalContent>
            <ModalImage source={images.imgModal} />
            <ModalTextContent>
              {'Faça o upgrade no Jurishand e Seja Feliz!'}
            </ModalTextContent>
            <ModalTextContent>
              {'Assine por R$ 299,90 por ano (R$ 24,90 por mês)'}
            </ModalTextContent>
            <ModalTextContent style={{ fontSize: 12 }}>
              {'Você será cobrado imediatamente. Sem período trial.'}
            </ModalTextContent>
            <ModalContentButton
              onPress={() => {
                dispatch(showModal());
                dispatch(updatePlanUser('premium'));
              }}
            >
              <ModalTextButton>Assine Agora</ModalTextButton>
            </ModalContentButton>
          </ModalContent>
        </ScrollView>
      </ViewModalContent>
    </Modal>
  );
};

export default CustomModal;
