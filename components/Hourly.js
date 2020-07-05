import React from 'react'
import { StyleSheet, Text, View, ScrollView,FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function Hourly() {
    const data = [
        { date: new Date('2014-09-27T18:09:49-0300'), icon: 'drop', humidity: 30, feels_like: 10 },
        { date: new Date('2014-09-27T18:12:49-0300'), icon: 'drop', humidity: 40, feels_like: 10 },
        { date: new Date('2014-09-27T18:15:49-0300'), icon: 'drop', humidity: 50, feels_like: 10 },
        { date: new Date('2014-09-27T18:18:49-0300'), icon: 'drop', humidity: 10, feels_like: 10 },
        { date: new Date('2014-09-27T18:21:49-0300'), icon: 'drop', humidity: 17, feels_like: 5 },
        { date: new Date('2014-09-27T18:00:49-0300'), icon: 'drop', humidity: 19, feels_like: 8 },
        { date: new Date('2014-09-27T18:03:49-0300'), icon: 'drop', humidity: 21, feels_like: 10 },
        { date: new Date('2014-09-27T18:06:49-0300'), icon: 'drop', humidity: 29, feels_like: 20 }]

    const heightFeelsLike=(data,{feels_like})=>{
        const minHeight=5;
        const maxHeight=32;
        const feelsLikeArr = data.map(item=>item.feels_like);
        const min = Math.min(...feelsLikeArr);
        const max = Math.max(...feelsLikeArr);
        if(min===max)
            return maxHeight;
            return minHeight+(feels_like-min)/((max-min)/(maxHeight-minHeight));
        
    }

    const renderHour = (data) => {
        return <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>

                    <View style={{ alignItems: 'center', marginRight: 25 }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>9</Text>
                    <Entypo name="cloud" size={20} color="white" style={{ marginTop: 15 }} />
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Entypo name={item.icon} size={14} color="white" />
                        <Text style={{ color: 'white', fontSize: 12 }}>{item.humidity}%</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', height: 75 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>{item.feels_like}°</Text>
                            <View style={{ width: 5, height: heightFeelsLike(data,item), borderRadius: 20, backgroundColor: "white", marginTop: 2 }}></View>
                        </View>
                    </View>
                </View>
    }
        />
    }

    return (
        <View style={{ backgroundColor: '#FFFFFF30', borderRadius: 30, marginTop: 10, padding: 30, flexDirection: 'row' }}>
                {renderHour(data)}
        </View>
    )
}

const styles = StyleSheet.create({})
