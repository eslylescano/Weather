import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function Hourly() {
    return (
        <View style={{ backgroundColor: '#FFFFFF30', borderRadius: 30, marginTop: 10, padding: 30, flexDirection: 'row' }}>
            <View style={{ alignItems: 'center',marginRight:25 }}>
                <Text style={{ fontSize: 16, color: 'white' }}>21:00</Text>
                <Entypo name="cloud" size={20} color="white" style={{ marginTop: 15 }} />
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Entypo name="drop" size={14} color="white" />
                    <Text style={{ color: 'white', fontSize: 12 }}>30%</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', height: 75 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>15°</Text>
                        <View style={{ width: 5, height: 32, borderRadius: 20, backgroundColor: "white", marginTop: 2 }}></View>
                    </View>
                </View>
            </View>
          

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: 'white' }}>21:00</Text>
                <Entypo name="cloud" size={20} color="white" style={{ marginTop: 15 }} />
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <Entypo name="drop" size={14} color="white" />
                    <Text style={{ color: 'white', fontSize: 12 }}>30%</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', height: 75 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>15°</Text>
                        <View style={{ width: 5, height: 32, borderRadius: 20, backgroundColor: "white", marginTop: 2 }}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
