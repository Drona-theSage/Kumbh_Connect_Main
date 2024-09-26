import { StyleSheet, Text, View,Image} from "react-native";
import React from "react";
import tw from 'twrnc'; //using tailwind react native ..use npm add twrnc
import NavOptions from "../Components/NavOptions";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {
  return (
    <SafeAreaView  style= {tw`flex bg-gray-100 h-full`}>
    <View style={tw` p-5`}>
        <Image
            style={{
                width:200,height:200,resizeMode: "contain",
            }}
           source={{
            uri:"https://educraft.tech/wp-content/uploads/2022/12/learning-objectives.png",
           }}
       />
       <NavOptions/>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue",
    },
    container:{
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
    },
})