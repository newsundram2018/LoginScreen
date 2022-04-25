import React,{useEffect, useState} from 'react';
import {SafeAreaView,ScrollView, StyleSheet, Text,FlatList, View, Touchable, TouchableOpacity,} from 'react-native';
import Header from './src/components/Header';
import Item from './src/components/Item';
import AddItem, {IItem} from './src/components/AddItems'; /* import AddItem and interface*/
import styled from 'styled-components/native';


const App = () => {
 
  const [shoppingList, setShoppingList] = useState<IItem[]>([]); // set the type of what the hook expects to be an array of IItems.
  useEffect(() => {
    
    console.log("ChangeHappend")

  }, [shoppingList]);
  // console.log("ShoppingList]]]]]]]]]]",shoppingList);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Header title =  {"Shopping List"}/>

      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item,index}) => (            
            <Item item = {item.item} quantity={item.quantity}/>
          )}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper:{
    padding: 5,
  },
  dltbutton:{
    width:40,margin:10,height:40,backgroundColor:"red"
  }
});

export default App;



