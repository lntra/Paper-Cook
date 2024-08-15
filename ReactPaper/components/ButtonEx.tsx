import React from 'react';

import { Card, Button, Text } from 'react-native-paper';

interface ButtonExProps {
    name : string
    icon : string
}

export default function ButtonEx( { name , icon } : ButtonExProps ) {
  return (
    <Button
      mode="contained" icon={`${icon}`} onPress={() => alert("Apertado")}
      >
        {name}
    </Button>
  );
}

