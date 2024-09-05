import React from 'react';

import { Card, Button, Text } from 'react-native-paper';
import { router } from 'expo-router';

interface ButtonExProps {
    name : string
    icon: string
    path?: string
}

export default function ButtonEx( { name , icon, path } : ButtonExProps ) {

  const handleNav = () => {
    if(path === "dashboard"){
      router.navigate('/dashboard');
    } else if (path === "home") {
      router.navigate('/home');
    } else if (path === "profile") {
      router.navigate('/profile')
    } else if (path === "item") {
      router.navigate('/item')
    }
  };

  return (
    <Button
      mode="contained" icon={`${icon}`} onPress={handleNav}
      >
        {name}
    </Button>
  );
}

