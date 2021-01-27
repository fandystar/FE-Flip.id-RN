import React from 'react'
import { View, Text } from 'react-native'


// 5 item

const CardComponent = (props) => {
    console.log('isi props : ',props.data)
   
    //for ( const id in props.data) {
        //console.log(props.data[id].beneficiary_bank)
        return (
           
            <View>
                 for ( const id in props.data) {
   
                    <Text> data ke 1 {props.data[id].beneficiary_bank}</Text>
                 }
            </View>
             
        )
    }


export default CardComponent
