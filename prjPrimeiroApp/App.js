import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,CheckBox,} from 'react-native';
import { Picker } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
            <Image
                 style={{width:80, height:80,borderRadius:20,borderWidth:2}}
                 source={require("./assets/GatoTriste.jpg")}
              />
        </View>


<View style ={{borderRadius:15 ,borderWidth:2,paddingTop:'10px'}}>
        <View styles={styles.dados}>

              <Text style={styles.texto}>
                Dados Pessoais
              </Text>
              <TextInput
                  style={styles.input}
                  placeholder="Digite seu nome:"
                  keyboardType='numeric'
              />
              <br></br>
              <TextInput
                  style={styles.input}
                  placeholder="Digite seu telefone:"
                  keyboardType='numeric'
              />
                            <br></br>

              <TextInput
                  style={styles.input}
                  placeholder="Digite seu endereço:"
                  keyboardType='numeric'
              />
                             <br></br>

              <TextInput
                  style={styles.input}
                  placeholder="Digite seu email:"
                  keyboardType='numeric'
              />
                            <br></br>


</View>
            </View>
        <br></br>
      <View style ={{borderRadius:15 ,borderWidth:2,}}>

            
                <Text style={styles.texto}>
                  Outras Informações:
                </Text>
                <View styles={styles.info}>
                <Picker style={{ hight: 50, width:150,paddingLeft:'20px',alignItems:'center'}}  >
                  <Picker.Item label="Programador" value="Programador" />
                  <Picker.Item labe="ADM" value="ADM" />


                </Picker>
             </View>
          </View>
          <br></br>
          <br></br>

          <View>

              <View style={styles.ultimo}>
                  Nome:
                  <br>
                  </br>
                  
                  Telefone:
                  <br></br>
                  Endereço:
                  <br></br>
                  Email:
                  <br></br>
                  Hobby:
                  <br></br> 
                  Aceito:


              </View>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',

  //  alignItems: 'center',
  //  justifyContent: 'center',
    
  },
 imagem:{ 
   padding:10,
   alignItems:'center',
   paddingBottom:'50px',
   paddingTop:'20px',
   // borderWidth:2,

  },
  
  dados:{
    alignItems:'center',
    fontSize:40,
    margin:10,
    paddingTop:'100px'
    //borderWidth:2,
    

    },
   texto:{
    fontSize: '20px',
    paddingLeft:'10px'
          
  },
  input:{
    backgroundColor: 'white',
    paddingLeft:'10px'
    // borderWidth:2,

  },
 // info:{
  //  paddingLeft
  
  ultimo:{
    borderRadius:15 ,
    borderWidth:2,
    paddingTop:'5px',
    paddingLeft: '15px',
    fontSize:'20px',
    fontFamily:'arial',
    
  },
        

});
