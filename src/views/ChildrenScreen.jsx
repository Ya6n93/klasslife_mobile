import React, { useEffect, useState } from 'react';
import {ScrollView,View, Box, VStack, Text, HStack, Row, Button, Input, Icon, Spinner} from 'native-base';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Anticons from 'react-native-vector-icons/AntDesign';
import {BASE_URL, getValue} from './utils';
import {useNavigation} from '@react-navigation/native';
import useStore from '../../store';

export default function ChildrenScreen() {
  const [initialStudentList, setInitialStudentsList] = useState([]);
  const [Search, setSearch] = useState('');
  const [loader, setLoader] = useState(false);
  const Students = useStore(state => state.students);


  const navigation = useNavigation();
  const Tittle = Students?.length > 0 ? 'Mes enfants' : 'Mon enfant';

  function getChildren(token) {
    axios
      .get(BASE_URL + '/students', {
        'headers': {
          'Authorization': 'Bearer ' + token
        }})
      .then(response => {     
        useStore.setState({students: response.data['hydra:member']})
        setInitialStudentsList(response.data['hydra:member'])
        setLoader(false)
      })
      .catch((error) => alert(error));
      setLoader(false)
  }

  console.log(Students)

  useEffect(() => {
    setLoader(true)
    navigation.setOptions({title: `${Tittle}`});
    getValue('access_token')
    .then(
      (token) => getChildren(token)
    )
  }, []);

  const filtredSudentList = initialStudentList
    .filter(student => {
      const firstName = student?.firstname?.toUpperCase().trim();
      const lastName = student?.lastname?.toUpperCase().trim();
      const searchItem = Search?.toUpperCase().trim();
      
      return (firstName?.includes(searchItem) || lastName?.includes(searchItem))
    })


  const StudentCard = (data) => {
  
  return(
  <View flex={1}>
    <Button onPress={() => navigation.navigate('Details', {navigation: navigation, data: data})} variant={'unstyled'}>
  <Box
    py={2}
    px={6}
    marginBottom={3}
    bgColor={'common.lightGrey'}
    borderColor={'primary.500'}
    borderWidth={4}
    flexDirection="row"
    borderRadius={12}>
    <HStack>     
      <View justifyContent="center">
        <Row>
        <Text fontFamily={'body'} fontSize={24} mr={3}>
          {data.data.firstname}
        </Text>
        <Text fontFamily={'body'} fontSize={24} >
          {data.data.lastname}
        </Text>
        </Row>
        <Row>
        <Text mx={3} my={1}>
          Classe:
        </Text>
        <Text my={1}>
          CE1
        </Text>
        </Row>
        <Row>
        <Text mx={3} my={1}>
          Proffesseur:
        </Text>
        <Text my={1}>
          Mr. RIMBAUD
        </Text>
        </Row>
      </View>
    </HStack>
  <HStack alignSelf={'center'} justifyContent={"center"}>
    <Anticons size={18} allowFontScaling name="right" />
    </HStack>
  </Box>
  </Button>
  </View>
  );
}

  return (
    <>
      {/* <HStack justifyContent={'center'} px={5}>
        <Button  onPress={() => {return <ActivityList /> }}>Mes élèves</Button>
        <Button  onPress={() => {return <ActivityList /> }}>Activités</Button>
      </HStack> */}
    <View flex={1}>
      <HStack py={3}>
        <HStack w="100%" justifyContent="center">
          <Input 
            fontSize="16" 
            onChangeText={(text) => setSearch(text)}
            autoCapitalize={'none'} 
            placeholder={"Search"}
            variant="filled" 
            width="90%"
            borderWidth="0"
            borderRadius="10" 
            px="2"
            mt="2"
            InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />
            } />} />
        </HStack>
    </HStack>
    <ScrollView showsVerticalScrollIndicator={false} shadow={9} height={100} padding={2} width={'90%'} alignSelf={'center'} flex={1}>
      <View marginBottom={10}>
      {loader ? 
      <HStack mt="1/2" justifyContent="center" alignItems="center">
        <Spinner size={"lg"} />
      </HStack> 
      : filtredSudentList.map((student, id) => <StudentCard data={student} key={id} />)}
      </View>
      </ScrollView>
    </View>
    </>
  );
}
