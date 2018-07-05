import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import ButtonContainer from './Buttons/ButtonContainer';
import GenericButton from './Buttons/GenericButton';

const StyledView = styled.View`
  flex: 1;
`;

const StyledTitleText = styled.Text`
  font-size: 15;
  padding-vertical: 15;
  padding-horizontal: 15;
  text-align: center;
`;

const StyledQuestionsNumText = styled.Text`
  font-size: 14;
  padding-vertical: 15;
  padding-horizontal: 15;
  text-align: center;
`;

const QuizMenu = (props) => {
  const { title, questions } = props.navigation.state.params;

  return (
    <StyledView>
      <StyledTitleText>Quiz Title: {title}</StyledTitleText>
      <StyledQuestionsNumText>{props.quizLength} cards</StyledQuestionsNumText>
      <ButtonContainer>
        <GenericButton
          text="Add Card"
          onPress={() => props.navigation.navigate('NewCard', { title })}
        />
        <GenericButton
          text="Start quiz"
          onPress={() =>
            props.navigation.navigate('Quiz', {
              title,
              questions,
            })
          }
        />
        <GenericButton
          text="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
      </ButtonContainer>
    </StyledView>
  );
};

QuizMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
  quizLength: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  quizLength: state.decks[ownProps.navigation.state.params.title].quizLength,
});

export default connect(mapStateToProps)(QuizMenu);
