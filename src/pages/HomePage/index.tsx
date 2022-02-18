import React, { useCallback } from 'react';
import Button from '../../components/Button';
import CustomModal from '../../components/CustomModal';
import { useAppDispatch, useAppSelector } from '../../store';
import { showModal } from '../../store/homePageReducer.store';
import { Container, TitleViewText } from './styles';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const homePageReducer = useAppSelector((state) => state.homePageReducer);

  const handleModalButton = useCallback(() => {
    dispatch(showModal());
  }, []);

  return (
    <Container>
      <CustomModal />
      <TitleViewText>{'Configurações'}</TitleViewText>
      {homePageReducer.current_user.plan === 'free' && (
        <Button onPress={handleModalButton}>{'Faça Upgrade Agora'}</Button>
      )}
    </Container>
  );
};

export default HomePage;
