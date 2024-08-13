import { StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';

export default function InputEx() {
  return (
      <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
      ></TextInput>
  );
}
