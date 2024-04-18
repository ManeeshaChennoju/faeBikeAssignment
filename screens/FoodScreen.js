// FoodScreen.js
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TextInput } from 'react-native';
import BottomNavBar from './BottomNavBar'; 
import { FaSearch } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { RxDividerVertical } from "react-icons/rx";

const FoodScreen = ({navigation }) => {
  return (
    <View style={{flex: 1}}>
    <ScrollView style={styles.container}>
         <View style={styles.contentContainer}>
           <View style={styles.topProfileContainer}>
             <View style={styles.top1}>
               <View style={styles.top11}>
                 <Text style={styles.topText}>Cadenza</Text>
                 <MdKeyboardArrowDown size={24} color='white'/>
               </View>
               <View>
                 <Text style={styles.topText}>Calyspso Kudu Main Rd</Text>
               </View>
             </View>
             <View style={styles.top2andTop3}>
               <View style={styles.top2}>
                 <Text style={{color:"red",fontWeight:"bold"}}>One</Text>
               </View>
               <View style={styles.top3}>
                 <CgProfile size={28} color="white"/>
               </View>
             </View>
           </View>
   
           <View style={styles.searchBarContainer}>
             <View style={styles.container22}>
               <TextInput
                 placeholder="Search for 'food'"
                 style={styles.searchInput}
                 value=""
               />
               <View style={styles.searchIcon}>
                 <FaSearch size={20} color="#e74c3c" />
               </View>
               <RxDividerVertical />
               <IoMdNotifications size={25} color="#e74c3c" />
             </View>
           </View>
   
           <View style={{padding: 10}}>
             <View style={styles.card}>
               <View style={styles.cardBody}>
                 <View style={styles.cardLeft}>
                   <Text style={styles.cardTitle1}>Say Lite</Text>
                   <Text style={styles.cardTitle2}>InsanelyGood</Text>
                   <Text style={styles.cardText}>Freshly handmade paneer, stoneground batter & more.</Text>
                   <Text style={styles.shopNow}>Shop Now</Text>
                 </View>
                 <View style={styles.cardRight}>
                   <Image
                     source={{ uri: 'https://assets.cntraveller.in/photos/60ba1ef8002baf698cc67527/16:9/w_1360,h_765,c_limit/homemade-paneer-recipes-1366x768.jpg' }}
                     style={styles.cardImage}
                   />
                 </View>
               </View>
             </View>
           </View>
   
           <View style={styles.foodDelandDine}>
             <View style={styles.foodDelivery}>
               <View style={styles.cardTop}>
                 <Text style={styles.foodTitle}>FOOD DELIVERY</Text>
                 <Text style={styles.foodSubtitle}>one FOOD AESTA</Text>
                 <Text style={styles.foodOffer}>UP TO 60% OFF + FREE DEL</Text>
               </View>
               <Image
                 source={{ uri: 'https://t3.ftcdn.net/jpg/05/55/59/54/360_F_555595498_Vus1gAmx4tgV0hQac3tFxaq4iZobVMCl.jpg' }}
                 style={styles.foodImage}
               />
             </View>
             <View style={styles.foodDelivery}>
               <View style={styles.cardTop}>
                 <Text style={styles.foodTitle}>DINEOUT</Text>
                 <Text style={styles.foodSubtitle}>GIRF DINING FESTIVAL</Text>
                 <Text style={styles.foodOffer}>FLAT 50% OFF</Text>
               </View>
               <Image
                 source={{ uri: 'https://things2.do/blogs/wp-content/uploads/2023/05/Swiggy-Dineout-Great-Indian-Restaurant-Festival.jpg' }}
                 style={styles.foodImage}
               />
             </View>
             <View style={styles.foodDelivery}>
               <View style={styles.cardTop}>
                 <Text style={styles.foodTitle}>INSTAMART</Text>
                 <Text style={styles.foodSubtitle}>INSTANT GROCERY</Text>
                 <Text style={styles.foodOffer}>FREE DELIVERY</Text>
                 <Text style={styles.deliveryTime}>8 MINS</Text>
               </View>
               <Image
                 source={{ uri: 'https://assets.entrepreneur.com/content/3x2/2000/1597127612-maria-lin-kim-8RaUEd8zD-U-unsplash.jpg?format=pjeg&auto=webp&crop=4:3' }}
                 style={styles.foodImage}
               />
             </View>
           </View>
   
           <View style={styles.smallCardsContainer}>
             <View style={styles.smallcards}>
               <View style={styles.smallCardLeft}>
                 <Text style={{fontSize: 10, color: 'white', fontWeight: 'bold'}}>MINIS</Text>
                 <Text style={{fontSize: 5, color: 'grey', fontWeight: 'bold'}}>Unique Finds</Text>
               </View>
               <View>
                 <Image
                   source={{ uri: 'https://thumbs.dreamstime.com/b/mini-house-stack-coins-money-mortgage-savings-buy-loan-to-business-investment-real-estate-concept-invesment-risk-132709667.jpg' }}
                   style={styles.smallCardImg}
                 />
               </View>
           </View>
   
           <View style={styles.smallcard22} >
               <View style={styles.smallCardLeft}>
                 <Text style={{fontSize: 10, color: 'white', fontWeight: 'bold'}}>INSTANELYGOOD</Text>
                 <Text style={{fontSize: 5, color: 'grey', fontWeight: 'bold'}}>Quality Grocery</Text>
               </View>
               <View>
                 <Image
                   source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQti3FOyH5iSggEZ8luW4msRYlX_jqLcmFc5J_lJDPX9w&s' }}
                   style={styles.smallCardImg}
                 />
               </View>
           </View>
   
           </View>
         
           
         </View>
       </ScrollView>
       <BottomNavBar navigation={navigation}/> 
       </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    // backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(to bottom, #4c669f, #3b5998, #192f6a)',
  },
  topProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  top1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  top11: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topText: {
    color: 'white',
  },
  top2andTop3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  top2: {
    height: 20,
    width: 80,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'white',
    color: 'red',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 5,
  },
  top3: {
    marginLeft: 10,
  },
  searchBarContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    // padding: 5,
    paddingLeft:3,
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  container22: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    color: 'black',
    flex: 1,
    borderWidth: 0,
    backgroundColor: 'transparent',
    lineHeight: 20,
  },
  searchIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  card: {
    marginTop: 7,
    marginBottom: 7,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBody: {
    flexDirection: 'row',
    width: '100%',
  },
  cardLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '60%',
    margin: 10,
  },
  cardRight: {
    width: '40%',
  },
  cardTitle1: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: 'white',
    fontSize: 10,
  },
  cardTitle2: {
    fontFamily: 'fantasy',
    color: 'white',
    fontSize: 14,
  },
  cardText: {
    marginVertical: 5,
    color: 'white',
    fontSize: 10,
  },
  shopNow: {
    color: 'white',
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  cardImage: {
   width:80,
   height:100
  },
  foodDelandDine: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent:"center",
    padding: 5,
  },
  foodDelivery: {
    width: 95,
    height:100,
  margin:2
  },
  cardTop: {
    // marginBottom: 10,
  },
  foodTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    fontFamily: 'Roboto',
  },
  foodSubtitle: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 8,
  },
  foodOffer: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 5,
  },
  deliveryTime: {
    fontWeight: 'bold',
    fontSize: 5,
    color: 'grey',
  },
  foodImage: {
    width: 60,
    height: 60,
  },
  smallCardsContainer:{
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"space-even",
    // border:"1px solid red",
    margin:2,
    width:"100%",
    paddingLeft:20
  },

  smallcards:{
    width: 100,
    maxWidth:100,
    height:38,
  // margin:2,
  flexDirection:"row",
  // border:"1px solid red"
  },
  smallcard22:{
  width: 100,
    maxWidth:100,
    height:38,
  marginLeft:12,
  flexDirection:"row",
  // border:"1px solid red"
  },
  smallCardImg:{
    width:60,
    height:40
  },
  smallCardLeft:{
    flexDirection:"column",
    alignItems:"flex-start",
    paddingRight:5
  }
});

export default FoodScreen;
