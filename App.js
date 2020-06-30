import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Constants from 'expo-constants';
import { EvilIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function App() {
  return (
    <SafeAreaView >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
            colors={['rgba(75,62,215,1)', 'rgba(139,178,213,1)']}
          />
          <View style={{ alignItems: 'flex-end', marginTop: Constants.statusBarHeight * 1.5 }}>
            <View style={{ flexDirection: 'row',alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>Locations</Text>
              <EvilIcons name="search" size={30} color="white" style={{ marginRight: 25 }} />
              <Entypo name="dots-three-vertical" size={20} color="white" style={{ marginRight: 25 }} />
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: 'white', fontSize: 22 }}>Kendal</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: '#FFFFFF90', fontSize: 18 }}>Mon 29 June 22:28</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10  }}>
            <View style={{ flexDirection: "row",alignItems: 'center'  }}>
            <Entypo name="cloud" size={60} color="white"  />
              <Text style={{ color: '#FFFFFF', fontSize: 80, fontFamily: 'sans-serif',marginLeft:15 }}>12°</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: '#FFFFFF90', fontSize: 20 }}>14°/11° Feels like 11°</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <Text style={{ color: 'white', fontSize: 22 }}>Mostly Cloudy</Text>
          </View>
          </View>

          <View style={{ backgroundColor: '#FFFFFF30', borderRadius: 30,marginTop:60 }}>
            <View style={{flexDirection:'row',paddingTop:30,paddingRight:60,paddingBottom:30,paddingLeft:60,justifyContent:"space-between"}}>
                <View style={{flexDirection:'row',alignItems: 'center'}}>
                <Entypo name="drop" size={26} color="white" style={{marginRight:15}} />
                  <View style={{flexDirection:'column'}}>
                    <Text style={{color:"white",fontSize:16}}>Precipitation</Text>
                    <Text style={{color:"white",fontSize:16,marginTop:5}}>40%</Text>
                  </View>
                </View>

                <View style={{width:1,backgroundColor:"white",height:'85%',alignSelf:"center"}}></View>
                <View style={{flexDirection:'row',alignItems: 'center'}}>
                <Entypo name="drop" size={26} color="white" style={{marginRight:15}} />
                  <View style={{flexDirection:'column',alignSelf:"flex-end"}}>
                    <Text style={{color:"white",fontSize:16}}>UV index</Text>
                    <Text style={{color:"white",fontSize:16,marginTop:5}}>Low</Text>
                  </View>
                </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


