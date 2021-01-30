import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {currencyFormat,dateFormat} from '../utils/helper'

const DetailPage = (props) => {
    
    
      
    return (
        <View style ={{marginHorizontal:30,marginVertical:20}}>
            <Text style={{fontSize:20,marginVertical:20,fontWeight:'bold'}}>ID TRANSAKSI : #{props.route.params.data.id}</Text>
            <Text style={styles.line}> </Text>
            <View style={{marginTop:10,marginHorizontal:0,flexDirection:'row',justifyContent:'space-between'}}>    
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold'}} >DETAIL TRANSAKSI</Text>
                </View>
                <View>
                    <TouchableOpacity
                            onPress={()=>props.navigation.goBack()}
                            >
                            <Text style={{fontSize:18,color:'#c0392b',fontWeight:'bold'}}>Tutup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.line}> </Text>
            
          <View  style={{flexDirection:'row'}}>  
            <View style={{flex:9}}>
                <Text style={{marginTop:10,marginBottom:10,fontSize:25,fontWeight:'bold'}}>{props.route.params.data.sender_bank.toUpperCase()} ➜ {props.route.params.data.beneficiary_bank==='mandiri'? 'Mandiri':  props.route.params.data.beneficiary_bank==='muamalat' ? 'Muamalat' : props.route.params.data.beneficiary_bank.toUpperCase()}</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{props.route.params.data.beneficiary_name}</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{props.route.params.data.account_number}</Text>
                <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>BERITA TRANSFER</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{props.route.params.data.remark}</Text>
                <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>TANGGAL DIBUAT</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{dateFormat(props.route.params.data.created_at)}</Text>

            </View>                                                     
            <View style={{flex:4}}>
                    <Text style={{marginTop:53,fontSize:18,fontWeight:'bold'}}>NOMINAL</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{currencyFormat(props.route.params.data.amount)}</Text>
                    <Text style={{marginTop:20,fontSize:18,fontWeight:'bold'}}>KODE UNIK</Text>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{props.route.params.data.unique_code}</Text>
            </View>    
            
        </View>  
    </View>
    )
}
            
 const styles = StyleSheet.create({
    line : {
        marginVertical:10,
        width: '100%',
        height: 12,
        borderBottomWidth :0.3,
    }
}) 
export default DetailPage
