import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RazorpayCheckout from 'react-native-razorpay';
import RazorpayCheckout from "react-native-razorpay"



const ParentProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userParentFirstName, setUserParentFirstName] = useState('');
  const [userParentLastName, setUserParentLastName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const asyncFirstName = await AsyncStorage.getItem('userFirstName');
      const asyncLastName = await AsyncStorage.getItem('userLastName');
      const asyncUserName = await AsyncStorage.getItem('userUserName');
      const asyncUserParentFirstName = await AsyncStorage.getItem('userParentFirstName');
      const asyncUserParentLastName = await AsyncStorage.getItem('userParentLastName');

      setFirstName(asyncFirstName || '');
      setLastName(asyncLastName || '');
      setUserName(asyncUserName || '');
      setUserParentFirstName(asyncUserParentFirstName || '');
      setUserParentLastName(asyncUserParentLastName || '');
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subBtn} onPress={()=>{
            var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: 'rzp_test_5FcvK0MsUDGkTa',
    amount: '5000',
    name: 'Acme Corp',
    order_id: '',//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'gaurav.kumar@example.com',
      contact: '9191919191',
      name: 'Gaurav Kumar'
    },
    theme: {color: '#53a20e'}
  }
  console.log('RazorpayCheckout:', RazorpayCheckout);
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    console.log(error,"error.....")
    alert(`Error: ${error.code} | ${error.description}`);
  });
        }}>
<Text style={{color:"white"}}>Subscribe Now</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Image source={require('../../assets/my-yt.png')} style={styles.profileImage} />
          {/* <Text style={styles.fullNameText}>{`${firstName} ${lastName}`}</Text> */}
          <Text style={styles.fullNameText}> {`${userParentFirstName} ${userParentLastName}`}</Text>
          <Text style={styles.userNameText}>{userName}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#54b6f7',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 65,
    marginBottom: 20,
  },
  userNameText: {
    color: 'white',
    fontSize: 18,
  },
  fullNameText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subBtn: {
    width: '90%',
    height:50,
    borderRadius:10,
    backgroundColor:"#54b6f7",
    position: "absolute",
    bottom: 20,
    alignItems:"center",
    alignSelf:'center',
    justifyContent:"center"
  }
});

export default ParentProfileScreen;
