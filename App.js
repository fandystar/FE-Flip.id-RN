import React, { useEffect } from 'react';
import { View,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardComponent from './components/CardComponent';
import DetailPage from './pages/DetailPage';
import TransactionListPage from './pages/TransactionListPage';
import { Provider } from 'react-redux'
import store from './Redux/store'
import {useDispatch} from 'react-redux'
//import {getData} from '../Redux/actions/GetTransactions'

const  Testing = (props) => {
  const dispatch= useDispatch()
  
  useEffect(() => {
    //dispatch(getData())
    
    
  }, [])
  
  
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
      <Button
      title='Others'
      onPress={() => props.navigation.navigate('Card')}
    />
  </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store} >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Transaction"
            screenOptions={{
              headerShown: false
            }}
          
          >
              <Stack.Screen name="Detail" component={DetailPage}/>
              <Stack.Screen name="Card" component={CardComponent}/>
              <Stack.Screen name="Transaction" component={TransactionListPage}/>
              <Stack.Screen name="Test" component={Testing}/>
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}


export default App

