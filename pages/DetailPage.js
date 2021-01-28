import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DetailPage = (props) => {
    //console.log(props.route.params)
    var hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum&  #39;at','Sabtu'];
    var bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

    var tanggal = new Date().getDate(props.route.params.data.created_at);
    var _hari = new Date().getDay(props.route.params.data.created_at);
    var _bulan = new Date().getMonth(props.route.params.data.created_at);
    var _tahun = new Date().getYear(props.route.params.data.created_at);

    var hari = hari[_hari];
    var bulan = bulan[_bulan];

    var tahun = (_tahun < 1000) ? _tahun + 1900 : _tahun;
    let tggl=props.route.params.data.created_at
    console.log(tggl.split(' '))
    //alert(tggl.split(''))
    
    //console.log(hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun);
    //alert(hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun)    
        
    
    
    return (
        <View >
            <Text>ID TRANSAKSI : #{props.route.params.data.id}</Text>
            <Text style={styles.line}> </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text >DETAIL TRANSAKSI</Text>
                <TouchableOpacity
                    onPress={()=>props.navigation.goBack()}
                    >
                    <Text style={{fontSize:15,color:'orange',fontWeight:'bold'}}>Tutup</Text>
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
                    <Text>{props.route.params.data.amount}</Text>
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
            <Text>{props.route.params.data.created_at}</Text>
            
            
            
            <Text></Text>
        
        
        </View>
    )
}
{/* <Text>ID TRANSAKSI : #{props.route.params.data.id}</Text>
            <Text style={styles.line}> </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text >DETAIL TRANSAKSI</Text>
                <TouchableOpacity
                    onPress={()=>props.navigation.goBack()}
                    >
                    <Text style={{fontSize:15,color:'orange',fontWeight:'bold'}}>Tutup</Text>
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
                    <Text>{props.route.params.data.amount}</Text>
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
            <Text>{props.route.params.data.created_at}</Text> */}
            
            
 const styles = StyleSheet.create({
    line : {
        
        width: '100%',
        height: 12,
        borderBottomWidth :2,
    }
}) 

export default DetailPage
