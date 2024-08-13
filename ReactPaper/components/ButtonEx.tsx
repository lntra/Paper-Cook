import React from 'react';

import { Card, Button, Text } from 'react-native-paper';

interface ButtonExProps {
    name : string
}

export default function ButtonEx( { name } : ButtonExProps ) {
  return (
    <Button
      mode="contained" icon="camera" onPress={() => alert("Apertado")}
      >
        {name}
    </Button>
  );
}

