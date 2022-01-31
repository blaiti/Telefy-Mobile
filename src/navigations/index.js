import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../config/routes';

const Stack = createStackNavigator();

// Auth Stack
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Discussion from '../screens/program/discussion';

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={routes.Login} component={Login} />
        <Stack.Screen name={routes.Register} component={Register} />
    </Stack.Navigator>
  );
}

// Home Stack
import Home from '../screens/home';
import TVProgram from '../screens/program/tv-program';

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name={routes.Home} component={Home} />
        <Stack.Screen name={routes.TVProgram} component={TVProgram} />
    </Stack.Navigator>
  );
}

// Main Stack
import AuthContext from '../context/auth-context';
import Splash from '../screens/splash';
import Loading from '../screens/splash/loading';

function MainStack() {
    const {state} = React.useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
                {state.isLoading ?
                    <Stack.Screen name={routes.Loading} component={Loading} />
                : state.first == null ?
                  <Stack.Screen name={routes.Splash} component={Splash} />
                : 
                    <>
                      <Stack.Screen name={routes.HomeStack} component={HomeStack} />
                    </>
                }
                {state.userToken == null ?
                  <Stack.Screen name={routes.AuthStack} component={AuthStack} />
                : null }
                <Stack.Screen name={routes.Discussion} component={Discussion} />
                
        </Stack.Navigator>
        
    );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

export default RootNavigator;
