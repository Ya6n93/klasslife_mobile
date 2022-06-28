import * as React from 'react';
import {View, Box, VStack, Button, Spacer} from 'native-base';
import EventCalendar from 'react-native-events-calendar';
import {Dimensions} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

export default function CalendarScreen() {
  // const Navigation = useNavigation();

  let width = Dimensions.get('window').width;

  const events = [
    {
      start: '2017-09-07 00:30:00',
      end: '2017-09-07 01:30:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 01:30:00',
      end: '2017-09-07 02:20:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 04:10:00',
      end: '2017-09-07 04:40:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 01:05:00',
      end: '2017-09-07 01:45:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-07 14:30:00',
      end: '2017-09-07 16:30:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-08 01:20:00',
      end: '2017-09-08 02:20:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-08 04:10:00',
      end: '2017-09-08 04:40:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-08 00:45:00',
      end: '2017-09-08 01:45:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-08 11:30:00',
      end: '2017-09-08 12:30:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-09 01:30:00',
      end: '2017-09-09 02:00:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-09 03:10:00',
      end: '2017-09-09 03:40:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
    {
      start: '2017-09-09 00:10:00',
      end: '2017-09-09 01:45:00',
      title: 'Dr. Mariana Joseph',
      summary: '3412 Piedmont Rd NE, GA 3032',
    },
  ];

  function handleSignOut() {
    console.log(width);
  }

  return (
    <View flex={1}>
      <EventCalendar
        eventTapped={handleSignOut}
        events={events}
        width={width}
        initDate={'2017-09-08'}
      />
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
    </View>
  );
}
