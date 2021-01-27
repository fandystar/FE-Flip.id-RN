import React from 'react';
import { View, Text,Picker ,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from './pages/TransactionListPage';
import Detail from './pages/DetailPage';


const  Testing = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    
    <Button
      title='Transaction List'
      onPress={() => props.navigation.navigate('Transaction')}
    />
    <Button
      title='Detail'
      onPress={() => props.navigation.navigate('Detail')}
    />
  </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        
        
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Transaction" component={TransactionList}/>
        <Stack.Screen name="Test" component={Testing}/>
       
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

