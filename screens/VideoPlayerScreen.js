import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Video from 'react-native-video';
export default function VideoPlayerScreen({navigation, route}) {
   /* Get the param */
   const { myParams } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Video 
          source={{uri:myParams.link}}
          style={styles.backgroundVideo}
           />
    </View>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },});