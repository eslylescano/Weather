import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import Svg, { Line } from 'react-native-svg';

export default function LifeIndex() {
    return (
        <View style={{backgroundColor: '#FFFFFF30', borderRadius: 30, marginTop: 10, padding: 30}}>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Entypo name="cloud"size={23} color="white" />
                <Text style={{color:"white", fontSize:16,marginLeft:10}}>UV index</Text>
                </View>
                <Text style={{color:"white", fontSize:16}}>Low</Text>
            </View>
            <View style={{backgroundColor:'white',height:1,width:'90%',alignSelf:'center',marginTop:15}}></View>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                <View style={{flexDirection:'row'}}>
                <Entypo name="cloud"size={23} color="white" />
                <Text style={{color:"white", fontSize:16,marginLeft:10}}>Sunrise</Text>
                </View>
                <Text style={{color:"white", fontSize:16}}>04:56</Text>
            </View>
            <View style={{backgroundColor:'white',height:1,width:'90%',alignSelf:'center',marginTop:15}}></View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                <View style={{flexDirection:'row'}}>
                <Entypo name="cloud"size={23} color="white" />
                <Text style={{color:"white", fontSize:16,marginLeft:10}}>Sunset</Text>
                </View>
                <Text style={{color:"white", fontSize:16}}>21:32</Text>
            </View>


        </View>
    )
}

