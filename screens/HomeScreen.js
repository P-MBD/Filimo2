import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet,TouchableOpacity,Image ,ScrollView} from 'react-native';
import {navigationContainer} from '@react-navigation/native';
import Axios from 'axios';

export default function HomeScreen ({navigation})  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [newdata, setNewData] = useState([]);
  const [specialNewData, setSpecialNewData] = useState([]);
  useEffect(() => {
    Axios.get('https://androidsupport.ir/pack/aparat/getBestVideos.php')
      .then(({ data }) => {
        console.log("defaultApp -> data", data)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

      Axios.get('https://androidsupport.ir/pack/aparat/getNewVideos.php')
      .then(({ data }) => {
        console.log("defaultApp -> data", data)
        setNewData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

      Axios.get('https://androidsupport.ir/pack/aparat/getSpecial.php')
      .then(({ data }) => {
        console.log("defaultApp -> data", data)
        setSpecialNewData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    

  }, []);


 


  return (
    <ScrollView>
    <View style={styles.container}>
       
      {isLoading ? <ActivityIndicator /> : (
        <View>
          <Text style={styles.titles}>Best Videos</Text>
        <FlatList
         horizontal true
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            
            console.log("item", item)
            return (
    
              <TouchableOpacity style={styles.card} 
              onPress={() => {navigation.navigate('VideoPlayerScreen',
              {myParams:item,
               title:item.title}
               )}
             }
              >
             <Image style={styles.image} source={{ uri: item.icon }} />
             <View style={styles.cardContent}>
               <Text style={styles.name}>{item.title}</Text>
               <Text style={styles.description}>{item.description}</Text>

             </View>
           </TouchableOpacity>   
            )
          }}
        />

<Text style={styles.titles}>New Videos</Text>
        <FlatList
         horizontal true
          data={newdata}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            
            console.log("item", item)
            return (
    
              <TouchableOpacity style={styles.card} 
              onPress={() => {navigation.navigate('VideoPlayerScreen',
              {myParams:item,
               title:item.title}
               )}
             }
                >
             <Image style={styles.image} source={{ uri: item.icon }} />
             <View style={styles.cardContent}>
               <Text style={styles.name}>{item.title}</Text>
               <Text style={styles.description}>{item.description}</Text>

             </View>
           </TouchableOpacity>   
            )
          }}
        />

<Text style={styles.titles}>Special Videos</Text>
        <FlatList
         horizontal true
          data={specialNewData}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {
            
            console.log("item", item)
            return (
    
              <TouchableOpacity style={styles.card} 
              onPress={() => {navigation.navigate('VideoPlayerScreen',
              {myParams:item,
               title:item.title}
               )}
             }
              >
             <Image style={styles.image} source={{ uri: item.icon }} />
             <View style={styles.cardContent}>
               <Text style={styles.name}>{item.title}</Text>
               <Text style={styles.description}>{item.description}</Text>

             </View>
           </TouchableOpacity>   
            )
          }}
        />
        </View>
      )}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: '#eeeeee',
    },
  cardContent: {
    marginLeft: 20,
    marginTop: 10, },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,},
    titles:{
      margin:20,
    },
  card: {
    width:370,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#008080',
    fontWeight: 'bold',
  }, 
  headerContent:{
    padding:30,
    alignsItem:'center',
    flex:1,
  }

})