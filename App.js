import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';

//1)setup redux.
//create stacks of screens for navigation
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator> 
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="MapScreen" component={MapScreen}/>
          </Stack.Navigator>
        </SafeAreaProvider>
     </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3612a',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
