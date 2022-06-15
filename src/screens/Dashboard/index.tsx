import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/2020',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '13/04/2020',
    },
    {
      id: '3',
      type: 'positive',
      title: 'Aluguel do apartamento',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '13/04/2020',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/rodrigocelvo.png' }} />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17,400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />

        <HighlightCard
          title="Saidas"
          amount="R$ 17,400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 17,400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
