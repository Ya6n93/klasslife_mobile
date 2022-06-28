import React, {useEffect} from 'react';
import {
  View,
  HStack,
  Image,
  Button,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';

export default function ChildrenMenu() {
  const navigation = useNavigation();

  useEffect(() => {
  }, []);

    return (
      <View flex={1} height={'100%'}>
        <>
          <View>
              <Button onPress={() => navigation.navigate('Mon enfant')} backgroundColor={'#FFFF'} _text={{ color: 'black'}} w={'100%' } h={'50%'}>
                Mes Classes
              </Button>
              <Button onPress={() => navigation.navigate('Activités')} _text={{ color: 'black'}} w={'100%'} h={'50%'}>
                Activités
            </Button>
          </View>
        </>
      </View>
    );
  };


