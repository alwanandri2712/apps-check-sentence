import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

import { Container, Content, Button, Input } from 'native-base'

class Inputs extends Component {
   state = {
      email: '',
      password: '',
      respon: '',
      message: '',
      error: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   check = async (kalimat) => {
      this.setState({message: ''})
      this.setState({error: ''})
      const asu = await [" asu ", " pada ", "tidak","kontol"];
      asu.map(index => {
         var list = new RegExp(index + ".*")
         var check = kalimat.match(list);
         if(check){
            this.setState({
               message: 'Kalimat Benar !!!'
            })
         }
      })
   }

   render() {
      return (
         <Container>
            <Image source={require('./wave.png')} style={{position:'absolute'}} />
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
               <Text style={{fontSize: 20,marginHorizontal:300, fontWeight:'bold', color:'#eee'}}>
               Check Kalimat
               </Text>

               <TextInput style={styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Masukkan Kalimat"
                  placeholderTextColor = "#eee"
                  autoCapitalize = "none"
                  onChangeText ={(kalimat) => this.check(kalimat)}
               />
               
               {/* <Button small onPress={() => this.login()} info style={{
                  width:300, justifyContent:'center', borderRadius:5
               }}>
                  <Text style={{fontSize:15, color:'white'}}>CHECK</Text>
               </Button> */}
               <Text style={{fontSize:15,color:'green', marginVertical:10, marginTop:50}}>{ this.state.message }</Text>
               {/* <Text style={{fontSize:15,color:'green', marginVertical:10, marginTop:50}}>{ this.state.error }</Text> */}
            </View>
         </Container>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
   },
   // input: {
   //    margin: 15,
   //    height: 40,
   //    marginLeft:195,
   //    width:350,
   //    borderColor: '#7a42f4',
   //    borderWidth: 1,
   //    borderRadius: 15,
   // },
   input: {
      borderWidth:2.5,
      borderColor:'#eee',
      color: '#eee',
      borderRadius: 20,
      paddingVertical:5,
      paddingHorizontal:10,
      width: 300,
      marginVertical:20,
      fontSize:14
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      height: 40,
      borderRadius:5,

   },
   submitButtonText:{
      color: 'white'
   }
})