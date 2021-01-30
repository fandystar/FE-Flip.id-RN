import { Searchbar } from 'react-native-paper'
import React,{ useState,useEffect } from 'react'
import { Modal,FlatList, Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import Axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
import RadioForm from 'react-native-simple-radio-button'
import {currencyFormat,dateFormat} from '../utils/helper'
//import {useSelector} from 'react-redux'
//import {getData} from '../Redux/actions/GetTransactions'


const TransactionListPage = (props) => {
    const [index,setIndex] = useState(0)
    const[data,setData]=useState([])
    const[sortData,SetSortData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [filterData,setFilterData] =useState([])
    const [modalVisible,setModalVisible]=useState(false)
      
    
   //const transactions = useSelector((state) => state.GetTransansactionsReducers.transactions)
    

    let radio_props = [
        {label: 'URUTKAN', value: 0 },
        {label: 'Nama A-Z', value: 1 },
        {label: 'Nama Z-A', value: 2 },
        {label: 'Tanggal Terbaru', value: 3 },
        {label: 'Tanggal Terlama', value: 4 }
    ]
    
    const handleSortData =(value) =>{
        //alert('indek : '+value)
        if (value===1) {
            // A-Z
            let test=data1.sort((a,b)=>(a.beneficiary_name>b.beneficiary_name)? 1 : (b.beneficiary_name>a.beneficiary_name)? -1 :0 )
            SetSortData(test)
        } else if (value==2) {
            // Z-A
            let test=data1.sort((a,b)=>(b.beneficiary_name>a.beneficiary_name)? 1 : (a.beneficiary_name>b.beneficiary_name)? -1 :0 )
            SetSortData(test)
        } else if (value==3) {
            // newest date
            let newDate = [...data1]
            newDate.sort(function(a, b) {
                a = new Date(a.created_at)
                b = new Date(b.created_at)
                return b>a ? 1 : b<a ? -1 : 0
            })
            SetSortData(newDate)
        } else if (value == 4) {
            // oldest date
            let oldDate=[...data1]
            oldDate.sort(function(a, b) {
                a = new Date(a.created_at)
                b = new Date(b.created_at)
                return a>b ? 1 : a<b? -1 : 0
            })
            let data2 = []
            for (let k=oldDate.length-1;k>=0;k=k-1){
                 data2.push(oldDate[k])   
            }
            SetSortData(data2)
        } else {
            SetSortData(data1)
        }
    }
    // fungsi
    const onChangeSearch = query => {
        setSearchQuery(query)
        if(query == '') { 
            setFilterData(data1) 
        } else {
            let filterAmount = data1.filter( datum => String(datum.amount).includes(query))
            
            let filterName = data1.filter( datum => datum.beneficiary_bank.toLowerCase().includes(query.toLowerCase()))
            
            let filterBank =data1.filter( datum => datum.beneficiary_name.toLowerCase().includes(query.toLowerCase()))
            
            if (filterName.length != 0 ){
                setFilterData(filterName)
                
            } else if(filterBank.length != 0) {
                setFilterData(filterBank)
                
            } else if(filterAmount.length != 0) {
                setFilterData(filterAmount)
                
            }
        }    
            
    }             
    
    const getData = async() =>{
            const r = await Axios.get('https://nextar.flip.id/frontend-test')
            setData(r.data) 
    }    
    
    //  duplikasi data
    let data1=[]
    
    for ( let id in data) {
            data1.push((data[id]))
    } 
   
    
    useEffect(() => {
        //dispatch(getData())
        getData()
    }, [])

  
    
    const handleRenderItem =({item}) =>{
        
        const backgroundColor = item.status === 'SUCCESS' ? "#10ac84" : "white"
        const color = item.status === 'SUCCESS' ? "white" : "black"
        const borderWidth = item.status === 'SUCCESS' ? 0 : 2
        const borderColor = item.status === 'SUCCESS' ? "#10ac84" : "orange"
        const bc  =  item.status === 'SUCCESS' ? "#10ac84" : "orange"
             
        //console.log('bank : ',item.beneficiary_bank)
        //console.log('kapital huruf pertama : ',item.beneficiary_bank[0]
        
        return (
            <View style={{marginHorizontal:10}}>
                <View >
                    <TouchableOpacity 
                        style={{borderRadius:10,backgroundColor:'white',marginTop:7,borderLeftWidth:10,borderColor:bc}}
                        onPress={()=>props.navigation.navigate('Detail',{data:item})}
                        
                        >
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:10,marginHorizontal:20}} >
                                <Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>{item.sender_bank.toUpperCase()} ➜ {item.beneficiary_bank==='mandiri'? 'Mandiri':  item.beneficiary_bank==='muamalat' ? 'Muamalat' : item.beneficiary_bank.toUpperCase()}</Text>
                                <Text style={{fontSize:20}}>{item.beneficiary_name}</Text>
                                <Text style={{fontSize:15,marginBottom:20}}>{currencyFormat(item.amount)} ● {dateFormat(item.created_at)}</Text>
                            </View>
                            <View style={{flex:4}}>
                                <TouchableOpacity style={[styles.cssTouchableOpacity,{backgroundColor,borderColor,borderWidth}]}>
                                    <Text style={[styles.cssText,{color}]}>{item.status}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                                
                </View>
            </View>
        )
    }
   
    return (
        <View style={{marginTop:10,backgroundColor:'lightgrey'}}>
            <ScrollView>
            <View >
            <View style={{position:'relative',zIndex:0}} >
                    <Searchbar
                        icon={require('../sample/loupe.png')}
                        placeholder="cari nama,bank atau nominal"
                        onChangeText={onChangeSearch}
                        style={{ width: '100%', height:40,marginHorizontal:5  }}
                        value={searchQuery}
                        />
                </View>
                <View style={{position:'absolute',top:0,
                                left:300,zIndex:1}} >
                    <TouchableOpacity
                         onPress={()=>setModalVisible(true)}
                    >
                        <Text style={{fontWeight:'bold',color:'#c0392b',height:40,fontSize:15,marginTop:7}}>{ index==0 ? 'URUTKAN' : radio_props[index.value].label} ▼</Text>     
                    </TouchableOpacity>
                </View>
            </View>
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
                                                handleSortData(value)
                                                setModalVisible(!modalVisible)
                                                    
                                   }}           
                    />            
                   
                    </View>
                </View>
            </Modal>
            <FlatList            
                data={searchQuery? filterData : index==0 ? data1 : sortData}
                keyExtractor={key=>key.id}
                renderItem={handleRenderItem}
                
            />
        </ScrollView>
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
        backgroundColor : '#CAD3C8'
    },
    cssTouchableOpacity : {
        borderRadius : 7,
        height : 30,
        width : 80 ,
        alignItems: 'center',
        justifyContent : 'center',
        //color :'white',
       // backgroundColor: '',
        marginRight : 4,
        marginTop : 40,
        marginBottom: 10,             
        //borderWidth:2,
        //borderColor:'orange'
       
        // borderStyle:'solid',
       // borderColor : 'orange'
    },
    cssText : {
        fontWeight :'bold',
        color :'white',
        fontSize: 14, }

})

export default TransactionListPage



