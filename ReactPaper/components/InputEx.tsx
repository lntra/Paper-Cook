import { StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';

type InputExProps = {
  type: string;
};

export default function InputEx({ type }: InputExProps) {
  
  return (
      <>
      {type === "text" && (
        <TextInput
          label="Text Input"
          secureTextEntry={false} 
        />
      )}
      {type === "password" && (
        <TextInput
          label="Password Input"
          secureTextEntry={true} 
        />
      )}
    </>
  );
}
