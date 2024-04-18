import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNavBar = ({ navigation }) => {
  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => handleNavigation('MainHome')}>
        <Ionicons name="fast-food" size={18} color="black" />
        <Text style={{fontSize:"11px"}}>Swiggy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => handleNavigation('Food')}>
        <Ionicons name="restaurant" size={18} color="black" />
        <Text style={{fontSize:"11px"}}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => handleNavigation('Instamart')}>
        <Ionicons name="basket" size={18} color="black" />
        <Text style={{fontSize:"11px"}}>Instamart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => handleNavigation('CreditCard')}>
        <Ionicons name="card" size={18} color="black" />
        <Text style={{fontSize:"11px"}}>Credit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => handleNavigation('Discount')}>
        <Ionicons name="pricetags" size={18} color="black" />
        <Text style={{fontSize:"11px"}}>Discount</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 58,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop:0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavBar;
