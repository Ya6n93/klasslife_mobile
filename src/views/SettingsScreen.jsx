import * as React from 'react';
import {View, Box, VStack, Button, Spacer} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function MenuScreen() {
  const Navigation = useNavigation();

  function handleSignOut() {
    console.log('signout');
    Navigation.navigate('Login');
  }

  return (
    <View flex={1}>
      <Box flex={1} p="2" w="90%" mx="auto" py="8">
        <VStack space={3} mt="5">
          <Button mt="2" colorScheme="primary" _text={{color: 'primary'}}>
            Options 1
          </Button>
          <Spacer />
          <Button mt="2" colorScheme="primary" _text={{color: 'primary'}}>
            Options 2
          </Button>
        </VStack>
      </Box>
      <Box bottom="0" p="2" w="90%" mx="auto" py="8">
        <VStack space={3} mt="5">
          <Button
            onPress={handleSignOut}
            mt="2"
            colorScheme="primary"
            _text={{color: 'primary'}}>
            Déconnexion
          </Button>
        </VStack>
      </Box>
    </View>
  );
}
