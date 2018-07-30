/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const gerarNovaFrase=()=>{
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio*5);
  var frases = Array();
  frases[0] ='Se falta de tempo fosse desculpa, somente os desoculpados teriam sucesso';
  frases[1] ='Deixar de avançar por causa de medo, desconfiança, covardia, complexos, acomodação é desperdiçar tempo e desperdiçar vida.';
  frases[2] ='O futuro pertence as pessoas que acreditam na beleza de seus sonhos';
  frases[3] ='Tempo é a vida passando que não volta mais.';
  frases[4] ='Perder tempo é perder vida.';
  
  var fraseEscolhida  = frases[numeroAleatorio];

 Alert.alert(fraseEscolhida);


}

export default class Frases extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Image source={require('./imgs/logo.png')} />
          <TouchableOpacity 
          onPress={gerarNovaFrase} 
          style={styles.botao} >
            <Text style={styles.textoBotao}>Frases do dia</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  botao: {
    backgroundColor: '#538530',
    paddingVertical:10,
    paddingHorizontal:40,
    marginTop:20
  },
  textoBotao:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('Frases', () => Frases);
