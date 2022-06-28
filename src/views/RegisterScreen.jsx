import * as React from 'react';
import {
  View,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {passwordRules} from './utils';

export default function RegisterScreen() {
  // const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const Navigation = useNavigation();

  function handleRegister() {
    console.log('register');
  }

  return (
    <View flex={1}>
      <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{color: 'primary', fontSize: 'xs', fontWeight: 500}}>
              Email
            </FormControl.Label>
            <Input onChangeText={text => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{color: 'primary', fontSize: 'xs', fontWeight: 500}}>
              Password
            </FormControl.Label>
            <Input
              type={'password'}
              passwordRules={passwordRules}
              onChangeText={text => setPassword(text)}
            />
          </FormControl>
          <Button
            onPress={handleRegister}
            mt="2"
            colorScheme="primary"
            _text={{color: 'primary'}}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </View>
  );
}
