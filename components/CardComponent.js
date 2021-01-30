import React from 'react'
import { View, Text } from 'react-native'

const CardComponent = () => {
    return (
        <View style={{flexDirection:'row',marginHorizontal:70,marginVertical:20}}>
            <View style={{flex:6}}>
                <Text>satu</Text>
                <Text>dua</Text>
                
            </View>
            <View style={{flex:4}}>
                <Text>tiga</Text>
                <Text>empat</Text>
                <Text>lima</Text>
            </View>       
                    
                    
                    
        
        </View>
    )
}

export default CardComponent
