import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {IItem} from './AddItems';

const Item: React.FC<IItem> = ({item, quantity}) => {
  return (
  
      <View style={styles.item}>
          <Text style={styles.itemName}>{item}</Text>
          <Text style={styles.quantity}>x{quantity}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  itemName: {
    fontWeight: '500',
  },
  deleteItem:{
    height:40,
    width:40,
    margin:5,
    backgroundColor:"red",
    borderRadius:50
  },
  dlt:{
    alignItems:"center",
    flex:1,
    flexDirection:"row"
    ,justifyContent:"flex-end"
  },
  quantity: {
    padding: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});
export default Item;
