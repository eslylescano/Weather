import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Constants from 'expo-constants';

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
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>Locations</Text>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>O</Text>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 25 }}>T</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: 'white', fontSize: 22 }}>Kendal</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: '#FFFFFF90', fontSize: 18 }}>Mon 29 June 22:28</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10  }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: '#FFFFFF', fontSize: 80, fontFamily: 'sans-serif'}}>O</Text>
              <Text style={{ color: '#FFFFFF', fontSize: 80, fontFamily: 'sans-serif' }}>12°</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ color: '#FFFFFF90', fontSize: 20 }}>14°/11° Feels like 11°</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: 15 }}>
            <Text style={{ color: 'white', fontSize: 22 }}>Mostly Cloudy</Text>
          </View>
          </View>

          <View style={{ backgroundColor: '#FFFFFF50', borderRadius: 30,marginTop:60 }}>
            <View style={{flexDirection:'row',paddingTop:40,paddingRight:60,paddingBottom:40,paddingLeft:60}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:20,height:40,backgroundColor:"white",borderRadius:50}}></View>
                  <View style={{flexDirection:'column'}}>
                    <Text>Precipitation</Text>
                    <Text>20%</Text>
                  </View>
                </View>

                <View></View>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:20,height:40,backgroundColor:"white",borderRadius:50}}></View>
                  <View style={{flexDirection:'column'}}>
                    <Text>Precipitation</Text>
                    <Text>20%</Text>
                  </View>
                </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


