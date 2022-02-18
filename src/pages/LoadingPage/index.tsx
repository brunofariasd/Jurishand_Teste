import React from 'react';
import { LoadingContainer, LoadingPageIcon, LoadingPageText } from './styles';

const LoadingPage: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingPageIcon size="large" color="#ffffff" />
      <LoadingPageText>Aguarde, Obtendo informações</LoadingPageText>
    </LoadingContainer>
  );
};

export default LoadingPage;
