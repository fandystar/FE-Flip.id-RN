import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DetailPage = (props) => {
    
    const currencyFormat = (item) => {
        return 'Rp ' + item.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    
    const dateFormat =(item) =>{
        let months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
        let day= item[8]+item[9]
        let year=item[0]+item[1]+item[2]+item[3]
        let m= parseInt(item[5]+item[6])-1
        let month =months[m]
        return day+' '+month+' '+year    
    }
      
    return (
        <View style ={{marginHorizontal:30,marginVertical:20}}>
            <Text style={{fontSize:20,marginVertical:20}}>ID TRANSAKSI : #{props.route.params.data.id}</Text>
            <Text style={styles.line}> </Text>
            <View style={{marginTop:10,marginHorizontal:0,flexDirection:'row',justifyContent:'space-between'}}>    
                <View>
                    <Text style={{fontSize:18}} >DETAIL TRANSAKSI</Text>
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
                <Text style={{marginTop:10,marginBottom:10,fontSize:20,fontWeight:'bold'}}>{props.route.params.data.sender_bank}➜{props.route.params.data.beneficiary_bank}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{props.route.params.data.beneficiary_name}</Text>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{props.route.params.data.account_number}</Text>
                <Text style={{marginTop:20,fontSize:15,fontWeight:'bold'}}>BERITA TRANSFER</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{props.route.params.data.remark}</Text>
                <Text style={{marginTop:20,fontSize:15,fontWeight:'bold'}}>TANGGAL DIBUAT</Text>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{dateFormat(props.route.params.data.created_at)}</Text>

            </View>
            <View style={{flex:4}}>
                    <Text style={{marginTop:46,fontSize:19,fontWeight:'bold'}}>NOMINAL</Text>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>{currencyFormat(props.route.params.data.amount)}</Text>
                    <Text style={{marginTop:20,fontSize:15,fontWeight:'bold'}}>KODE UNIK</Text>
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
