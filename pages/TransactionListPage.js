import { Searchbar } from 'react-native-paper';
import React,{ useState,useEffect } from 'react'
import { Modal,FlatList, Text,TouchableOpacity,View} from 'react-native'
import Axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';
//import CardComponent from '../Components/CardComponent'

//data{props.data[id].beneficiary_bank}
const TransactionListPage = (props) => {
    
    const[data,setData]=useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [filterData,setFilterData] =useState([])
    
    
    
    // fungsi
    const onChangeSearch = query => {
        setSearchQuery(query);
        if(query == ''){
            setFilterData(data1);
        } else {
            const filterData1 = data1.filter( datum => datum.beneficiary_bank.toLowerCase().includes(query.toLowerCase()));
            const filterData2 = data1.filter( datum => datum.beneficiary_name.toLowerCase().includes(query.toLowerCase()));
            const filterData3 = data1.filterData1( datum => datum.amount == String(query));
            // const filterData3 = data1.filter( datum => datum.amount.toLowerCase().includes(query.toLowerCase()));
            if(filterData1.length > 0) setFilterData(filterData1);            
            if(filterData2.length > 0) setFilterData(filterData2);            
            if(filterData3.length > 0) setFilterData(filterData3);    }
    }
            // const filterData = data1.filter( datum => datum.beneficiary_name.toLowerCase().includes(query.toLowerCase()));
            // setFilterData(filterData)
            // if (filterData.length==0) {
            //     const filterData = data1.filter( datum => datum.beneficiary_bank.toLowerCase().includes(query.toLowerCase()));
            //     setFilterData(filterData) }
            //     else if(filterData.length==0) {
            //      const filterData = data1.filter( datum => String(datum.amount).toLowerCase().includes(query.toLowerCase()));
            //    const filterData = data1.filter( datum => datum.amount==='441845')
            //     setFilterData(filterData);
            //     console.log('test match number')
            //     console.log('data filter : ',filterData)
        
            
           
    
    
    const getData = async() =>{
            const r = await Axios.get('https://nextar.flip.id/frontend-test')
            setData(r.data) 
        
           
               
    }    
    
    
    useEffect(() => {
        getData()
        
    }, [])

    //console.log('data flip : ',data)                
    let data1=[]
    for ( let id in data) {
        data1.push((data[id]))
    } 
    //console.log('data 1 : ',data1)
    
    const currencyFormat = (num) => {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };
    
    const handleRenderItem =({item}) =>{
        return (
            <View >
                <TouchableOpacity 
                    style={{backgroundColor:'lightgrey',justifyContent:'space-evenly',flexDirection:'row',marginTop:10}}
                    onPress={()=>props.navigation.navigate('Detail',{data:item})}
                    
                    >
                    <View >
                        <Text>{item.sender_bank}➜{item.beneficiary_bank}</Text>
                        <Text>{item.beneficiary_name}</Text>
                        <Text>{currencyFormat(item.amount)}·{item.created_at}</Text>
                    </View>
                    <View>
                        <Text>{item.status}</Text>
                    </View>
                </TouchableOpacity>
                                
                
            </View>
        )
    }
    
    return (
        <View style={{marginTop:10}}>
            <ScrollView>
            <Searchbar
                        icon={require('../Sample/loupe.png')}
                        placeholder="cari nama,bank atau nominal"
                        onChangeText={onChangeSearch}
                        style={{ width: '100%', height:40,marginHorizontal:5  }}
                        value={searchQuery}
            />
              
            <FlatList            
                data={ searchQuery.length==0 ? data1 : filterData}
                keyExtractor={key=>key.id}
                renderItem={handleRenderItem}
                
            />
        </ScrollView>
        </View>
    )
}

export default TransactionListPage
