import React,{Component}from 'react';
import {View,Text,TextInput,Modal,KeyboardAvoidingView,StyleSheet,TouchableOpacity,
Alert, ScrollView, Image,} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import {Input} from 'react-native-elements'
import {Header} from 'react-native-elements';

export default class QueryScreen extends React.Component{
    render(){
        return(
            <View>
            <Header
          centerComponent={{
                  text:"Food Mail",
                  style:{
                  color:"#03bcff",
                  fontSize:20,
                  fontWeight:"bold",
                  width:1200,
                  textAlign:"center"
                  }
              }}
            backgroundColor="#ffffff"  
       />

            </View>
        )
    }
}