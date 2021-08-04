import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View ,FlatList, TouchableOpacity } from "react-native";
import globalStyles from "../styles/global";


const Home = ({navigation}) => {

    const onClick =()=>{
        navigation.navigate('ReviewDetails');
    }

    const [reviews, setreviews] = useState([
        {title:"PUBG",rating:5,category:"shooting",key:'1'},
        {title:"COD",rating:5,category:"shooting",key:'2'},
        {title:"Free Fire",rating:5,category:"shooting",key:'3'},
        {title:"Clash of clan",rating:5,category:"Farm",key:'4'},

    ])

  return (
    <View style={globalStyles.container}>
      <FlatList
      data= {reviews}
      renderItem={({item})=>(
          <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)} >
              <Text style={globalStyles.text} >{item.title}</Text>
              <Text>Hello</Text>
          </TouchableOpacity>
      )
    
    }

      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
