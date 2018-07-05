import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.Text`
  font-size: 26;
  text-align: center;
  padding-top: 10;
  padding-horizontal: 15;
`;

const ListOfDecks = () => (
  <View>
    <Header>------- My Decks -------</Header>
  </View>
);

export default ListOfDecks;
