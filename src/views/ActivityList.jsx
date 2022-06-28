import React, {useEffect, useState} from 'react';
import {View, Text, HStack, Row, FlatList, Progress} from 'native-base';
import styled from 'styled-components';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import useStore from '../../store';
import {BASE_URL, getValue} from './utils';

export default function StudentResume() {
  const Activities = useStore(state => state.activities);
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();

  function getActivities(token) {
    axios
      .get(BASE_URL + '/student_activities', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        console.log(response);
        useStore.setState({activities: response.data['hydra:member']});
        setLoader(false);
      })
      .catch(error => alert(error));
  }

  useEffect(() => {
    navigation.setOptions({title: 'Activités'});
    getValue('access_token').then(token => getActivities(token));
  }, []);

  const randomInt = Math.floor(Math.random() * 100);

  return (
    <View flex={1}>
      <HStack>
        <View justifyContent="center">
          <Row>
            <Text mx={3} my={1}>
              Classe:
            </Text>
            <Text my={1}>CE1</Text>
          </Row>
          {/* Extract activities there and put loading bar for activities progressions*/}
          {loader ? (
            <HStack mt="1/2" justifyContent="center" alignItems="center">
              <Spinner size={'lg'} />
            </HStack>
          ) : (
            <Container>
              <FlatList
                data={Activities}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <Card>
                    <UserInfo>
                      <TextSection>
                        <UserInfoText>
                          <TitleActivity>{'Activité: ' + item.activity.title}</TitleActivity>
                        </UserInfoText>
                        <View flexDirection={'row'}>
                          <UserName>{item.student.firstname + ' '}</UserName>
                          <UserName>{item.student.lastname}</UserName>
                        </View>
                        <HStack>
                          <Text>Description</Text>
                        </HStack>
                        <MessageText>{item.messageText}</MessageText>
                        <Progress size="2xl" mb={3} value={randomInt} />
                      </TextSection>
                    </UserInfo>
                  </Card>
                )}
              />
            </Container>
          )}
        </View>
      </HStack>
    </View>
  );
}

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
`;

export const TitleActivity = styled.Text`
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
