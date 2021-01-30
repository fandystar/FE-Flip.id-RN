import React, { useState } from 'react'
import { View, Text ,Modal,StyleSheet, TouchableOpacity,TextInput} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



const CardComponent = () => {
    const [index,setIndex] = useState(0)
    const [text,setText] = useState('')
    
    const [modalVisible,setModalVisible]=useState(false)

    let radio_props = [
        {label: 'URUTKAN', value: 0 },
        {label: 'Nama A-Z', value: 1 },
        {label: 'Nama Z-A', value: 2 },
        {label: 'Tanggal Terbaru', value: 3 },
        {label: 'Tanggal Terlama', value: 4 }
    ];
    
      return (
        
        <View>
            <TouchableOpacity
                onPress={()=>setModalVisible(true)}
            >
                <Text>{ index==0 ? 'URUTKAN' : radio_props[index.value].label}</Text>     
            </TouchableOpacity>
            
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType='fade'
            
            >
                <View style = {styles.ViewScreen}>
                    <View style ={styles.viewModal} >
                    <RadioForm
                            radio_props={radio_props}
                            initial={index==0? 0 :radio_props[index.value].value}
                            onPress={(value) => { 
                                                setIndex({value:value})
                                                setModalVisible(!modalVisible)
                                   }}           
                    />            
                   
                    </View>
                </View>
            </Modal>
    
           
           
        </View>
    )
}
const styles = StyleSheet.create({
    ViewScreen :{
        alignItems :'center',
        //backgroundColor :'gray',
        justifyContent:'flex-start',
        flex:1,
    },
    viewModal : {
        //flex :1,
        marginTop : 200,
        width :300,
        height :300,
        borderRadius :10,
        justifyContent:'center',
        alignItems:'flex-start',
        //borderBottomWidth:2,
       // padding : 135,
        backgroundColor : '#CAD3C8'
    },
    
})


export default CardComponent
