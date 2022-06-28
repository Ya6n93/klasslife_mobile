import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/assets/theme';

import LoginScreen from './src/views/LoginScreen';
import RegisterScreen from './src/views/RegisterScreen';
import MenuScreen from './src/views/MenuScreen';
import SettingsScreen from './src/views/SettingsScreen';
import StudentResume from './src/views/StudentResume'
import ChildrenScreen from './src/views/ChildrenScreen';
import ChildrenMenu from './src/views/ChildrenMenu'
import CalendarScreen from './src/views/CalendarScreen';
import TicketScreen from './src/views/TicketScreen';
import ActivityList from './src/views/ActivityList'
import ChatRoom from './src/views/ChatRoom';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {colors} = theme;

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: true }} name="Conversations" component={TicketScreen} />
      <Stack.Screen options={{ headerBackTitleVisible: false }} name="ChatRoom" component={ChatRoom} />
    </Stack.Navigator>
  );
}

function StudentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mon Espace" component={ChildrenMenu} />
      <Stack.Screen name="Activités" component={ActivityList} />
      <Stack.Screen name="Mon enfant" component={ChildrenScreen} />
      <Stack.Screen options={{ headerBackTitleVisible: false }} name="Details" component={StudentResume} />
    </Stack.Navigator>
  );
}

function BottomStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.primary[500],
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Acceuil"
        component={MenuScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-child"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
        name="Mon enfant"
        component={StudentStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={size}
            />
          ),
        }}
        name="Agenda"
        component={CalendarScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="Messagerie"
        component={ChatStack}
      />
      <Tab.Screen
        name="Parametres"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

function App() {
  Icon.loadFont();

  return (
    <NavigationContainer theme={theme}>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator
          screenOptions={{headerShown: false, headerTitleAlign: 'center'}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={BottomStackScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
