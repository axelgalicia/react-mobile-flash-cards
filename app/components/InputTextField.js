import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const FieldLabelText = styled.Text`
  font-size: 18;
  padding-top: 10;
`;

const TextInputWrapper = styled.View`
  padding-horizontal: 18;
`;

const InputTextField = ({
  fieldLabel,
  maxLength,
  placeholder,
  onChangeText,
}) => (
    <TextInputWrapper>
      <FieldLabelText>{fieldLabel}</FieldLabelText>
      <TextInput maxLength={maxLength} blurOnSubmit
        keyboardType="default"
        style={{ height: 40 }}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </TextInputWrapper>
  );

export default InputTextField;
