import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import Svg, { Line } from 'react-native-svg';

export default function Daily() {
    const data = [
        { date: new Date('2014-09-27T18:09:49-0300'), icon: 'drop', humidity: 30, temp_min: 10,temp_max: 15 },
        { date: new Date('2014-09-27T18:12:49-0300'), icon: 'drop', humidity: 40, temp_min: 11,temp_max: 16 },
        { date: new Date('2014-09-27T18:15:49-0300'), icon: 'drop', humidity: 50, temp_min: 12,temp_max: 17 },
        { date: new Date('2014-09-27T18:18:49-0300'), icon: 'drop', humidity: 10, temp_min: 9,temp_max: 16 },
        { date: new Date('2014-09-27T18:21:49-0300'), icon: 'drop', humidity: 17, temp_min: 7,temp_max: 12 },
        { date: new Date('2014-09-27T18:00:49-0300'), icon: 'drop', humidity: 19, temp_min: 12,temp_max: 16 },
        { date: new Date('2014-09-27T18:03:49-0300'), icon: 'drop', humidity: 21, temp_min: 11,temp_max: 18 },
        { date: new Date('2014-09-27T18:06:49-0300'), icon: 'drop', humidity: 29, temp_min: 15,temp_max: 20 }]

    const heightTemp = (data, { temp_min,temp_max }) => {
        const minHeight = 10;
        const maxHeight = 36;
        const diffTempArr = data.map(item=>item.temp_max-item.temp_min);
        const diffTemp=temp_max-temp_min;
        const minDiff = Math.min(...diffTempArr);
        const maxDiff = Math.max(...diffTempArr);
        if(minDiff===maxDiff)
        return maxHeight;
        return minHeight+(diffTemp-minDiff)/((maxDiff-minDiff)/(maxHeight-minHeight));
    }

    const calcMarginTopTemps = (data, { temp_min}) => {
        const temp=temp_min;
        const minMargingTop=20;
        const maxMargingTop=35;
        const TempArr = data.map(item=>item.temp_min);
        const minTemp=Math.min(...TempArr);
        const maxTemp=Math.max(...TempArr);
        if(maxTemp===minTemp)
        return minMargingTop;
        return minMargingTop-((minMargingTop-maxMargingTop)/(maxTemp-minTemp))*(maxTemp-temp);
    }

    const renderDaily = (data) => {
        return <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>

                <View style={{ alignItems: 'center', marginRight: 25 }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Today</Text>
                    {/* <Entypo name="cloud" size={20} color="white" style={{ marginTop: 15 }} /> */}
                    <View style={{ height: 70, width: 50,marginTop:5 }}>
                    <Entypo name="cloud" size={23} color="white" style={{ position:'absolute',left:0,top:5 }} />
                    <Entypo name="cloud" size={23} color="white" style={{ position:'absolute',right:0,bottom:5 }} />
                        <Svg height="70" width="50" >
                            <Line x1="41" y1="17" x2="9" y2="51" stroke="white" strokeWidth="1" />
                        </Svg>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Entypo name={item.icon} size={14} color="white" />
                        <Text style={{ color: 'white', fontSize: 12 }}>{item.humidity}%</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-start',marginTop:calcMarginTopTemps(data, item) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>{item.temp_max}°</Text>
                            <View style={{ width: 5, height: heightTemp(data, item), borderRadius: 20, backgroundColor: "white", marginTop: 2 }}></View>
                            <Text style={{ color: 'white', fontSize: 16, marginTop: 2 }}>{item.temp_min}°</Text>
                        </View>
                    </View>
                </View>
            }
        />
    }

    return (
        <View style={{backgroundColor: '#FFFFFF30', borderRadius: 30, marginTop: 10, padding: 30}}>
        <View style={{  flexDirection: 'row' }}>
            {renderDaily(data)} 
        </View>
        <View style={{alignItems:'flex-end'}}>
        <Text style={{ fontSize: 16, color: 'white' }}>Yesterday: 15°/11°</Text>
        </View>

        </View>
    )
}


