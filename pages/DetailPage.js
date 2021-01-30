import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DetailPage = (props) => {
    
    const currencyFormat = (item) => {
        return 'Rp ' + item.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };
    
    const dateFormat =(item) =>{
        let months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
        let day= item[8]+item[9]
        let year=item[0]+item[1]+item[2]+item[3]
        let m= parseInt(item[5]+item[6])-1
        let month =months[m]
        return day+' '+month+' '+year    
    }
      
    return (
        <View >
            <Text>ID TRANSAKSI : #{props.route.params.data.id}</Text>
            <Text style={styles.line}> </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                <Text >DETAIL TRANSAKSI</Text>
                <TouchableOpacity
                    onPress={()=>props.navigation.goBack()}
                    >
                    <Text style={{fontSize:15,color:'#c0392b',fontWeight:'bold'}}>Tutup</Text>
                </TouchableOpacity>
            </View>  
            <Text style={styles.line}> </Text>
            <Text style={{marginTop:10,marginBottom:10}}>{props.route.params.data.sender_bank}➜{props.route.params.data.beneficiary_bank}</Text>
                
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View >
                    <Text>{props.route.params.data.beneficiary_name}</Text>
                    <Text>{props.route.params.data.account_number}</Text>
                </View>    
                <View >
                    <Text>NOMINAL</Text>
                    <Text>{currencyFormat(props.route.params.data.amount)}</Text>
                </View>
            </View>
           
            <View style={{flexDirection:'row',justifyContent:'space-between',
                            marginTop:15,marginBottom:15}}>
                <View>
                    <Text>BERITA TRANSFER</Text>
                    <Text>{props.route.params.data.remark}</Text>
                </View>
                <View>
                    <Text>KODE UNIK</Text>
                    <Text>{props.route.params.data.unique_code}</Text>
                </View>
            </View>
            
            
            <Text>WAKTU DIBUAT</Text>
            <Text>{dateFormat(props.route.params.data.created_at)}</Text>
               
        </View>
    )
}
            
 const styles = StyleSheet.create({
    line : {
        
        width: '100%',
        height: 12,
        borderBottomWidth :2,
    }
}) 

export default DetailPage
