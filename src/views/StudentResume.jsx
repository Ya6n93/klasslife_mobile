import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  HStack,
  Row,
  FlatList,
  Progress,
} from 'native-base';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
// import {useNavigation} from '@react-navigation/native';

export default function StudentResume(data) {
  const [initialStudentList, setInitialStudentsList] = useState([]);
  const [Students, setStudents] = useState([]);
  const [Search, setSearch] = useState('');
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();
  const Tittle = firstname;

  const {firstname, lastname} = data.route.params.data.data;

  useEffect(() => {
    navigation.setOptions({title: `${firstname} ${lastname}`});
  }, []);

  const Activities = [
    {
      id: '1',
      userName: 'Mathématiques',
      messageTime: '4 mins ago',
      messageText: 'not Done',
      value: 95,
    },
    {
      id: '2',
      userName: 'Français',
      messageTime: '2 hours ago',
      messageText: 'Done',
      value: 45,
    },
    {
      id: '3',
      userName: 'Sports',
      messageTime: '1 hours ago',
      messageText: 'Not done',
      value: 25,
    },
    {
      id: '4',
      userName: 'Arts Plastique',
      messageTime: '1 day ago',
      messageText: 'Done',
      value: 75,
    },
  ];

    return (
      <View flex={1}>
        <HStack>
          <View justifyContent="center">
            <Row>
              <Text fontFamily={'body'} fontSize={24} mr={3}>
                {data.firstname}
              </Text>
              <Text fontFamily={'body'} fontSize={24}>
                {data.lastname}
              </Text>
            </Row>
            <Row>
              <Text mx={3} my={1}>
                Classe:
              </Text>
              <Text my={1}>CE1</Text>
            </Row>
            <Row>
              <Text mx={3} my={1}>
                Proffesseur:
              </Text>
              <Text my={1}>Mr. RIMBAUD</Text>
            </Row>
            {/* Extract activities there and put loading bar for activities progressions*/}
            <Container>
              <FlatList
                data={Activities}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <Card>
                    <UserInfo>
                      <TextSection>
                        <UserInfoText>
                          <UserName>{item.userName}</UserName>
                          <PostTime>{item.messageTime}</PostTime>
                        </UserInfoText>
                        <Progress size="2xl" mb={4} value={item.value} />
                        <MessageText>{item.messageText}</MessageText>
                      </TextSection>
                    </UserInfo>
                  </Card>
                )}
              />
            </Container>
          </View>
        </HStack>
      </View>
    );
  };

export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  background-color: #ffffff;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-left: 0;
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: #333333;
`;