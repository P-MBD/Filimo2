import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Axios from 'axios';

export default function HomeScreen() {
    const [isLoading, setLoading]= useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get('https://androidsupport.ir/pack/aparat/getBestVideos.php')
          .then(({ data }) => {
            console.log("defaultApp -> data", data)
            setData(data)
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            // console.log("index", index)
            return index.toString();
          }}
          renderItem={({ item }) => {

            console.log("item", item)
            return (

              <TouchableOpacity style={styles.card} 
              onPress={() => {navigation.navigate('ArticleScreen',
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
      )}
    </View>
  
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
    card: {
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
    }, followButton: {
      marginTop: 10,
      height: 35,
      width: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#00BFFF',
    },
    followButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
    },
  
  })