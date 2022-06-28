import * as React from 'react';
import {View, Box, Stack, AspectRatio, HStack, Image, Heading, Text, ScrollView, Spacer} from 'native-base';
import { justifyContent } from 'styled-system';
// import {useNavigation} from '@react-navigation/native';

export default function MenuScreen() {
  // const Navigation = useNavigation();

  function handleSignOut() {
    console.log('signout');
  }

  const Card = () => {
    return (
      <Box
        margin="5"
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="primary.500"
        borderWidth="2"
        _dark={{}}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text
              fontSize="xs"
              _light={{}}
              _dark={{}}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    );
  };

  return (
    <View flex={1} alignItems={'center'}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <View borderBottomWidth={2} borderBottomColor={'primary.500'}>
          <Heading fontSize={18}>Dernières actualités</Heading>
        </View>
        <View alignItems={'center'}>
          <Card />
          <Card />
        </View>
        <View borderBottomWidth={2} borderBottomColor={'primary.500'}>
          <Heading fontSize={18}>Dernières notes</Heading>
        </View>
      </ScrollView>
    </View>
  );
}
