import React, {useState, useEffect} from 'react';

import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  View,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {passwordRules, saveValue} from './utils';
import {BASE_URL} from './utils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigation = useNavigation();

  function handleLogin() {
    axios
      // todo remove default user at end of dev
      .post(BASE_URL + '/login', {
        email: 'terencevy@gmail.com',
        password: 'terence1234',
      })
      .then(response => {
        const userToken = response.data.token;
        saveValue('access_token', userToken).then(() =>
          Navigation.navigate('Home'),
        );
      })
      .catch(error => {
        alert("ERROR:", error);
      });
  }

  useEffect(() => {
    AsyncStorage.removeItem('access_token');
  }, []);

  return (
    <View flex={1}>
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Klasslife
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Connectez-vous pour continuer
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'black',
                fontSize: 'xs',
                fontWeight: 500,
                fontSize: 16,
              }}>
              Email
            </FormControl.Label>
            <Input
              autoCorrect={false}
              autoCapitalize={false}
              onChangeText={text => setEmail(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'black',
                fontSize: 'xs',
                fontWeight: 500,
                fontSize: 16,
              }}>
              Password
            </FormControl.Label>
            <Input
              autoCorrect={false}
              autoCapitalize={false}
              onChangeText={text => setPassword(text)}
              passwordRules={passwordRules}
              type="password"
            />
          </FormControl>
          <Button
            onPress={handleLogin}
            mt="4"
            color="primary"
            _text={{color: 'primary'}}>
            Se connecter
          </Button>
          {/* <Button
            onPress={() => Navigation.navigate('Register')}
            mt="2"
            colorScheme="primary"
            _text={{color: 'primary'}}>
            Sign up
          </Button> */}
        </VStack>
      </Box>
    </View>
  );
}
