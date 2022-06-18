import React from 'react';

import { Container, Header, Title } from './styles';
import { HistoryCard } from '../../components/HistoryCard';

export function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>

      <HistoryCard title="aa" color="red" amount="R$ 150,50" />
    </Container>
  );
}
