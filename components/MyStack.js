import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ParentsBottomTabNavigator from './ParentsBottomTabNavigator';
import ParentVideoDetailScreen from '../screens/parents/ParentVideoDetailScreen';
import ParentPlaylistScreen from '../screens/parents/ParentPlaylistScreen';
import ParentViewScreen from '../screens/parents/ParentViewScreen';
import ParentUpdateScreen from '../screens/parents/ParentUpdateScreen';
import ParentUserViewScreen from '../screens/parents/ParentUserViewScreen'
import LoginScreen from "../screens/LoginScreen";
import ParentUpdateUserScreen from "../screens/parents/ParentUpdateUserScreen"
import ParentCreateUserScreen from "../screens/parents/ParentCreateUserScreen"
import ParentCreatePlaylistScreen from "../screens/parents/ParentCreatePlaylistScreen"
import ParentSignUpScreen from "../screens/parents/ParentSignUpScreen";
 
const Stack = createNativeStackNavigator();
 
 
 
const MyStack = ({ onLogout }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen">
        {() => <ParentsBottomTabNavigator onLogout={onLogout} />}
      </Stack.Screen>
      <Stack.Screen name="Add Video" component={ParentVideoDetailScreen} />
      <Stack.Screen name="ParentViewScreen" component={ParentViewScreen} />
      <Stack.Screen name="ParentUserViewScreen" component={ParentUserViewScreen}/>
      <Stack.Screen name="ParentUpdateUserScreen" component={ParentUpdateUserScreen}/>
      <Stack.Screen name="Create User" component={ParentCreateUserScreen}/>
      <Stack.Screen name="Create Playlist" component={ParentCreatePlaylistScreen}/>
      <Stack.Screen name="Update" component={ParentUpdateScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign UP" component={ParentSignUpScreen}/>
    </Stack.Navigator>
  );
};
 
 
export default MyStack
 
const styles = StyleSheet.create({})

























// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ParentsBottomTabNavigator from './ParentsBottomTabNavigator';
// import ParentVideoDetailScreen from '../screens/parents/ParentVideoDetailScreen';
// import ParentPlaylistScreen from '../screens/parents/ParentPlaylistScreen';
// import ParentViewScreen from '../screens/parents/ParentViewScreen';
// import ParentUpdateScreen from '../screens/parents/ParentUpdateScreen';
// import ParentUserViewScreen from '../screens/parents/ParentUserViewScreen'

// const Stack = createNativeStackNavigator();



//     const MyStack = () => {
//         return (
//           <Stack.Navigator>
//             {/* <Stack.Screen name="Video" component={ParentVideoDetailScreen} /> */}
//             <Stack.Screen options={{headerShown: false}} name="Home" component={ParentsBottomTabNavigator}  />
//             <Stack.Screen name="Video" component={ParentVideoDetailScreen} />
//              <Stack.Screen name="Playlist" component={ParentPlaylistScreen} />
//              <Stack.Screen name="ParentUserViewScreen" component={ParentUserViewScreen}/>
//             <Stack.Screen name="ParentViewScreen" component={ParentViewScreen} />
//             <Stack.Screen name="Update" component={ParentUpdateScreen} /> 
//           </Stack.Navigator>
//         );
//       };
  

// export default MyStack

// const styles = StyleSheet.create({})

