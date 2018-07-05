import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import ListOfDecks from '../components/ListOfDecks';
import { selectDeckTitleAndQuestions } from '../selectors/deckSelectors';

const StyledTouchableOpacity = styled.TouchableOpacity`
  padding-vertical: 0;
  backgroundColor: white;
`;

const StyledItemTitleText = styled.Text`
  borderTopWidth: 2;
  borderTopColor: white;
  font-size: 22;
  font-weight: bold;
  padding-horizontal: 20;
  text-align: center;
`;

const StyledCardsText = styled.Text`
  font-size: 16;
  borderBottomColor: grey;
  borderBottomWidth: 2;
  padding-horizontal: 15;
  text-align: center;
`;

class Home extends Component {
  render() {
    this.renderItemList = ({ item }) => {
      const { title, questions } = item;
      return (
        <StyledTouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('QuizMenu', {
              title,
              questions,
            })
          }
        >
          <StyledItemTitleText>{title}</StyledItemTitleText>
          <StyledCardsText>{questions.length} card(s)</StyledCardsText>
        </StyledTouchableOpacity>
      );
    };

    return (
      <View>
        <ListOfDecks />
        <View>
          <FlatList
            data={this.props.content}
            renderItem={this.renderItemList}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  content: selectDeckTitleAndQuestions(state),
});

export default connect(mapStateToProps)(Home);
