import { StatusBar } from 'expo-status-bar';
import React,{useState,useRef,UseEffect} from 'react';
import Comp,{ Comp1,Comp2,Zara,Zaraisanappdeveloper } from './components/comp'
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const [name,setName]=useState('mmesoma')

  return (
    <View style={styles.container}>
      <Text>Open {name} up App.js to start working {name}  on simple  app! are you sure </Text>
      <StatusBar style="auto" />
      <Comp/>
      <Comp1 age={10} name={"blessing"} />
      <Comp2/>
      <Zara/>
      <Zaraisanappdeveloper/>
      <View style={styles.mystyle}>

      </View>
      <Button title='micheal' onPress={()=>setName(name)}>
         micheal
      </Button>

    </View>
  );
}
export const Test=()=>{

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mystyle:{
    backgroundColor:'pink',
    width:200,
    height:500
  }
});
