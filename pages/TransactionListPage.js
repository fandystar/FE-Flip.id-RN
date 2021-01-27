
import React from 'react'
import { useState,useEffect } from 'react'
import { View, Text} from 'react-native'
import Axios from 'axios'
import CardComponent from '../Components/CardComponent'


const TransactionListPage = () => {
    const[data,setData]=useState([])    
          
    const getData = async() =>{
        const r = await Axios.get('https://nextar.flip.id/frontend-test')
        setData(r.data)
        
    }    
    
    
    useEffect(() => {
        getData()
    }, [])

    console.log('data transaksi : ',data)  
    return (
        <View>
              <CardComponent data ={data} />            
        </View>
    )
}

export default TransactionListPage
